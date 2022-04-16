<script setup>
    import { computed } from '@vue/reactivity';
    import NodeCard from './NodeCard.vue';
    import NodeCardLoading from './others/NodeCardLoading.vue';
    import { useGlobalStore } from "../stores/global";
    const global_store = useGlobalStore();
    const nodes = computed(() => global_store.nodes);
    const nodes_loading = new Array(20);
    const isLoading = computed(() => global_store.isLoading);
    
</script>

<template>
    <div class="nodes">
        <div v-if="isLoading" class="container">
            <NodeCardLoading v-for="node of nodes_loading" />
        </div>
        <div v-else class="container">
            <NodeCard v-for="node, index of nodes" :node="node" :index="index" />
        </div>
    </div>
</template>

<style scoped>
div.nodes {
    display: flex;
    justify-content: center;
}
.container {
    flex: 1;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    padding: 1rem;
    flex-wrap: wrap;
}
.container>.node-card {
    flex-basis: 15rem;
    flex-grow: 0;
    flex-shrink: 1;
    margin-right: 2rem;
    margin-bottom: 2rem;
}
</style>