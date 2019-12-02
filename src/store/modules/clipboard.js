// states
const state = {
    items: []
}

// getters
const getters = {
    getItems: state => state.items
}

//actions
const actions = {
    fetchToItems({ commit }, ...val) {
        commit('fetchItems', val[0])
    },
    removeItem({ commit }, ...index) {
        commit('remove', index[0])
    },
    removeAll({ commit }) {
        commit('cleanAll')
    }
}

//mutations
const mutations = {
    fetchItems: (state, item) => state.items.push(item),
    remove: (state, index) => state.items.splice(index),
    cleanAll: state => (state.items = [])
}

//export all
export default {
    state,
    getters,
    actions,
    mutations
}
