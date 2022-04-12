<script setup>
import { computed } from '@vue/reactivity';
const { VITE_SERVER, VITE_SERVER_PORT } = import.meta.env;

const props = defineProps({
    node: Object,
    index: Number
})
const protocol_icon = computed(() => {
  let icon;
  switch (props.node.protocol) {
    case "Trojan":
      icon = "/icons/trojan.png";
      break;
    case "Shadowsocks":
      icon = "/icons/shadowsocks.png";
      break;
    case "Vmess":
      icon = "/icons/v2fly.png";
      break;
  }
  return icon;
})
const lantency_color = computed(() => {
  let ms = props.node.lantency;
  if(ms===0) return 'danger';
  else if(ms<500) return 'success';
  else return 'warning'; 
})
const gen_config_url = computed(() => {
  return `http://${VITE_SERVER}:${VITE_SERVER_PORT}/gen_config/`+(props.index+1);
})
</script>

<template>
  <el-card class="node-card">
    <template #header>
      <div class="card-header">
        <el-tag type="info">{{ index+1 }}</el-tag>
        <span :title="node.name_full">{{ node.name }}</span>
      </div>
    </template>
    <div class="info">
      <div class="protocol">
          <img :src="protocol_icon">
          {{ node.protocol }}
      </div>
      <el-tag
        effect="dark"
        :type="lantency_color"
      >
        {{ node.lantency }}
      </el-tag>
    </div>
    <el-link type="primary" target="_blank" :href="gen_config_url">Get config</el-link>
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
div.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
div.info>div.protocol {
  display: flex;
  align-items: center;
  margin-bottom: .5rem;
}
div.info>div.protocol>img {
  width: 1rem;
  height: auto;
  margin-right: .5rem;
}


</style>