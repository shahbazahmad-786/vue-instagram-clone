<template>
    <div class="px-6 pb-6">
        <!-- Accounts -->
        <div v-if="true" v-for="i in 7" class="flex justify-between items-center mt-6">
            <div class="flex items-center">
                <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                    data-modal-hide="notifications-modal">
                    <Profile class="w-10 h-10 object-cover object-top rounded-full mr-3" />
                </router-link>
                <div>
                    <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                        data-modal-hide="notifications-modal"
                        class="text-[0.860rem] font-semibold hover:text-gray-500 transition-colors flex items-center">
                        shahbazahmad_786

                        <!-- When Verified -->
                        <VerifiedBadge v-if="true" class="w-4" />
                        <!--/ When Verified -->
                    </router-link>
                    <div class="text-gray-500 text-xs">
                        Started following you
                        <span class="mx-1">&bull;</span>
                        1W
                    </div>
                </div>
            </div>
            <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                data-modal-hide="notifications-modal"
                class="block text-white bg-primary text-sm py-1 rounded-md px-4 font-semibold hover:bg-primaryHover transition-colors">
                Follow
            </router-link>
        </div>
        <!--/ Accounts -->

        <!-- Empty Search Message -->
        <div v-else class="flex-cc mt-6 font-normal text-gray-500">
            No notifications
        </div>
        <!--/ Empty Search Message -->
    </div>
</template>

<script setup>
//
</script>