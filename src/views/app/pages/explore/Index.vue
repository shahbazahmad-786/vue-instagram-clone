<template>
    <div class="grid grid-cols-3 gap-1 my-1 mx-1 md:my-6 md:mx-10">
        <router-link v-for="i in 8" :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }">
            <div class="group relative overflow-hidden">
                <!-- Image -->
                <Profile class="w-full aspect-square object-cover object-top block" />
                <!--/ Image -->

                <!-- Hover Content -->
                <div
                    class="content absolute top-[0%] opacity-0 group-hover:opacity-100 bg-imageHover w-full h-full box-border transition-opacity duration-700 flex-cc">
                    <div class="flex text-white space-x-4 font-semibold">
                        <span class="flex-cc">
                            <HeartIcon class="w-5 mr-[0.20rem]" />
                            1,245
                        </span>
                        <span class="flex-cc">
                            <ChatBubbleOvalLeftIcon class="w-5 mr-[0.20rem]" />
                            99
                        </span>
                    </div>
                </div>
                <!--/ Hover Content -->
            </div>
        </router-link>
    </div>
</template>

<script setup>
import {
    HeartIcon, ChatBubbleOvalLeftIcon
} from "@heroicons/vue/24/solid";
</script>