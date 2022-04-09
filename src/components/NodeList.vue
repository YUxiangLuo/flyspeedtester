<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const nodes = ref([]);
const speeds = ref([]);
onMounted(async () => {
    let res = await axios.get("http://localhost:9999/refresh");
    nodes.value = res.data;
})


// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8888');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('get_nodes');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
    speeds.value = JSON.parse(event.data);
});


</script>

<template>
    <h1>Node list: </h1>
    <ul>
        <li v-for="node, index of nodes">
            {{ node }} {{ speeds[index] }} <a :href="'http://localhost:9999/use/'+(index+1)">use</a>
        </li>
    </ul>
</template>


