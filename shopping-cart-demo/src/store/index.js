import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { resolve } from 'core-js/fn/promise';


Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        cart:[],
        parts:null,
    },
    mutations:{
        addRobotToCart(state,robot){
            state.cart.push(robot);
        },
        updateParts(state,parts){
            state.parts = parts;
        },
        buyNow(state){
          state.cart = [];
        },
    },
    actions:{
        getParts({commit}){
            axios.get('http://localhost:8081/api/parts')
            .then(result=> {
              commit('updateParts',result.data)
            })
            .catch(console.error);
        },
    },
});


