<template>
    <!-- Show Just MyProfile -->
    <template v-if="!route.params.slug">
        <div v-if="route.fullPath === '/profile/saved'" class="grid grid-cols-3 gap-1">
            <!-- Saved Images -->
            <div v-for="i in 6">
                <Profile class="w-full aspect-square object-cover object-top" />
            </div>
            <!--/ Saved Images -->
        </div>
    </template>
    <!-- Show Just MyProfile -->
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>