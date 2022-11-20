import { reactive } from 'vue'

const state = reactive({
  currentUser: {}
})

export default state

export function cleanCurrentUser () {
  state.currentUser = {}
}

export function setCurrentUser (user) {
  // seto o estado aqui e apenas quem tem acesso a alterar são as funções exportadas
  state.currentUser = user
}

export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}
