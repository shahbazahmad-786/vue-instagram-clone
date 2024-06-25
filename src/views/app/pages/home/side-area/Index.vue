<template>
    <div class="hidden lg:block w-[85%] ml-auto mr-3">
        <!-- MyProfile Component -->
        <MyProfile />
        <!--/ MyProfile Component -->

        <div class="flex justify-between items-center mt-5">
            <span class="text-gray-600 text-sm">
                Suggested for you
            </span>
            <router-link :to="{ name: 'app.people' }"
                class="block  text-xs font-semibold hover:text-gray-500 transition-colors">
                See All
            </router-link>
        </div>

        <!-- PeopleAccounts Component -->
        <PeopleAccounts />
        <!--/ PeopleAccounts Component -->

        <!-- Footer Plugin -->
        <Footer class="w-[100%] grid grid-cols-4 items-start mt-8" />
        <!--/ Footer Plugin -->
    </div>

    <!-- Profile Popover -->
    <ProfilePopover />
    <!--/ Profile Popover -->
</template>

<script setup>
import MyProfile from './MyProfile.vue';
import PeopleAccounts from './PeopleAccounts.vue';
</script>