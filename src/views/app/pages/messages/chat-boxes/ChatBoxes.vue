<template>
    <div class="pt-3 h-[90vh] overflow-y-scroll">
        <!-- Chat-Boxes -->
        <router-link v-for="i in 15" :to="{ name: 'app.messages.people', params: { slug: `shahbazahmad_786${i}` } }"
            class="flex items-center px-5 py-2 hover:bg-gray-100 transition-colors dark:hover:bg-gray-800"
            :class="[`shahbazahmad_786${i}` === route.params.slug ? 'bg-gray-100 dark:bg-gray-800' : '']">
            <!-- Image -->
            <div>
                <Profile class="w-10 h-10 object-cover object-top rounded-full mr-3" />
            </div>
            <!--/ Image -->

            <!-- Designation -->
            <div>
                <div class="text-[0.800rem] font-medium flex items-center">
                    shahbazahmad_786

                    <!-- When Verified -->
                    <VerifiedBadge v-if="false" class="w-3" />
                    <!--/ When Verified -->
                </div>
                <div class="text-gray-500 text-[0.650rem]">
                    Active 8h ago
                </div>
            </div>
            <!--/ Designation -->
        </router-link>
        <!--/ Chat-Boxes -->
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
</script>