<template>
  <modal-factory />
  <router-view/>
</template>

<script>
import { watch } from 'vue'
import modalFactory from './components/ModalFactory'
import { useRouter, useRoute } from 'vue-router'
import services from './services'
import { setCurrentUser } from './store/user'

export default {
  components: { modalFactory },
  setup () {
    const router = useRouter()
    // informações da rota: path, name, etc
    const route = useRoute()

    watch(() => route.path, async () => {
      // se for true, precisa estar logado para estar na rota
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')
        if (!token) {
          router.push({ name: 'Home' })
          return
        }

        // requisição para não ser direcionado para a home de qualquer forma, quando houver token
        const { data } = await services.uses.getMe()
        setCurrentUser(data)
      }
    })
  }
}
</script>
