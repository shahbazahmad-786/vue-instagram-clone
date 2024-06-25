<template>
    <div class="h-[10vh] flex-bc px-4 border-b dark:border-b-gray-800">
        <!-- Profile -->
        <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }" class="flex items-center">
            <div>
                <Profile class="w-10 h-10 object-cover object-top rounded-full mr-3" />
            </div>
            <div class="text-base font-medium flex items-center hover:text-gray-600 transition-colors">
                shahbazahmad_786

                <!-- When Verified -->
                <VerifiedBadge v-if="false" class="w-4" />
                <!--/ When Verified -->
            </div>
        </router-link>
        <!--/ Profile -->

        <!-- Actions -->
        <div class="flex items-center space-x-3">
            <router-link to="" class="hover:text-gray-500 transition-colors">
                <PhoneIcon class="w-6" />
            </router-link>
            <router-link to="" class="hover:text-gray-500 transition-colors">
                <VideoCameraIcon class="w-6" />
            </router-link>
            <router-link to="" class="hover:text-gray-500 transition-colors">
                <InformationCircleIcon class="w-6" />
            </router-link>
        </div>
        <!--/ Actions -->
    </div>
</template>

<script setup>
import { PhoneIcon, VideoCameraIcon, InformationCircleIcon } from "@heroicons/vue/24/outline";
</script>