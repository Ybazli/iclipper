import Vue from 'vue'
import Vuex from 'vuex'
import clipboard from './modules/clipboard'
import settings from './modules/settings'

Vue.use(Vuex)

const setting = require('electron-settings')

export default new Vuex.Store({
    modules: {
        clipboard,
        settings
    }
})

// const store = new Vuex.Store({
// 	state: {
// 		theme: setting.has('theme') ? setting.get('theme') : 'dark',
// 		fileSync: setting.has('fileSync') ? setting.get('fileSync') : false,
// 		items: []
// 	},
// 	getters: {
// 		getTheme: state => {
// 			return state.theme
// 		},
// 		getFileSync: state => {
// 			return state.fileSync
// 		},
// 		getItems: state => {
// 			return state.items
// 		}
// 	},
// 	actions: {
// 		//setting actions
// 		chnageTheme(...val) {
// 			setting.set('theme', val[1])
// 		},
// 		changeFileSync(...val) {
// 			setting.set('fileSync', val[1])
// 		},

// 		//items jobs
// 		addToItems(...item) {
// 			this.state.items.push(val[1])
// 		},
// 		removeItem(...index) {
// 			this.state.items.splice(index[1])
// 		},
// 		removeAll() {
// 			this.state.items = []
// 		}
// 	}
// })

// export default store
