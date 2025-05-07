import Vuex from 'vuex';
import Vue from 'vue';
import user from "./modules/user";
import { getToken } from '@/utils/cookies';
Vue.use(Vuex);

const actions = {
    Login(){

    }
};

const mutations = {
    
};

const state = {
    token: getToken() || "",

};


export default new Vuex.Store({
    state,
    actions,
    mutations
});