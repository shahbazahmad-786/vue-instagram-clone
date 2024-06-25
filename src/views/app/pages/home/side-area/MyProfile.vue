<template>
    <div class="flex justify-between items-center mt-8">
        <div class="flex justify-between items-center">
            <!-- Image -->
            <router-link :to="{ name: 'app.profile' }">
                <Profile class="w-12 h-12 object-cover object-top rounded-full mr-2" />
            </router-link>
            <!--/ Image -->

            <!-- Designation -->
            <div>
                <router-link :to="{ name: 'app.profile' }"
                    class="text-[0.875rem] font-semibold hover:text-gray-500 transition-colors flex items-center">
                    shahbazahmad_786

                    <!-- When Verified -->
                    <VerifiedBadge v-if="true" class="w-4" />
                    <!--/ When Verified -->
                </router-link>
                <div class="leading-[12px] text-gray-500 text-[0.880rem]">
                    Shahbaz Ahmad
                </div>
            </div>
            <!--/ Designation -->
        </div>
        <button type="button" data-modal-target="logout-modal" data-modal-toggle="logout-modal"
            class="block text-primary text-xs font-semibold hover:text-primaryHover transition-colors">
            Switch
        </button>
    </div>

    <!-- Logout PopupModal -->
    <Logout />
    <!--/ Logout PopupModal -->
</template>

<script setup>
//
</script>