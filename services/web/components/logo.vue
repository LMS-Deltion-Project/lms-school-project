<template>
  <img src="/logo.png" alt="logo" :class="styles" />
</template>

<script setup lang="ts">
  defineProps<{
    styles?: string
  }>()
</script>
