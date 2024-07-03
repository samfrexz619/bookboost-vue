<template>
  <div class="w-full stat-bg py-10">
    <div class="w-88% mx-auto">
      <div class="w-full grid grid-cols-4 gap-y-6 gap-x-10">
        <StatCard v-for="stat in stats" :key="stat.id" :stat="stat" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatCard from './StatCard.vue';

export interface Stats {
  id: string;
  icon: string;
  number: string;
  text: string;
}

const stats: Stats[] = [
  {
    id: '1',
    icon: 'users',
    number: '5M+',
    text: 'Authors use Bookboost every month to get their service done.'
  },
  {
    id: '2',
    icon: 'sales',
    number: '80%',
    text: 'Increase your sales by up to 80% once you switch to BookBoosst.'
  },
  {
    id: '3',
    icon: 'happy',
    number: '98%',
    text: 'Customer satisfaction has always been our pride.'
  },
  {
    id: '4',
    icon: 'award',
    number: '200+',
    text: 'Average Award we have got all over the internet.'
  },
]
</script>

<style scoped>
.stat-bg {
  background: url('../../assets//images/bg.svg');
  background-repeat: no-repeat;
  height: 100%;
  background-size: contain;
}
</style>