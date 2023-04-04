<template>
    <div class="bg-home h-screen bg-center bg-cover md:p-9 sm:p-8 z-0">
        <div class="flex justify-between">

             <Logo styles="w-40" />
            <div class="flex xs:hidden">
                sdkfjksldfj
            </div>
            <div v-if="widthtest" class="h-full flex justify-center">
                 <headerMenu @test="(menuState) => test(menuState)" />
            </div>
        </div>
        <div class="w-96 text-white md:pl-24 sm:pt-28 xs:w-full xs:h-1/3 flex flex-col xs:justify-end">
            <div class="text-5xl xs:text-4xl xs:text-center xs:font-bold">
                Learn & Share
            </div>
            <div class="text-2xl xs:text-center">
                Start creating your own course by creating an account
            </div>
            <div class="flex justify-center">
                 <Btn text="Get started" extraStyles="mt-2 w-full xs:w-[75%] xs:text-center" link="/test">
                     <ChevronRightIcon class="w-[22px] ml-2 inline-flex" />
                 </Btn>
            </div>
        </div>
        <div class="absolute w-1/2 left-0 bottom-10 w-full">
            <div class="text-white ">
                <div class=" w-fit mx-auto">
                    Scroll down to browse
                     <ChevronDownIcon class="text-white mt-3 mx-auto animate-bounce w-[35px]" />
                </div>
            </div>
        </div>
    </div>
    <div class="w-full px-[10%] pt-9 flex items-center flex-col">
         <Btn text="Browse" extraStyles="w-48 flex text-2xl xs:hidden" link="/browse">
             <ChevronRightIcon class="w-[36px] ml-2 inline-flex " />
         </Btn>

         <Btn text="Browse" link="/test">
             <ChevronRightIcon class="w-[36px] ml-2 inline-flex " />
         </Btn>

    </div>
     <Footer />
</template>

<script setup lang="ts">
import {ChevronDownIcon} from "@heroicons/vue/20/solid";
import {ChevronRightIcon} from "@heroicons/vue/24/solid";
import HeaderMenu from "~/components/menu/headerMenu.vue";
import { defineCustomElement } from 'vue'
import {computed, ref} from "vue";

// const widthtest = reactive({ width: window.innerWidth })

function test(menuState: Boolean) {
  console.log(menuState)
}

// const width = computed(() => {
//   console.log(typeof document.body.clientWidth)
//   return document.body.clientWidth
// })

watch(widthtest, (obj) => {
  return obj.width
})

</script>