import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const setting = require('electron-settings')

const store = new Vuex.Store({
	state: {
		theme: setting.has('theme') ? setting.get('theme') : 'dark',
		fileSync: setting.has('fileSync') ? setting.get('fileSync') : false
	},
	getters: {
		getTheme: state => {
			return state.theme
		},
		getFileSync: state => {
			return state.fileSync
		}
	},
	actions: {
		chnageTheme(...val) {
			setting.set('theme', val[1])
			console.log(val[1])
		},
		changeFileSync(...val) {
			setting.set('fileSync', val[1])
			console.log(val[1])
		}
	}
})

export default store
