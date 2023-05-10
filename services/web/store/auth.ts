import {defineStore} from 'pinia'
// const baseUrl = 'http://localhost:5005'
import { useMainStore } from "~/store/main";

export const useAuthStore = defineStore({
    id: 'useAuth',

    state: () => ({
        bearerToken: "" as string | number,
        userIdentifier: "" as string | number,
    }),

    actions: {
        async login(loginForm: any) {
            const mainStore = useMainStore();

            await $fetch(`${mainStore.baseUrlApi}/Account/authenticate`, {
            // await $fetch(`/api/v1/Account/authenticate`, {
                method: 'POST',
                body: loginForm
            })
                .then(response => {
                    // @ts-ignore
                    const data: object = response.data;

                    // @ts-ignore
                    this.bearerToken = data.bearerToken;

                    // @ts-ignore
                    this.userIdentifier = data.userName;

                    this.createAuthCookie()
                })
                .catch(error => { throw error })
        },

        authLogout() {
            this.userIdentifier = "";
            this.bearerToken = "";
            this.destroyCookie()
        },

        destroyCookie() {
            // Destroy cookie
            document.cookie = "auth"+'=; Max-Age=0;';
        },

        createAuthCookie() {
            this.destroyCookie()
            const authCookie = useCookie('auth', {
                maxAge: (60 * 60 * 24 * (7 * 2)),// 2 week
            });
            const object: object = {userIdentifier: this.userIdentifier, bearerToken: this.bearerToken}
            authCookie.value = JSON.stringify(object);
        },

        getCookieValue(cookieId: string, key: string): string | number {
            let cookie = useCookie(cookieId);

            // @ts-ignore
            if (cookie.value !== null && cookie.value && cookie.value[key] !== "") {
                // @ts-ignore
                return cookie.value[key];
            }
            return "";
        },

        isLoggedIn(): boolean {
            return this.bearerToken !== "" && this.userIdentifier !== "";
        },
    }
})
