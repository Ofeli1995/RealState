<template>
  <div
    class="px-28 py-7 w-full flex justify-between border-b-[1px] border-white-500 "
  >
    <div class="flex items-center gap-3 cursor-pointer">
      <img src="@/assets/images/icons/email-icon.svg" alt="email" />
      <div class="text-white leading-loose">
        <span class="font-bold"> Email us at </span>
        : example@mail.com
      </div>
    </div>
    <div class="flex items-center gap-11">
      <div class="flex gap-11">
        <img
          class="w-3 cursor-pointer"
          src="@/assets/images/icons/fb.svg"
          alt="fb"
        />
        <img
          class="w-6 cursor-pointer"
          src="@/assets/images/icons/dribble.svg"
          alt=" dribble"
        />
        <img
          class="w-6 cursor-pointer"
          src="@/assets/images/icons/instagram.svg"
          alt="instagram"
        />
        <img
          class="w-6 cursor-pointer"
          src="@/assets/images/icons/linkdin.svg"
          alt="linkdin"
        />
        <img
          class="w-6 cursor-pointer"
          src="@/assets/images/icons/be.svg"
          alt="be"
        />
      </div>
      <div class="w-0 h-10 border-l border-white border-solid"></div>
      <div class="flex items-center gap-4 cursor-pointer">
        <img src="@/assets/images/icons/tel.svg" alt="tel" />
        <a
          class="font-bold leading-6 text-base cursor-pointer"
          href="tel:+37477791914"
          >+123-4567 890</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
</style>