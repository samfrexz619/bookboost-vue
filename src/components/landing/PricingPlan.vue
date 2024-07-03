<template>
  <div class="w-full">
    <div class="w-full text-center">
      <h6 class="text-pry font-semibold text-18">Pricing</h6>
      <h3 class="text-white font-bold text-40">Our Pricing Plan</h3>
      <p class="text-grey2">These are the various pricing plans to suit your business purpose.</p>
    </div>

    <div class="w-full flex justify-between flex-wrap">
      <PricePlanCard v-for="plan in pricingPlans" :key="plan.id" :plan="plan" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PricePlanCard from '@/components/ui/cards/PricePlanCard.vue'
import { pricingPlans } from './data';
</script>

<style scoped></style>