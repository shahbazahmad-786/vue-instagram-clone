<template>
    <div class="my-6 md:mx-10">
        <!-- Profile Component -->
        <Profile />
        <!--/ Profile Component -->

        <!-- Posts Section -->
        <div class="mt-10">
            <!-- Tabs Component - Show Just MyProfile -->
            <Tabs />
            <!--/ Tabs Component - Show Just MyProfile -->

            <!-- PostImages Component -->
            <PostImages />
            <!--/ PostImages Component -->

            <!-- SavedImages Component - Show Just MyProfile -->
            <SavedImages />
            <!--/ SavedImages Component - Show Just MyProfile -->

        </div>
        <!--/ Posts Section -->
    </div>
</template>

<script setup>
import Profile from "./Profile.vue";
import Tabs from "./Tabs.vue";
import PostImages from "./PostImages.vue";
import SavedImages from "./SavedImages.vue";


</script>