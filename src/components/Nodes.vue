<script setup>
    import { computed } from '@vue/reactivity';
    import NodeCard from './NodeCard.vue';
    import { useNodesStore } from "../stores/nodes";
    const nodes_store = useNodesStore();
    const nodes = computed(() => nodes_store.list);
    
</script>

<template>
    <div class="nodes">
        <div class="container">
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
    max-width: 1400px;
    min-height: 800px;
    padding: 1rem;
    flex-wrap: wrap;
}
.container>.node-card {
    flex-basis: 400px;
    flex-grow: 0;
    flex-shrink: 1;
    margin-right: 1rem;
    margin-bottom: 1rem;
}
</style>