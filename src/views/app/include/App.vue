<template>
    <div>
        <!-- Sidebar Component -->
        <Sidebar />
        <!--/ Sidebar Component -->

        <!-- Main Content -->
        <main :class="[route.fullPath === '/messages'
            || route.fullPath === `/messages/${route.params.slug}` ? 'md:ml-20 ml-20' : 'md:ml-60 ml-20']">
            <router-view />
        </main>
        <!--/ Main Content -->
    </div>
</template>

<script setup>
import Sidebar from './sidebar/Index.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>