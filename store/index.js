import Vue from 'vue'

export const state = () => ({

    data: []

})

export const mutations = {

    SET_DATA(state, data) {
        Vue.set(state, 'data', data)
    },

}

export const actions = {

    async loadData({commit}, path) {

        await this.$axios.get(path).then(res => {
            commit('SET_DATA', res.data)
            return res
        }).catch(e => {
            alert('Sorry, it seems your resource does not exists or the header token is not set.')
        })
    },

}