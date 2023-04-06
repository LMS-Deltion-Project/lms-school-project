<template>
  <div class="w-[70%] h-full bg-white right-0 absolute" @click.stop="">
    <div class="w-full flex flex-col p-3 pt-5">
      <div v-for="item in props.menuItems">
      <nuxt-link :to="item.route" class="flex flex-row justify-between my-1 w-full border-t border-gray-600 pt-2">
        <ChevronLeftIcon class="w-[20px]"/>
        {item.text}
      </nuxt-link>
      </div>
      <div v-else>
        <nuxt-link to="/test" class="flex flex-row justify-between my-1 w-full border-t border-gray-600 pt-2">
          <ChevronLeftIcon class="w-[20px]"/>
          test
        </nuxt-link>
        <nuxt-link to="/test" class="flex flex-row justify-between my-1 w-full border-t border-gray-600 pt-2">
          <ChevronLeftIcon class="w-[20px]"/>
          test
        </nuxt-link>
        <nuxt-link to="/test" class="flex flex-row justify-between my-1 w-full border-t border-gray-600 pt-2">
          <ChevronLeftIcon class="w-[20px]"/>
          test
        </nuxt-link>
        <nuxt-link to="/test" class="flex flex-row justify-between my-1 w-full border-t border-gray-600 pt-2">
          <ChevronLeftIcon class="w-[20px]"/>
          test
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ChevronLeftIcon} from "@heroicons/vue/24/solid";

const props = defineProps<{
  menuItems: Array<object>
}>()

</script>