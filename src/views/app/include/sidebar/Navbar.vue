<template>
    <nav id="sidebar" class="flex flex-col justify-between h-[85vh] pb-8">
        <!-- Home-Route -->
        <router-link :to="{ name: 'app.index' }" class="nav-links group" :class="[route.fullPath === '/messages'
            || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block' : 'md:flex block']">
            <HomeIcon class="nav-icons" />
            <span :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']">
                Home
            </span>
        </router-link>
        <!--/ Home-Route -->

        <!-- Search-Button -->
        <button type="button" data-modal-target="search-modal" data-modal-toggle="search-modal" class="nav-links group"
            :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block' : 'md:flex block']">
            <MagnifyingGlassIcon class="nav-icons" />
            <span :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']">
                Search
            </span>
        </button>
        <!--/ Search-Button -->

        <!-- Explore-Route -->
        <router-link :to="{ name: 'app.explore' }" class="nav-links group" :class="[route.fullPath === '/messages'
            || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block' : 'md:flex block']">
            <Squares2X2Icon class="nav-icons" />
            <span :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']">
                Explore
            </span>
        </router-link>
        <!--/ Explore-Route -->

        <!-- Notifications-Button -->
        <button type="button" data-modal-target="notifications-modal" data-modal-toggle="notifications-modal"
            class="nav-links group" :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block' : 'md:flex block']">
            <HeartIcon class="nav-icons" />
            <span :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']">
                Notifications
            </span>
        </button>
        <!--/ Notifications-Button -->

        <!-- Message-Route -->
        <router-link :to="{ name: 'app.messages' }" class="nav-links group"
            :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block message-link' : 'md:flex block']">
            <ChatBubbleOvalLeftEllipsisIcon
                :class="[route.fullPath === `/messages/${route.params.slug}` ? 'nav-icons scale-105' : 'nav-icons']" />
            <span :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']">
                Messages
            </span>
        </router-link>
        <!--/ Message-Route -->

        <!-- Saved-Route -->
        <router-link :to="{ name: 'app.profile.saved' }" class="nav-links group" :class="[route.fullPath === '/messages'
            || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block' : 'md:flex block']">
            <BookmarkIcon class="nav-icons" />
            <span :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']">
                Saved
            </span>
        </router-link>
        <!--/ Saved-Route -->

        <!-- CreatePost-Button -->
        <button type="button" data-modal-target="create-post-modal" data-modal-toggle="create-post-modal"
            class="nav-links group" :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block' : 'md:flex block']">
            <PlusCircleIcon class="nav-icons" />
            <span :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']">
                Create
            </span>
        </button>
        <!--/ CreatePost-Button -->

        <!-- Profile-Route -->
        <router-link :to="{ name: 'app.profile' }" class="nav-links group" :class="[route.fullPath === '/messages'
            || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block' : 'md:flex block']">
            <Profile class="w-7 h-7 object-cover object-top rounded-full mr-3 border profile" />
            <span :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']">
                Profile
            </span>
        </router-link>
        <!--/ Profile-Route -->

        <!-- MoreDropdown-Button -->
        <button type="button" id="MoreDropdown" data-dropdown-toggle="MoreDropdownTop" data-dropdown-placement="top"
            class="nav-links group" :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block' : 'md:flex block']">
            <Bars3Icon class="nav-icons" />
            <span :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']">
                More
            </span>
        </button>
        <!--/ MoreDropdown-Button -->
    </nav>
</template>

<script setup>
import {
    HomeIcon, MagnifyingGlassIcon, Squares2X2Icon, HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon, PlusCircleIcon, Bars3Icon
} from "@heroicons/vue/24/outline";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>