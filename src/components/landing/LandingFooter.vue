<template>
  <footer class="w-full py-10 flex items-center flex-col justify-center">
    <div class="md:w-88% w-93% mx-auto flex justify-between">
      <div>
        <img src="@/assets/images/logo.svg" alt="company logo">
        <p class="text-grey2 text-14 py-5">
          Sed ut perspiciatis undmnis is iste <br>
          natus error sit amet voluptatem <br>
          totam rem aperiam.
        </p>
      </div>

      <div class="">
        <h3 class="text-white font-semibold pb-7">Resources</h3>
        <router-link class="block py-2 text-grey2 text-14" v-for="link in resources" :key="link.id" :to="link.path">
          {{ link.link }}
        </router-link>
      </div>

      <div class="">
        <h3 class="text-white font-semibold pb-7">Company</h3>
        <router-link class="block py-2 text-grey2 text-14" v-for="link in company" :key="link.id" :to="link.path">
          {{ link.link }}
        </router-link>
      </div>

      <div class="">
        <h3 class="text-white font-semibold pb-7">Quick Links</h3>
        <router-link class="block py-2 text-grey2 text-14" v-for="link in quickLinks" :key="link.id" :to="link.path">
          {{ link.link }}
        </router-link>
      </div>

      <div>
        <h3 class="text-white font-semibold pb-7">Follow Us On</h3>
        <div class="flex gap-x-3">
          <router-link to="#" class="social">
            <img src="@/assets/images/socials/fb.svg" alt="facebook icon">
          </router-link>
          <router-link to="#" class="social">
            <img src="@/assets/images/socials/twitter.svg" alt="twitter icon">
          </router-link>
          <router-link to="#" class="social">
            <img src="@/assets/images/socials/youtube.svg" alt="youtube icon">
          </router-link>
          <router-link to="#" class="social">
            <img src="@/assets/images/socials/linkedin.svg" alt="linkedIn icon">
          </router-link>
        </div>
      </div>
    </div>
    <p class="text-white text-center pt-12">© 2024 BookBoost.</p>
  </footer>
</template>

<script setup lang="ts">
import { resources, quickLinks, company } from './data';
</script>

<style scoped>
footer {
  background-image: url('@/assets/images/footer-bg.svg');
  background-repeat: no-repeat;
  object-fit: contain;
  background-color: #1f2a37;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  height: 400px;

}

.social {
  @apply w-8 h-8 rounded-full bg-black1 flex items-center justify-center
}
</style>