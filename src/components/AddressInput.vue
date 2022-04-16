<script setup>
import { ref } from 'vue'
import { debounce } from 'lodash'
import axios from 'axios'
import { computed } from '@vue/reactivity';
import { useGlobalStore } from '../stores/global'
const global_store = useGlobalStore();

const { VITE_SERVER, VITE_SERVER_PORT } = import.meta.env;




const addr = ref("");
const invalid = ref(false);
const isLoading = computed(() => global_store.$state.isLoading);

const getNodesByAddr = debounce(async () => {
    global_store.$patch({ nodes: [] });
    let url;
    try {
        url = new URL(addr.value); 
    } catch (error) {
        console.log(error);
        invalid.value = true;
        return;
    }
    global_store.updateIsLoading(true);

    let nodes_data;
    if(import.meta.env.DEV) {
        let ares = await axios.post(`http://${VITE_SERVER}:${VITE_SERVER_PORT}/get_nodes`, {
            addr: addr.value
        });
        console.log(ares.data);
        nodes_data = ares.data;
    }else {
        nodes_data = await window.electronAPI.getNodes(addr.value);
    }

    global_store.updateIsLoading(false);
    global_store.$patch({ nodes: nodes_data });
}, 300);

const handleClear = () => {
    invalid.value = false;
    addr.value = "";
}

</script>

<template>
    <div class="address-input">
        <div class="container">
            <div class="line1">
                <n-input @input="invalid=false" @keyup.enter="getNodesByAddr" class="input" size="large" v-model:value="addr" placeholder="Please input your clash subsribe address..." clearable />  
                <n-button @click="getNodesByAddr" type="primary" :loading="isLoading" size="large">Go Testing</n-button>
            </div>
            <div class="line2">
                <n-alert v-if="invalid" :on-close="handleClear"  class="invalid-tip" title="Invalid address!" type="error" closable>
                    Invalid address!
                </n-alert>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.address-input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container {
    flex-basis: 50vw;
    flex-grow: 0;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    position: relative;
}
.container>.line1 {
    display: flex;
    margin-bottom: .5rem;
}
.input {
    flex-basis: 35vw;
    flex-grow: 0;
    flex-shrink: 1;
    margin-right: .5rem;
}
.container>.line2 {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    width: 20rem;
    top: 3rem;
    left: 0;
}
.container>.line2>.invalid-tip {
    flex: 1;
}
</style>