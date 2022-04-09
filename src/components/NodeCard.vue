<script setup>
const props = defineProps({
    node: Object,
    index: Number
})
</script>

<template>
  <el-card class="node-card">
    <template #header>
      <div class="card-header">
        <el-tag>{{ index+1 }}</el-tag>
        <span>{{ node.name }}</span>
      </div>
    </template>
    <div class="item">{{ node.protocol }}</div>
    <div class="item">{{ node.lantency }}</div>
    <el-button class="button" type="text">Check Config</el-button>
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
.item {
    font-size: .8rem;
    margin-bottom: 8px;
}
</style>