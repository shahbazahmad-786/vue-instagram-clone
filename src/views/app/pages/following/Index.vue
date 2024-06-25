<template>
    <div class="md:w-[60%] w-[95%] my-8 mx-auto">
        <div class="flex-bc mb-3 font-semibold text-lg">
            <div>Following</div>
            <div>145</div>
        </div>
        <div>
            <div v-for="i in 15" class="flex justify-between items-center mt-5">
                <div class="flex items-center">
                    <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }">
                        <Profile class="w-10 h-10 object-cover object-top rounded-full mr-3" />
                    </router-link>
                    <div>
                        <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                            class="text-[0.860rem] font-semibold hover:text-gray-500 transition-colors flex items-center">
                            shahbazahmad_786

                            <!-- When Verified -->
                            <VerifiedBadge v-if="true" class="w-4" />
                            <!--/ When Verified -->
                        </router-link>
                        <div class="text-gray-500 text-[0.700rem]">
                            Followed by shiraz_editz + 1 more
                        </div>
                    </div>
                </div>
                <router-link to=""
                    class="block text-black bg-gray-200 text-sm py-1 rounded-md px-4 font-semibold hover:bg-gray-300 transition-colors">
                    Following
                </router-link>
            </div>
        </div>
    </div>

    <!-- Footer Plugin -->
    <Footer class="my-8 max-w-[90%] mx-auto space-x-5 text-center sm:block hidden" />
    <!--/ Footer Plugin -->
</template>

<script setup>
//
</script>