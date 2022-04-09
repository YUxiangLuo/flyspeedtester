<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { debounce } from 'lodash';

import { useNodesStore } from '../stores/nodes'
const nodes = useNodesStore();


onMounted(() => {
    // Create WebSocket connection.
    const socket = new WebSocket('ws://localhost:8888');

    // Connection opened
    socket.addEventListener('open', function (event) {
        socket.send('reset_lantency');
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
        let lantency_list = JSON.parse(event.data);
        lantency_list.forEach((ms, index) => {
            nodes.updateLantency(index, ms);
        });
    });



})

const addr = ref("");
const invalid = ref(false);
const isLoading = ref(false);

const getNodesByAddr = debounce(async () => {
    let url;
    try {
        url = new URL(addr.value); 
    } catch (error) {
        invalid.value = true;
        return;
    }
    isLoading.value = true;
    let res = await axios.post("http://localhost:9999/get_nodes", {
        addr: addr.value 
    });
    isLoading.value = false;
    res = res.data;
    nodes.$patch({ list: res });
}, 300);

</script>

<template>
    <div class="address-input">
        <div class="container">
            <div class="line1">
                <el-input @input="invalid=false" @keyup.enter="getNodesByAddr" class="input" size="large" v-model="addr" placeholder="Please input your clash subsribe address..." clearable />  
                <el-button @click="getNodesByAddr" type="primary" :loading="isLoading" size="large">Go Testing</el-button>
            </div>
            <div class="line2">
                <el-alert v-show="invalid" @close="invalid=false, addr=''" class="invalid-tip" title="Invalid address!" type="error" effect="dark"  />
            </div>
        </div>
    </div>
</template>

<style scoped>
div.address-input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    padding: 1rem;
}
.container {
    flex-basis: 1400px;
    flex-grow: 0;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    min-height: 4rem;
}
.container>.line1 {
    display: flex;
    margin-bottom: 5px;
}
.container>.line2 {
    display: flex;
    justify-content: flex-start;
}
.container>.line2>.invalid-tip {
    flex-basis: 400px;
    flex-grow: 0;
    flex-shrink: 1;
}

.input {
    flex-basis: 800px;
    flex-grow: 0;
    flex-shrink: 1;
    margin-right: .5rem;
}
</style>