<template>
  <div class="w-full h-21">
    <nav class="h-full w-full flex items-center justify-between">
      <button class="text-white block md:hidden">
        <Menu class="text-grey1 w-7 h-7" />
      </button>

      <router-link to="/">
        <img src="@/assets/images/logo.svg" alt="company's logo">
      </router-link>


      <ul class="hidden md:flex gap-x-5">
        <li v-for="link in links" :key="link.id" class="font-medium text-16">
          <router-link :to="link.path" class="capitalize text-grey1">
            {{ link.name }}
          </router-link>
        </li>
      </ul>

      <button class="w-[137px] hidden md:block rounded-md bg-pry py-2 text-white capitalize text-center">
        get started
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
// import BaseIcons from '../ui/BaseIcons.vue';

const links = [
  {
    id: '1',
    path: '#',
    name: 'Home'
  },
  {
    id: '2',
    path: '#',
    name: 'payment'
  },
  {
    id: '3',
    path: '#',
    name: 'Features'
  },
]
</script>
