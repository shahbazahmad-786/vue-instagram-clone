<template>
    <!-- Show for MyProfile -->
    <template v-if="!route.params.slug">
        <div :id="[route.fullPath === '/profile/saved' ? 'savedImages' : '']"
            class="flex justify-center items-center space-x-14 border-t dark:border-t-gray-800">
            <router-link :to="{ name: 'app.profile' }"
                :class="[route.fullPath === '/profile' ? 'border-black' : 'border-transparent text-gray-500']"
                class="flex items-center py-3 border-t">
                <TableCellsIcon class="h-5 mr-1" />
                <span class="text-sm tracking-wider font-semibold">POSTS</span>
            </router-link>
            <router-link :to="{ name: 'app.profile.saved' }"
                :class="[route.fullPath === '/profile/saved' ? 'border-black' : 'border-transparent text-gray-500']"
                class="flex items-center py-3 border-t">
                <BookmarkIcon class="h-5 mr-1" />
                <span class="text-sm tracking-wider font-semibold">SAVED</span>
            </router-link>
        </div>
    </template>
    <!--/ Show for MyProfile -->

    <!-- Show for People Profile -->
    <template v-else>
        <hr class="mb-3 dark:border-gray-800" />
    </template>
    <!--/ Show for People Profile -->
</template>

<script setup>
import { TableCellsIcon, BookmarkIcon } from "@heroicons/vue/24/outline";
import { useRoute } from 'vue-router'
const route = useRoute();
</script>