<template>
    <div v-for="i in 5" class="flex justify-between items-center mt-4">
        <div class="flex items-center">
            <!-- Image -->
            <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                data-popover-target="profile-popover">
                <Profile class="w-8 h-8 object-cover object-top rounded-full mr-2" />
            </router-link>
            <!--/ Image -->

            <!-- Designation -->
            <div>
                <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                    data-popover-target="profile-popover"
                    class="text-[0.860rem] font-semibold hover:text-gray-500 transition-colors flex items-center">
                    shahbazahmad_786

                    <!-- When Verified -->
                    <VerifiedBadge v-if="false" class="w-4" />
                    <!--/ When Verified -->
                </router-link>
                <div class="text-gray-500 text-[0.700rem]">
                    Followed by shiraz_editz + 1 more
                </div>
            </div>
            <!--/ Designation -->
        </div>

        <!-- Follow-Btn -->
        <router-link to="" class="block text-primary text-xs font-semibold hover:text-primaryHover transition-colors">
            Follow
        </router-link>
        <!--/ Follow-Btn -->
    </div>
</template>

<script setup>
//
</script>