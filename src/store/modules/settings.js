const fileSetting = require('electron-settings')
//states
const state = {
    theme: fileSetting.has('theme') ? fileSetting.get('theme') : 'light',
    fileSync: fileSetting.has('fileSync') ? fileSetting.get('fileSync') : false
}

//getters
const getters = {
    getTheme: state => state.theme,
    getFileSync: state => state.fileSync
}

//actions
const actions = {
    async changeTheme(...val) {
        fileSetting.set('theme', val[1])
    },
    async changeFileSync(...val) {
        fileSetting.set('fileSync', val[1])
    }
}

//mutations
const mutations = {
    setTheme: (state, theme) => (state.theme = theme),
    setFileSync: (state, fileSync) => (state.fileSync = fileSync)
}

//export all
export default {
    state,
    getters,
    actions,
    mutations
}
