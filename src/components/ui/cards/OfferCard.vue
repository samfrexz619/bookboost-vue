<template>
  <div class="w-full bg-black2 rounded-20  h-350 p-7 lg:p-10">
    <div class="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-pry items-center flex justify-center">
      <img :src="imageUrl" alt="icons" class="lg:w-8 md:w-6 w-4">
    </div>
    <div>
      <h6 class="font-semibold text-xl pt-6 pb-2">
        {{ offer.offer }}
      </h6>
      <p class="text-16 py-3 font-light">
        {{ offer.desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Offer } from '@/components/landing/data';

const props = defineProps<{
  offer: Offer;
}>()

const imageUrl = new URL(`../../../assets/offerIcons/${props.offer.image}.svg`, import.meta.url).href
</script>

<style scoped></style>