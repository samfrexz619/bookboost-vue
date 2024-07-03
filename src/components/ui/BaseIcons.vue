<template>
  <span>
    <svg v-if="name === 'nav-icon'" width="44" height="44" viewBox="0 0 44 44">
      <use xlink:href="/sprite.svg#navIcon" />
    </svg>
    <svg v-else-if="name === 'close'" width="14" height="14" viewBox="0 0 14 14">
      <use xlink:href="/sprite.svg#close" />
    </svg>
    <svg v-else-if="name === 'users'" width="32" height="25" viewBox="0 0 32 25">
      <use xlink:href="/sprite.svg#users" />
    </svg>
    <svg v-else-if="name === 'sales'" width="31" height="37" viewBox="0 0 31 37">
      <use xlink:href="/sprite.svg#sales" />
    </svg>
    <svg v-else-if="name === 'happy'" width="32" height="33" viewBox="0 0 32 33">
      <use xlink:href="/sprite.svg#happy" />
    </svg>
    <svg v-else-if="name === 'award'" width="31" height="33" viewBox="0 0 31 33">
      <use xlink:href="/sprite.svg#award" />
    </svg>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>()
</script>
