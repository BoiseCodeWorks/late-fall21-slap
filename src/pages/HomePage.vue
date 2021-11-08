<template>
  <div
    class="
      container-fluid
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <!-- <Target /> -->
    <!-- <div v-for="t in targets" :key="t.id">{{ t.name }}</div> -->
    <!-- NOTE Props -->
    <!-- NOTE Draw a Target Component for each t(single object ) in targets array (collection of objects), and pass the data (t) to Target -->
    <div class="row">
      <Target v-for="t in targets" :key="t.id" :target="t" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import { slapService } from "../services/SlapService";
import Pop from "../utils/Pop";
export default {
  name: "Home",
  setup() {
    // NOTE ref creates an observable value
    const health = ref(100);
    return {
      targets: computed(() => AppState.targets),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.health-scale {
  font-size: v-bind(health) px;
  // transform: scale(v-bind("health") * 0.1);
}
</style>
