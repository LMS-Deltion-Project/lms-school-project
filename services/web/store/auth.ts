import {defineStore} from 'pinia'
// const baseUrl = 'http://localhost:5005'
import { useMainStore } from "~/store/main";
import jwt_decode from "jwt-decode";

export const useAuthStore = defineStore({
    id: 'useAuth',

    state: () => ({
        bearerToken: "" as string,
        userIdentifier: "" as string,
    }),

    actions: {
        async login(loginForm: any) {
            const mainStore = useMainStore();

            await $fetch(`${mainStore.baseUrlApi}Account/authenticate`, {
                method: 'POST',
                body: loginForm,
                header: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => {
                    // @ts-ignore
                    const data: object = response.data;

                    // @ts-ignore
                    this.bearerToken = data.bearerToken;

                    const decodedJWT = jwt_decode(this.bearerToken);

                    // @ts-ignore
                    this.userIdentifier = decodedJWT.sub;

                    // @ts-ignore
                    this.createAuthCookie(decodedJWT.exp)
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
            document.cookie = "Authorization"+'=; Max-Age=-1;';
        },

        createAuthCookie(expiration: number) {
            const mainStore = useMainStore();

            this.destroyCookie()
            const authCookie = useCookie('Authorization', {
                maxAge: expiration,
                //secure: mainStore.environment == "development", // when in production must be set to true
                secure: mainStore.environment == "production", // Will be set to true when environment in main store is production
                sameSite: "strict",
                httpOnly: false, // Must be true in production

            });
            const object: object = {userIdentifier: this.userIdentifier, bearerToken: this.bearerToken}
            authCookie.value = JSON.stringify(object);
        },

        getCookieValue(cookieId: string, key: string): string {
            let cookie = useCookie(cookieId);

            // @ts-ignore
            if (cookie.value !== null && cookie.value && cookie.value[key] !== "") {
                // @ts-ignore
                return cookie.value[key].toString();
            }
            return "";
        },

        isLoggedIn(): boolean {
            return this.bearerToken !== "" && this.userIdentifier !== "";
        },
    }
})
