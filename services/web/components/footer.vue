<template>
  <div class="w-full flex bg-[#363636] mt-2 text-white p-1 justify-between">
    <div class="underline flex xs:flex-col">
      <nuxt-link to="/browse" className="mr-3">Browse</nuxt-link>
      <nuxt-link to="/my-progress" className="mr-3">My progress</nuxt-link>
      <nuxt-link to="/instructor-dashboard" className="mr-3">Instructor Dashboard</nuxt-link>
      <nuxt-link to="/privacy-policy" className="mr-3">Privacy Policy</nuxt-link>
    </div>
    <div class="flex xs:flex-col">
      <div class="flex w-full flex justify-end">
        <Logo styles="w-20 bg-white rounded mb-2 hidden xs:flex"/>
      </div>
      <p class="xs:text-xs ">© Ludo Tielbeke & Gido Koning 2022</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
