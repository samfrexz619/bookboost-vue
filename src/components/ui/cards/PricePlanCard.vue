<template>
  <div class="w-350 mt-11 px-10 py-6 pricing h-[520px] rounded-10 border-2 border-grey3 relative overflow-hidden">
    <div v-show="plan.popular"
      class="h-11 w-36 bg-[#13c296] text-white absolute flex items-center justify-center -right-11 top-5 rotate-[50deg]">
      <p>Popular</p>
    </div>
    <div class="py-1">
      <p class="text-pry font-semibold text-16 capitalize">{{ plan.plan }}</p>
      <h2 class="text-40 text-white font-bold py-1">${{ plan.price }}<sub
          class="text-grey2 font-normal text-14">/year</sub></h2>
      <p class="text-14 text-grey2">{{ plan.descr }}</p>
    </div>
    <i class="block w-full h-[1px] bg-grey3 my-4"></i>
    <div>
      <p v-for="benefit in plan.planBenefits" :key="benefit.id" class="text-grey2 py-1.5">
        {{ benefit.benefit }}
      </p>
      <button class="w-full h-[50px] font-medium flex items-center justify-center rounded-md  capitalize mt-5"
        :class="btnClass">
        choose {{ plan.btnTitle }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Plans } from '@/components/landing/data';

const props = defineProps<{
  plan: Plans;
}>()

const btnClass = computed(() => {
  return props.plan.popular
    ? 'bg-pry text-white'
    : 'bg-white text-pry'
})
</script>

<style scoped>
.pricing {
  background: url('@/assets/images/pricing-bg.svg');
  background-repeat: no-repeat;
  object-fit: contain;
}
</style>