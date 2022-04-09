import { defineStore } from 'pinia'

export const useNodesStore = defineStore('nodes', {
  state: () => {
    return { list: [] }
  },
  actions: {
    updateLantency(index, ms) {
      this.list[index].lantency = ms;
    }
  }
})