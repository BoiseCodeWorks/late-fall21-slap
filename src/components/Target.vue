<template>
  <div class="col-4">
    <img
      :style="`transform: scale(${target.health * 0.01});`"
      :src="target.imgUrl"
      alt=""
    />

    <div class="progress w-50">
      <div
        class="progress-bar"
        :class="{
          'bg-danger': target.health < 25,
          'bg-warning': target.health <= 50 && target.health >= 24,
          'bg-success': target.health > 50,
        }"
        role="progressbar"
        :style="`width: ${target.health}%`"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ target.health }}/100
      </div>
    </div>
    <!-- NOTE databinding for which class gets applied -->
    <!-- NOTE databinding for an attribute to be applied or not -->
    <button class="btn btn-secondary p-2" @click="reset">reset</button>
    <button class="btn btn-primary p-2 health-scale" @click="slap">
      slap!
    </button>
    <div>{{ target.health }}</div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { logger } from "../utils/Logger";
import { AppState } from "../AppState";
import { slapService } from "../services/SlapService";
import Pop from "../utils/Pop";
export default {
  props: { target: { type: Object, required: true } },
  setup(props) {
    return {
      slap() {
        slapService.slap(props.target);
        // NOTE to modify a ref, you must modify the VALUE of it
        // health.value -= 10;
        logger.log("slapped", props.target.health);
      },
      reset() {
        slapService.resetHealth(props.target);
        Pop.toast("IT'S ALIVE!", "warning", "center");
      },
    };
  },
};
</script>


<style scoped>
</style>
