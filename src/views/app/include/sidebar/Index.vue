<template>
    <aside class="fixed top-0 left-0 px-3 h-screen  border-r border-r-gray-300 dark:border-r-gray-800" :class="[route.fullPath === '/messages'
        || route.fullPath === `/messages/${route.params.slug}` ? 'md:w-20 w-20' : 'md:w-60 w-20']">
        <!-- Logos Component-->
        <SidebarLogos />
        <!--/ Logos Component -->

        <!-- Navbar Component -->
        <Navbar />
        <!--/ Navbar Component -->
    </aside>

    <!-- Popup Models -->
    <CreatePost />
    <Search />
    <Notifications />
    <!--/ Popup Models -->

    <!-- More Dropdown -->
    <MoreDropdowns />
    <!--/ More Dropdown -->
</template>

<script setup>
import { useRoute } from 'vue-router';
import SidebarLogos from './SidebarLogos.vue';
import Navbar from './Navbar.vue';
import CreatePost from '../../pages/create-post/Index.vue';
import Search from '../../pages/search/Index.vue';
import Notifications from '../../pages/notifications/Index.vue';
import MoreDropdowns from "./MoreDropdowns.vue";

const route = useRoute();
</script>