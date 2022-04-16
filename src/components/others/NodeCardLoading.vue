<template>
    <n-card class="node-card">
      <template #header>
        <n-skeleton text width="60%" />
      </template>
      <n-skeleton text :repeat="6" />
    </n-card>
</template>