<script lang="ts">
import { Vue } from 'vue-class-component';
  var step1= true, status = false,sure = false;
export default class HomeView extends Vue {
  data() {
    return {
      step1 : step1,
      status : status,
      sure : sure
    };
  }
}
</script>

<template>
  <div class="home">
    <div v-if="{step1}">
      Do you 
    </div>
  </div>
</template>

