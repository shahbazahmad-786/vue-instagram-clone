<template>
    <div class="w-full h-screen flex justify-between bg-[#1A1A1A]">
        <!-- Logo -->
        <router-link :to="{ name: 'app.index' }" class="mt-4 ml-4">
            <Logo class="invert" />
        </router-link>
        <!--/ Logo -->

        <!-- Stories Component -->
        <Stories />
        <!--/ Stories Component -->

        <!-- Back-To-Home Route -->
        <router-link :to="{ name: 'app.index' }" class="mt-4 mr-4">
            <XMarkIcon class="w-9 text-white" />
        </router-link>
        <!--/ Back-To-Home Route -->
    </div>
</template>

<script setup>
import Stories from './Stories.vue';
import { XMarkIcon } from "@heroicons/vue/24/outline";
</script>