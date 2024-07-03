<template>
  <div class="w-[260px] gap-y-5 text-white flex flex-col justify-center items-center">
    <div class="w-16 h-16 rounded-full bg-pry flex items-center justify-center">
      <BaseIcons :name="stat.icon" />
    </div>
    <div class="w-full text-center">
      <h1 class="font-bold text-48">{{ stat.number }}</h1>
      <p>{{ stat.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcons from '../ui/BaseIcons.vue';
import { Stats } from './StatSection.vue';


defineProps<{
  stat: Stats;
}>()
</script>

<style scoped></style>