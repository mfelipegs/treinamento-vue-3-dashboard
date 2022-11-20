import Store from '../store'

export default function useStore (module) {
  if (module) {
    return Store[module]
  }

  // se não tiver module, é passada a store completa
  return Store
}
