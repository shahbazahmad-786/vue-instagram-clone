<template>
    <template v-if="route.fullPath === '/profile' || route.params.slug">
        <div class="grid grid-cols-3 gap-1">
            <!-- Post Images -->
            <div v-for="i in 8" :data-modal-target="dataModelTarget" :data-modal-toggle="dataModelTarget"
                class="group relative overflow-hidden cursor-pointer">
                <!-- Images -->
                <Profile class="block w-full aspect-square object-cover object-top" />
                <!--/ Images -->

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
            <!--/ Post Images -->
        </div>
    </template>

    <!-- Popup Models -->
    <DisplayPost v-if="route.params.slug" />
    <EditPost v-if="!route.params.slug" />
    <!--/ Popup Models -->
</template>

<script setup>
import { ref } from 'vue';
import EditPost from '../edit-post/Index.vue';
import DisplayPost from '../display-post/Index.vue';
import {
    HeartIcon, ChatBubbleOvalLeftIcon
} from "@heroicons/vue/24/solid";
import { useRoute } from 'vue-router'
const route = useRoute();

const dataModelTarget = ref('');

if (route.params.slug) {
    dataModelTarget.value = 'display-post-modal';
} else {
    dataModelTarget.value = 'edit-post-modal';
}
</script>