<template>

  <div v-if="!menu.state" class="xs:flex hidden w-full" @click="menu.state = !menu.state">
    <Bars3Icon class="w-12 cursor-pointer"/>
  </div>

  <div v-if="menu.state">
    <div class="z-10 w-screen h-screen left-0 top-0 overflow-hidden absolute" @click="menu.state = !menu.state">
      <div class="h-[10%]">
        <Header @menuState="() => {menu.state = !menu.state}"/>
      </div>
      <div class="h-[90%] w-full relative ">
        <mobile-menu :menu="props.menuItems"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Bars3Icon} from "@heroicons/vue/20/solid";
import Header from "./header.vue";
import MobileMenu from "~/components/menu/mobileMenu.vue";

const menu = reactive({ state: false })

const props = defineProps<{
  menuItems: Array<object>
}>()

</script>