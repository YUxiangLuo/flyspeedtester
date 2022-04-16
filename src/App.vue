<template>
  <div class="app">
      <n-layout has-sider>
        <n-layout-sider width="15vw" bordered :native-scrollbar="false" :inverted="inverted">
          <n-space class="space-side-bar" vertical justify="space-between">
            <n-menu :inverted="inverted" :options="menuOptions" />
            <div class="logo">
              Fisu!
            </div>
          </n-space>
        </n-layout-sider>
        <n-layout class="main">
          <n-space class="space-main" vertical>
            <div class="line1">
              <AddressInput />
            </div>
            <div class="line2">
              <!-- <NodesLoading v-show="isLoading" /> -->
              <Nodes />
            </div>
          </n-space>
        </n-layout>
      </n-layout>
  </div>
</template>

<script>
import { h, defineComponent, ref } from "vue";
import AddressInput from "./components/AddressInput.vue";
import Nodes from "./components/Nodes.vue";
import { NIcon } from "naive-ui";
import {
  PlanetOutline as PlanetIcon,
  SpeedometerOutline as SpeedometerSharpIcon,
  AnalyticsOutline as AnalyticsIcon,
  TvOutline as TvIcon,
} from "@vicons/ionicons5";


function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: "Lantency/Connect",
    key: "lantency-connect",
    icon: renderIcon(PlanetIcon)
  },
  {
    label: "Download Speed",
    key: "download-speed",
    icon: renderIcon(SpeedometerSharpIcon)
  },
  {
    label: "Route Map",
    key: "route-map",
    icon: renderIcon(AnalyticsIcon)
  },
  {
    label: "Stream Media",
    key: "stream-media",
    icon: renderIcon(TvIcon)
  }
];

export default defineComponent({
  setup() {
    return {
      inverted: ref(true),
      menuOptions,
    };
  },
  components: {
    AddressInput,
    Nodes,
  },
});
</script>

<style scoped>
div.app {
  width: 100vw;
  height: 100vh;
}
.n-layout-sider {
  height: 100vh;
}
div.n-space.space-side-bar {
  height: 100vh;
  padding-top: 1rem;
  padding-bottom: .5rem;
}

div.space-main {
  height: 100vh;
  overflow: hidden;
}
div.space-main .line1 {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
div.space-main .line2 {
  height: 90vh;
  overflow-y: auto;
  padding-left: 7vw;
}
div.space-main .line2 .nodes {
  width: 75vw;
}

div.logo {
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
}
</style>