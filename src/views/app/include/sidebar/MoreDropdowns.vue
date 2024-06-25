<template>
    <div id="MoreDropdownTop"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-2xl drop-shadow-2xl w-64 dark:bg-gray-700">
        <ul class="p-3" aria-labelledby="MoreDropdown">
            <li>
                <router-link :to="{ name: 'app.setting' }"
                    class="flex items-center hover:bg-gray-100 p-3 rounded-lg transition-colors dark:hover:bg-gray-600">
                    <Cog6ToothIcon class="w-6 mr-2" />
                    Settings
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'app.profile.edit' }"
                    class="flex items-center hover:bg-gray-100 p-3 rounded-lg transition-colors dark:hover:bg-gray-600">
                    <PencilSquareIcon class="w-6 mr-2" />
                    Edit Profile
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'app.people' }"
                    class="flex items-center hover:bg-gray-100 p-3 rounded-lg transition-colors dark:hover:bg-gray-600">
                    <UsersIcon class="w-6 mr-2" />
                    Suggested People
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about' }" target="_blank"
                    class="flex items-center hover:bg-gray-100 p-3 rounded-lg transition-colors dark:hover:bg-gray-600">
                    <AtSymbolIcon class="w-6 mr-2" />
                    About Instagram
                </router-link>
            </li>
            <li>
                <!-- DarkMode Plugin -->
                <DarkMode
                    button="flex items-center w-full hover:bg-gray-100 p-3 rounded-lg transition-colors dark:hover:bg-gray-600"
                    icon="w-6 mr-2" />
                <!--/ DarkMode Plugin -->
            </li>
            <li>
                <button type="button" data-modal-target="logout-modal" data-modal-toggle="logout-modal"
                    class="flex items-center w-full hover:bg-gray-100 p-3 rounded-lg transition-colors dark:hover:bg-gray-600">
                    <PowerIcon class="w-6 mr-2" />
                    Log out
                </button>
            </li>
        </ul>
    </div>

    <!-- Logout PopupModal -->
    <Logout />
    <!--/ Logout PopupModal -->
</template>

<script setup>
import { Cog6ToothIcon, PencilSquareIcon, UsersIcon, AtSymbolIcon, PowerIcon } from "@heroicons/vue/24/outline";
</script>