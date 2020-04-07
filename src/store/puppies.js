import axios from 'axios'

const state = () => ({
    puppies: []
})

const mutations = {
    SET_PUPPIES(store, payload) {
        store.puppies = payload
    }
}
const actions = {
    fetchPuppies({ commit }) {
        return axios.get('/mypuppy-api')
            .then(({ data }) => data)
            .then(data => commit('SET_PUPPIES', data))
    },
    addPuppy({ commit }) {
        return axios.post('/mypuppy-api')
            .then(({ data }) => data )
            .then(data => commit('SET_PUPPIES', data))
    }
}

const getters = {
    puppies: state => state.puppies || []
}

const namespaced = true

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced,
}