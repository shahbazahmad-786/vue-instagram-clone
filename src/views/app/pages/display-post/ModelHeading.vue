<template>
    <div class="flex items-center">
        <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }">
            <Profile class="w-8 h-8 object-cover object-top rounded-full mr-3" />
        </router-link>
        <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
            class="text-base font-semibold hover:text-gray-500 transition-colors flex items-center">
            shahbazahmad_786

            <!-- When Verified -->
            <VerifiedBadge v-if="true" class="w-4" />
            <!--/ When Verified -->
        </router-link>
    </div>
</template>

<script setup>
//
</script>