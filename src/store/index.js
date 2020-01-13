import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
state: {
    value: 8
},
mutations: {
    updateValue ( state, value){
        state.value = value;
    }
}
})