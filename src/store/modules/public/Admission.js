import axios from 'axios'

const state ={
   

}

const getters = {
  
}

const mutations ={
    SEND_ADMISSION_FORM(){

    },

    
}

const actions = {
    sendAdmisionForm : ({commit},formulaire)=>{
  
        return new Promise((resolve,reject)=>{
            axios 
            .post('/admission/student',formulaire)
                .then(res=>{
                    console.log(res);
                    resolve(res.data)
                },error =>{
                    console.log(error);
                    reject(error);
                })
                
        commit('SEND_ADMISSION_FORM')
        })
      
        

    },

   
    
}

export default {
    state,
    getters,
    mutations,
    actions
}