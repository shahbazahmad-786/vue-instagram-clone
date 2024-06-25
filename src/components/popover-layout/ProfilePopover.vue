<template>
    <PopoverLayout popoverId="profile-popover">
        <div>
            <!-- Profile -->
            <div class="flex items-center p-4">
                <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }">
                    <Profile class="w-12 h-12 object-cover object-top rounded-full mr-2" />
                </router-link>
                <div>
                    <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                        class="text-base font-semibold text-gray-900 hover:text-gray-500 transition-colors flex items-center dark:text-white">
                        shahbazahmad_786

                        <!-- When Verified -->
                        <VerifiedBadge v-if="true" class="w-4" />
                        <!--/ When Verified -->
                    </router-link>
                    <div class="text-gray-500 text-sm">
                        Shahbaz Ahmad
                    </div>
                </div>
            </div>
            <!--/ Profile -->

            <!-- Designation -->
            <div class="mt-2 space-y-3">
                <div class="flex justify-evenly font-medium text-sm">
                    <span type="button" class="hover:text-gray-700 text-center">
                        125 <br> posts
                    </span>
                    <span class="hover:text-gray-700 text-center">
                        4.5K <br> followers
                    </span>
                    <span class="hover:text-gray-700 text-center">
                        145 <br> following
                    </span>
                </div>

                <!-- Posts -->
                <div class="grid grid-cols-3 gap-1">
                    <Profile v-for="i in 3" class="w-full" />
                </div>
                <!--/ Posts -->
            </div>
            <!--/ Designation -->

            <!-- Button -->
            <div class="m-3">
                <button
                    class="flex-cc w-full py-1 bg-primary hover:bg-primaryHover transition-colors text-white rounded-lg">
                    <UserPlusIcon class="w-5 mr-2" /> Follow
                </button>
            </div>
            <!--/ Button -->
        </div>
    </PopoverLayout>
</template>

<script setup>
import { UserPlusIcon } from "@heroicons/vue/24/outline";
import PopoverLayout from './PopoverLayout.vue'
</script>