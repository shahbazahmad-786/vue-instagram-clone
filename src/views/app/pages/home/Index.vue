<template>
    <div class="grid grid-cols-3">
        <!-- Content -->
        <div class="lg:col-span-2 col-span-3">
            <!-- HomeStories Component -->
            <HomeStories />
            <!--/ HomeStories Component -->

            <!-- Posts Component -->
            <Posts />
            <!--/ Posts Component -->
        </div>
        <!--/ Content -->

        <!-- SideArea Component -->
        <SideArea />
        <!--/ SideArea Component -->
    </div>
</template>

<script setup>
import HomeStories from './stories/HomeStories.vue'
import Posts from "./posts/Posts.vue";
import SideArea from "./side-area/Index.vue";
</script>