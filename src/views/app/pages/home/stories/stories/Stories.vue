<template>
    <div id="default-carousel" class="relative w-[30%] my-2 rounded bg-[#100F10]" data-carousel="slide">
            <!-- Carousel Wrapper -->
            <div class="relative h-56 md:h-[33rem] overflow-hidden rounded-lg">
                <!-- Stories -->
                <div v-for="j in 5" class="hidden duration-700 ease-in-out" data-carousel-item>
                    <Profile
                        class="absolute block aspect-square object-cover object-top -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
                <!-- Stories -->
            </div>
            <!--/ Carousel Wrapper -->

            <!-- Slider Indicators -->
            <div class="absolute z-30 flex-cc space-x-1 top-5 left-5 right-5">
                <span v-for="k, index in 5" type="button" class="w-full h-[1px]" aria-current="true" aria-label="Slide 1"
                    :data-carousel-slide-to="index">
                </span>
            </div>
            <!--/ Slider Indicators -->

            <!-- Slider Controls -->
            <button type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev>
                <span
                    class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-3 h-3 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 1 1 5l4 4" />
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next>
                <span
                    class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-3 h-3 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
            <!--/ Slider Controls -->

            <!-- Reply -->
            <div class="absolute z-30 flex-cc space-x-3 bottom-5 left-5 right-5">
                <input type="text" placeholder="Reply to shahbazahmad_786"
                    class="w-full py-1 px-3 text-white rounded-3xl border border-white bg-transparent  focus:ring-0 focus:border-white placeholder:text-white placeholder:font-light placeholder:text-sm ">
                <HeartIcon class="w-10 h-10 text-white cursor-pointer" />
                <PaperAirplaneIcon class="w-9 h-9 text-white cursor-pointer -rotate-45" />
            </div>
            <!--/ Reply -->
        </div>
</template>

<script setup>
import { HeartIcon, PaperAirplaneIcon } from "@heroicons/vue/24/outline";
import { useRoute } from 'vue-router'

const route = useRoute();
</script>