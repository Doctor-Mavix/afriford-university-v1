
const state = {
    panier : 
        {
            showCart:false, 
        },
    drawerNav : {
        statut :false,
        main : true ,
        boutiques : false
    }
    
};

const getters = {
    panierState : (state) => state.panier ,

    drawerState : (state) => state.drawerNav
};

const actions = {
    // drawer nav main
    showDrawer :({commit})=>{
        commit('SHOW_DRAWER')
    },
    closeDrawer : ({commit}) => {
        commit('CLOSE_DRAWER_BOUTIQUE')
        commit('CLOSE_DRAWER')
    },
    showBoutiques: ({commit}) =>commit('SHOW_BOUTIQUES'),
    closeDrawerBoutique: ({commit}) =>commit('CLOSE_DRAWER_BOUTIQUE')
    
};

const mutations = {
    // drawer nav main
    SHOW_DRAWER(state){
        state.drawerNav.statut = true
    },
    CLOSE_DRAWER(state){
        state.drawerNav.statut = false 
      },
    SHOW_BOUTIQUES(state){
        state.drawerNav.main = false
        state.drawerNav.boutiques = true
      },
    CLOSE_DRAWER_BOUTIQUE(state){
        state.drawerNav.boutiques = false
        state.drawerNav.main = true
      }

};

export default {
    state,
    getters,
    actions,
    mutations
}