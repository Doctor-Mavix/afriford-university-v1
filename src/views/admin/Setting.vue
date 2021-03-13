<template>
  <div class="white">
    <navbar />
    <div class="d-flex">
      <sidebar />

      <div class="dash-main bg-dash">
        <div class="px-md-12 py-md-5 px-2 py-2">
          <div>
            <div class="d-flex justify-space-between mt-5 mb-12">
              <h3 class="text-h5">
                Dashbord /
                <span class="primaire">Setting</span>
              </h3>
            </div>
          </div>

          <div class="white rounded px-5 py-5">
            <h3>School Information</h3>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="green"
                    label="School Addresse"
                    v-model="SchoolInformationState.address"
                    :rules="addressRules"
                    placeholder="This address will use to create automatic document"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    color="green"
                    label="Main Email"
                    v-model="SchoolInformationState.main_email"
                    :rules="mainEmailRules"
                    placeholder="required"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    color="green"
                    label="Second Email "
                    v-model="SchoolInformationState.second_email"
                    placeholder="not required"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    color="green"
                    label="School phone number"
                    v-model="SchoolInformationState.phone_number"
                    :rules="PhoneRules"
                    placeholder="official phone number"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    color="green"
                    label="School website"
                    v-model="SchoolInformationState.website"
                    :rules="websiteRules"
                    placeholder="official website"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    color="green"
                    label="School Accreditation"
                    v-model="SchoolInformationState.accreditation"
                    :rules="accreditationRules"
                    placeholder="Delivery by gouvernment"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    color="green"
                    label="School Admission"
                    v-model="SchoolInformationState.admission"
                    :rules="admissionRules"
                    placeholder="Unique "
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <div class="">
                    <v-btn
                      @click="saveSchoolInformation()"
                      class="bg-primaire white--text px-8"
                      >Save</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="PayeModal == true"
      id="modal-window"
      class="d-flex justify-center align-center"
    >
      <div class="modals white">
        <div class="d-flex justify-end">
          <a
            href=""
            @click.prevent="PayeModal = false"
            class="text-h4 mr-4 mt-1 cursor-pointer"
            >X</a
          >
        </div>
        <div class="px-3 px-md-12 py-3 py-md-8">
          <div>
            <h3>Il vous restes 40 000 FCFA a paye</h3>
          </div>

          <form action="">
            <div class="mt-3">
              <v-text-field
                color="green"
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Montants"
                required
              ></v-text-field>
            </div>
            <div>
              <p>
                Payer avec :
                <button type="submit" class="ml-3 yellow--text mr-3">MTN momo</button>
                <button type="submit" class="primaire mr-3">Visa</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <v-snackbar v-model="snackbar">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import navbar from "../../components/admin/NavBar";

import sidebar from "../../components/admin/SideBar";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    navbar,
    sidebar,
  },
  computed: {
    ...mapGetters(["SchoolInformationState"]),
  },
  methods: {
    ...mapActions(["getSchoolInformations", "editSchoolInformation"]),

    saveSchoolInformation() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        let second_email = this.SchoolInformationState.second_email;
        if (this.SchoolInformationState.second_email == "") second_email = " ";
        if (this.SchoolInformationState._id) {
          // update
          const ModelUpdate = {
            data: {
              address: this.SchoolInformationState.address,
              main_email: this.SchoolInformationState.main_email,
              second_email: second_email,
              phone_number: this.SchoolInformationState.phone_number,
              website: this.SchoolInformationState.website,
              accreditation: this.SchoolInformationState.accreditation,
              admission: this.SchoolInformationState.admission,
            },
            _id: this.SchoolInformationState._id,
          };
          this.editSchoolInformation(ModelUpdate).then(
            () => {
              this.message = "School Information updated successfully";
            },
            (error) => {
              if (error == "Error: Request failed with status code 400") {
                this.message = "Failed to edit school information";
              }
            }
          );
        }
        this.snackbar = true;
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getSchoolInformations();
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      message: "",
      loading: false,
      mainEmailRules: [
        (v) => !!v || "main email is required",
        (v) => /.+@.+\..+/.test(v) || "this email is not valid ",
      ],
      addressRules: [(v) => !!v || "address is required"],
      PhoneRules: [(v) => !!v || "phone is required"],
      websiteRules: [(v) => !!v || "website is required"],
      accreditationRules: [(v) => !!v || "accreditation is required"],
      admissionRules: [(v) => !!v || "admission is required"],
    };
  },
};
</script>
