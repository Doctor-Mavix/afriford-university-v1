import Vue from 'vue'
import Vuex from 'vuex'
import PublicAdmission from './modules/public/Admission' 

// univeral store
import Auth from './modules/admin/auth'

import Profil from './modules/admin/Profil' 

import Department from './modules/admin/Department' 

import Faculty from './modules/admin/Faculty' 

//Admin

import AdminAdmission from './modules/admin/Admission' 

import SchoolInformation from './modules/admin/SchoolInformation'

import Contact from './modules/admin/Contact' 


Vue.use(Vuex)

export default new Vuex.Store({
  modules : {
    PublicAdmission,
    Auth,
    Profil,
    Department,
    Faculty,
    AdminAdmission,
    SchoolInformation,
    Contact
    
  }
})
