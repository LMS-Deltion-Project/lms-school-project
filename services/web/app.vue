<template>
  <div>
  <nuxt-page></nuxt-page>
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from "~/store/Auth";

  const authStore = useAuthStore();

  authStore.bearerToken = authStore.getCookieValue('auth', 'bearerToken');
  authStore.userIdentifier = authStore.getCookieValue('auth', 'userIdentifier');

</script>