<template>
  <div class="flex items-center justify-between w-full px-28 h-24 ">
    <div>
      <img src="@/assets/images/icons/logo.svg" alt="logo" />
    </div>
    <div class="flex items-center justify-between">
      <div
        v-for="(item, index) in navTitles"
        :key="index"
        class="text-white px-6 py-3 not-italic font-bold text-sm"

      >
        {{ item.title }}
      </div>
      <div
        class="px-6 py-3 border-solid border-white rounded border-[1px] text-white not-italic font-bold text-sm"
      >
        Add Listing
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const navTitles = ref([
  {
    id: 1,
    title: "HOME",
  },
  {
    id: 2,
    title: "ABOUT US",
  },
  {
    id: 3,
    title: "OUR AGENTS",
  },
  {
    id: 4,
    title: "PROPERTIES",
  },
  {
    id: 5,
    title: "GALLERY",
  },
  {
    id: 6,
    title: "BLOG",
  },
  {
    id: 7,
    title: "CONTACT US",
  },
  {
    id: 8,
    title: "SEARCH",
  },
]);
</script>

<style>
</style>