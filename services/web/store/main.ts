import {defineStore} from 'pinia'

export const useMainStore = defineStore({
    id: 'useMain',

    state: () => ({
        baseUrlApi: 'http://localhost:5005'
    }),

    actions: {

    }
})