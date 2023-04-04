<template>
  <div v-if="!menuState" class="xs:flex hidden w-full" @click="buttonClick">
    <Bars3Icon class="w-12 cursor-pointer"/>
  </div>
</template>

<script setup lang="ts">
import {Bars3Icon} from "@heroicons/vue/20/solid";
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'menuState', value: Boolean): void
}>()
const menuState = ref(false)

function buttonClick(){
  emit('menuState', menuState.value)
}
</script>