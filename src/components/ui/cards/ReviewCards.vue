<template>
  <div class="card">
    <img src="@/assets/images/quote.svg" alt="">
    <p class="py-3">
      "{{ reviewer.review }} "
    </p>
    <div class="flex w-full items-center gap-x-8 py-3">
      <div class="avatar">
        <img :src="imageUrl" alt="reviewer's image">
      </div>
      <div class="text-white">
        <p class="font-bold">{{ reviewer.name }}</p>
        <p class="text-xs">{{ reviewer.position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Reviewers } from '@/components/landing/data';

const props = defineProps<{
  reviewer: Reviewers;
}>()

const imageUrl = new URL(`../../../assets/images/review-avatar/${props.reviewer.image}.png`, import.meta.url).href
</script>

<style scoped>
.card {
  @apply bg-[#1F2A37] rounded-xl xl:w-[360px] w-full h-[328px] py-[35px] px-4
}

.avatar {
  @apply w-14 h-14 rounded-full bg-green-200
}
</style>