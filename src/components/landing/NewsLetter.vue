<template>
  <div class="w-full py-20 newsletter">
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
        <TextInputBtn name="mail" input-id="mail" type="email" placeholder="Enter your email" btn-title="Subscribe"
          v-model:value="email" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextInputBtn from '@/components/ui/inputs/TextInputBtn.vue';

const email = ref('')

</script>

<style scoped>
.newsletter {
  background-image: url('@/assets/images/newsletter-bg.svg');
  background-repeat: no-repeat;
  object-fit: cover;
}
</style>