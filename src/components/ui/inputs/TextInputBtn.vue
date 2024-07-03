<template>
  <div class="w-full h-13 flex">
    <input :type="type" :placeholder="placeholder" :id="inputId" :name="name" :value="value" @input="getValue"
      class="grow placeholder:text-grey9 bg-black1 h-full px-4 outline-none text-grey1 input">
    <button class="w-[137px] flex-none bg-pry py-2 text-white capitalize text-center h-full btn">
      {{ btnTitle }}
    </button>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  placeholder: string;
  type: string;
  btnTitle: string;
  inputId: string;
  name: string;
  value: string;
}>()

const emits = defineEmits(["update:value"]);

const getValue = (e: Event) => {
  let value = (e.target as HTMLInputElement).value;
  emits("update:value", value);
};
</script>

<style scoped>
.input {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-left: 1px solid #6B7280;
  border-top: 1px solid #6B7280;
  border-bottom: 1px solid #6B7280;
}

.btn {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>