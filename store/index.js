import { petitionName } from '../constants'

export const state = () => ({
  signatures: '',
  totalSignatureCount: 0
})

export const mutations = {
  SET_SIGNATURES(state, payload) {
    state.signatures = payload.signatures
    state.totalSignatureCount = parseInt(payload.count)
  },
}

export const actions = {
  async getSignatures(context) {
    try {
      const url = `https://api.djnd.si/getPublicSignaturesAndFullCountForMultiple/?peticije=${petitionName}`
      const response = await this.$axios.get(url)
      const payload = {
        signatures: response.data.names,
        count: response.data.counter
      }
      context.commit('SET_SIGNATURES', payload)
    } catch (e) {}
  }
}
