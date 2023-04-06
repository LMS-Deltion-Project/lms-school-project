<template>
  <div class="h-full bg-white p-5 flex md:hidden justify-between" @click.stop.prevent="">
    <Logo />
  <div class="flex items-center">
    <MagnifyingGlassIcon class="h-[30px] mr-3"/>
    <XMarkIcon class="h-[30px] cursor-pointer" @click="$emit('menuState')"/>
  </div>
  </div>
</template>

<script setup lang="ts">
 import {MagnifyingGlassIcon} from "@heroicons/vue/20/solid";
 import {XMarkIcon} from "@heroicons/vue/20/solid";

 function clickevent (e: Event): void {
   e.stopPropagation();

 }
</script>