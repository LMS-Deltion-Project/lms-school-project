<template>
    <div class="flex justify-between">
        <Logo styles="w-40" />
        <div class="flex xs:hidden items-center underline">
            <nuxt-link to="/browse" class="mx-6">Browse</nuxt-link>
            <nuxt-link v-if="!authStore.isLoggedIn()" to="/login" class="mx-6">Login</nuxt-link>
            <div v-if="authStore.isLoggedIn()" id="logoutButton" class="mx-6" @click="logout()"><p>Logout</p></div>
        </div>
        <div v-if="screenSize.width < 600" class="h-full flex items-center">
            <headerMenu :menuItems="menuItems"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ChevronDownIcon} from "@heroicons/vue/20/solid";
import {ChevronRightIcon} from "@heroicons/vue/24/solid";

import HeaderMenu from "~/components/menu/headerWrapper.vue";
import {useAuthStore} from "~/store/auth";

const router = useRouter();

const menuItems = [
    {text: "test", link: "/test"},
    {text: "test", link: "/test"},
    {text: "test", link: "/test"}
]

const authStore = useAuthStore();
const screenSize = reactive({ width: 0 })

onMounted((): void => {
    window.addEventListener('resize', () => handleWindowResize());
    screenSize.width = document.body.clientWidth;
})

function handleWindowResize (): void {
    screenSize.width = document.body.clientWidth
}

function logout(): void {
    authStore.authLogout()
}

</script>