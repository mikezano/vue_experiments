import Vue from 'vue';
import Vuex from 'vuex';
import registry from './registry';

Vue.use(Vuex);

export const store = new Vuex.Store({

	state: {
		counter: 2,
		registry: registry
	},
	getters: {
		tripleCounter: state => {
			return state.counter * 3;
		},
		getComponent: (state, getters)=>(name)=>{
			var result  = state.registry.get(name);
			return result;
		},
		getComponents: (state, getters)=>()=>{
			return state.registry.components;
		}
	},
	mutations: {
		increment: (state, num) => {
			state.counter += num;
		},
		decrement: (state) => {
			state.counter--;
		}
	},
	actions: {
		//parameter deconstruct
		asyncDecrement: ({ commit }, asyncNum) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('decrement', asyncNum.by);
					resolve();
				}, asyncNum.duration);
			});
		}
	}
});