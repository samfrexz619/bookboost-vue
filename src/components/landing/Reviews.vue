<template>
  <div class="w-full relative h-full">
    <div class="card-bg"></div>
    <div class="w-full absolute transition-all duration-300 top-8 flex gap-x-8 justify-between">
      <ReviewCards v-for="reviewer in cards" :key="reviewer.id" :reviewer="reviewer" />
    </div>
    <!-- indicators -->
    <div class="flex justify-center gap-x-2 py-10">
      <button v-for="(_, idx) in cards" :key="idx"
        :class="[currSlide === idx ? 'bg-pry w-10 rounded-lg' : 'bg-grey4 w-4 rounded-full']"
        class="h-4 transition-all duration-500"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeMount } from 'vue';
import ReviewCards from '../ui/cards/ReviewCards.vue';
import { reviewers } from '../landing/data.ts'

const currSlide = ref(0)

let slideInterval = ref()

const cards = computed(() => {
  return reviewers.slice(currSlide.value, currSlide.value + 3)
})

// const handlePrev = () => {
//   currSlide.value = (currSlide.value - 1 + reviewers.length) % (reviewers.length)

// }
const handleNext = () => {
  currSlide.value = (currSlide.value + 1) % (reviewers.length)
  if (currSlide.value > reviewers.length - 3) {
    currSlide.value = 0
  }
}

onMounted(() => {
  slideInterval.value = setInterval(() => {
    handleNext()
  }, 5000)
})

onBeforeMount(() => {
  clearInterval(slideInterval.value)
})
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