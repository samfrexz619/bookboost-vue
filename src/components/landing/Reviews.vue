<template>
  <div class="w-full relative h-full">
    <div class="card-bg"></div>
    <div class="w-full absolute top-8 flex gap-x-8 justify-between">
      <ReviewCards v-for="reviewer in reviewers" :key="reviewer.id" :reviewer="reviewer" />
    </div>

    <div class="py-10 w-full flex justify-center gap-x-2">
      <button class="w-10 h-4 rounded-lg bg-pry"></button>
      <button class="w-4 h-4 rounded-full bg-grey4"></button>
      <button class="w-4 h-4 rounded-full bg-grey4"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReviewCards from '../ui/cards/ReviewCards.vue';
import { reviewers } from '../landing/data.ts'
</script>

<style scoped>
.card-bg {
  @apply w-[936px] h-[400px] bg-[#1c3fb7] mx-auto
}

.card {
  @apply bg-[#1F2A37] rounded-xl w-[360px] h-[328px] py-[35px] px-4
}

.avatar {
  @apply w-14 h-14 rounded-full bg-green-200
}
</style>