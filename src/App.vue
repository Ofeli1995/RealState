<template>
  <rrs-header />
  <router-view />
  <rrs-footer />
</template>
<script setup>
import rrsHeader from "@/components/global/rrs-header.vue";
import rrsFooter from "@/components/global/rrs-footer.vue";
</script>
<style lang="scss">
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
</style>
