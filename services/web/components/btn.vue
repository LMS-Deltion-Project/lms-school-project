<template>

  <nuxt-link v-if="link" :to="link" class="text-white p-2 bg-homestyleblue rounded-lg inline-flex text-center justify-center">
    {{text}}
  </nuxt-link>

  <button v-else>
    {{text}}
  </button>

</template>

<script setup lang="ts">

defineProps<{
  text?: string,
  link?: string,
}>()

</script>