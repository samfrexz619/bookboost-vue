<template>
  <main class='h-full bg-[#090B12] w-full relative'>
    <section class="w-full">
      <video muted autoplay loop id="video">
        <source src="@/assets/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="absolute w-full top-0">
        <header class="w-93% md:w-88% mx-auto">
          <LandingHeader />
        </header>
        <section class="w-93% md:w-88% mx-auto pt-6">
          <div class="w-full lg:w-[950px] mx-auto">
            <h1 class="text-blue1 font-bold lg:text-40 text-xl md:text-3xl text-center">
              Maximize Your eBook Sales with Our Powerful SaaS Solution
            </h1>
          </div>
          <div class="w-full lg:w-[830px] mx-auto">
            <p class="text-white font-semibold text-xl text-center py-6">
              Streamline your eBook business with our all-in-one platform. Manage your catalog, track sales, and reach
              more readers effortlessly.
            </p>
          </div>

          <div class="py-5 md:w-[543px] mx-auto">
            <TextInputBtn name="mail" input-id="mail" type="email" placeholder="Email Address" btn-title="get started"
              v-model:value="email" />
          </div>
        </section>

        <!-- Dashboard screenshot section -->
        <div class="py-5 w-88% mx-auto md:flex justify-center hidden">
          <img src="@/assets/images/dashboard.svg" alt="dashboard screen" class="block mx-auto">
        </div>

        <!-- Stat section -->
        <div class="mt-20 w-full">
          <StatSection />
        </div>

        <!-- Offer card section -->
        <div class="md:w-88% w-93% mx-auto text-white mt-14 py-10">
          <h2 class="text-center font-bold text-40">What We Offer</h2>
          <div class="py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OfferCard v-for="offer in offers" :key="offer.id" :offer="offer" />
          </div>
        </div>

        <!-- Pricing plan section -->
        <div class="w-full py-10 bg-black1">
          <div class="md:w-88% w-93% mx-auto">
            <PricingPlan />
          </div>
        </div>

        <!-- reviews -->
        <div class="w-full h-full bg-[#090B12] py-10 text-white">
          <div class="md:w-88% w-93% mx-auto">
            <Reviews />
          </div>
        </div>

        <!-- newsletter -->
        <div class="w-full py-12">
          <div class="md:w-88% w-93% mx-auto">
            <div class="text-center">
              <h6 class="font-semibold text-16 text-pry">Newsletter</h6>
              <h4 class="text-white font-bold text-40">Stay in the loop</h4>
              <p class="text-grey2 text-14">
                Receive exclusive offers, straight to your inbox. <br>
                Don’t miss out - subscribe and join our community of business gurus.
              </p>
            </div>

            <div class="py-5 md:w-[543px] mx-auto bg-[#1F2A37] px-5 mt-7 rounded-xl">
              <TextInputBtn name="mail" input-id="mail" type="email" placeholder="Enter your email"
                btn-title="Subscribe" v-model:value="email" />
            </div>
          </div>
        </div>

        <footer class="py-10 w-full bg-black2">
          <LandingFooter />
        </footer>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LandingHeader from '@/components/landing/LandingHeader.vue';
import TextInputBtn from '@/components/ui/inputs/TextInputBtn.vue';
import StatSection from '@/components/landing/StatSection.vue';
import OfferCard from '@/components/ui/cards/OfferCard.vue';
import { offers } from '@/components/landing/data.ts';
import PricingPlan from '@/components/landing/PricingPlan.vue';
import Reviews from '@/components/landing/Reviews.vue';
import LandingFooter from '@/components/landing/LandingFooter.vue';

const email = ref('')
</script>

<style scoped lang="scss">
#video {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  @media(min-width: 768px) {
    line-height: 0.6in;
  }
}

footer {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
</style>