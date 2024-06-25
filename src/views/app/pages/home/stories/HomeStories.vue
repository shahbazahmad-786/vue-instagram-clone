<template>
    <div class="relative">
        <!-- Left-Scroll Btn -->
        <button @click="scrollLeft">
            <ArrowLeftCircleIcon
                class="w-7 h-7 rounded-full text-white bg-transparent absolute top-11 left-6 md:block hidden" />
        </button>
        <!--/ Left-Scroll Btn -->

        <div ref="itemsContainer" class="scrollbar overflow-auto mx-3 flex space-x-4">
            <!-- Stories -->
            <router-link v-for="i in 16" :to="{ name: 'stories', params: { slug: `shahbazahmad_786${i}` } }"
                class="cursor-pointer">
                <div class="w-16 h-16 story-ring">
                    <Profile
                        class="aspect-square object-cover object-top rounded-full border-2 border-white dark:border-black" />
                </div>
                <small class="text-gray-800 dark:text-white">shahbazah...</small>
            </router-link>
            <!--/ Stories -->
        </div>

        <!-- Right-Scroll Btn -->
        <button @click="scrollRight">
            <ArrowRightCircleIcon
                class="w-7 h-7 rounded-full text-white bg-transparent absolute top-11 right-6 md:block hidden" />
        </button>
        <!--/ Right-Scroll Btn -->
    </div>
</template>

<script setup>
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/vue/24/solid";
import { ref } from 'vue';

const itemsContainer = ref(null);

const scrollLeft = () => {
    if (itemsContainer.value) {
        itemsContainer.value.scrollLeft -= 650;
    }
};

const scrollRight = () => {
    if (itemsContainer.value) {
        itemsContainer.value.scrollLeft += 650;
    }
};
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
    height: 0;
}
</style>
