import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		counter: 2
	},
	getters: {
		tripleCounter: state => {
			return state.counter * 3;
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