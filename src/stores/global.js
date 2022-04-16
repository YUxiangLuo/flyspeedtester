import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => {
    return { nodes: [], isLoading: false }
  },
  actions: {
    updateLantency(index, ms) {
      this.nodes[index].lantency = ms;
    },
    updateIsLoading(x) {
      this.isLoading = x;
    }
  }
})