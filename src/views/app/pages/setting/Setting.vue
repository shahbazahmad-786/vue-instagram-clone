<template>
    <div class="space-y-5 border dark:border-gray-800 p-5">
        <!-- Personal -->
        <div>
            <!-- Heading -->
            <h2 class="font-semibold mb-3">
                Personal
            </h2>
            <!--/ Heading -->

            <!-- Settings -->
            <div class="space-y-2 ml-2">
                <router-link :to="{ name: 'app.profile.edit' }"
                    class="flex items-center hover:text-gray-600 transition-colors">
                    <UserIcon class="w-5 mr-1" />
                    Modify your personal profile
                </router-link>

                <router-link to="" class="flex items-center hover:text-gray-600 transition-colors">
                    <CheckCircleIcon class="w-5 mr-1" />
                    Change your password
                </router-link>
            </div>
            <!--/ Settings -->
        </div>
        <!--/ Personal -->

        <!-- General -->
        <div>
            <!-- Heading -->
            <h2 class="font-semibold mb-3">
                General
            </h2>
            <!--/ Heading -->

            <!-- Settings -->
            <div class="space-y-2 ml-2">
                <router-link :to="{ name: 'about' }" target="_blank"
                    class="flex items-center hover:text-gray-600 transition-colors">
                    <AtSymbolIcon class="w-5 mr-1" />
                    About instagram
                </router-link>

                <router-link :to="{ name: 'app.messages.people', params: { slug: 'shahbazahmad_7861' } }"
                    class="flex items-center hover:text-gray-600 transition-colors">
                    <EnvelopeIcon class="w-5 mr-1" />
                    Contact to instagram
                </router-link>

                <!-- DarkMode Plugin -->
                <DarkMode button="flex items-center hover:text-gray-600 transition-colors" icon="w-5 mr-1" />
                <!--/ DarkMode Plugin -->

                <button type="button" data-modal-target="logout-modal" data-modal-toggle="logout-modal"
                    class="flex items-center hover:text-gray-600 transition-colors">
                    <PowerIcon class="w-5 mr-1" />
                    Switch to other account
                </button>
            </div>
            <!--/ Settings -->
        </div>
        <!--/ General -->
    </div>
</template>

<script setup>
import { UserIcon, CheckCircleIcon, AtSymbolIcon, PowerIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
</script>