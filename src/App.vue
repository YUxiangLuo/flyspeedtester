<script setup>
import Nodes from './components/Nodes.vue'
import Header from './components/Header.vue'
import AddressInput from './components/AddressInput.vue'
</script>

<template>
  <Header />
  <AddressInput />
  <Nodes />
</template>

<style>
html {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0;
  background-color: whitesmoke;
  color: black;
}
</style>
