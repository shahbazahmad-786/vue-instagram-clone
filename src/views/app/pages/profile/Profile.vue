<template>
    <div class="grid grid-cols-3">
        <!-- Profile Image -->
        <div class="flex justify-center items-center">
            <Profile class="lg:w-40 lg:h-40 w-28 h-28 object-cover object-top rounded-full border" />
        </div>
        <!-- Profile Image -->

        <!-- Profile Designation -->
        <div class="col-span-2 space-y-3">

            <!-- Show When MyProfile -->
            <template v-if="!route.params.slug">
                <div class="flex items-center space-x-5">
                    <span class="text-lg font-semibold flex items-center">
                        shahbazahmad_786

                        <!-- When Verified -->
                        <VerifiedBadge v-if="true" class="w-6" />
                        <!--/ When Verified -->
                    </span>
                    <router-link :to="{ name: 'app.profile.edit' }">
                        <span
                            class="lg:block hidden py-1 px-3 text-sm font-medium bg-primary text-white hover:bg-primaryHover transition-colors rounded-md">
                            Edit Profile
                        </span>
                        <PencilSquareIcon class="w-7 lg:hidden block" />
                    </router-link>
                    <router-link :to="{ name: 'app.setting' }">
                        <Cog6ToothIcon class="w-7" />
                    </router-link>
                </div>
            </template>
            <!--/ Show When MyProfile -->

            <!-- Show When People Profile -->
            <template v-else>
                <div class="flex items-center space-x-5">
                    <span class="text-lg font-semibold flex items-center">
                        shahbazahmad_786

                        <!-- When Verified -->
                        <VerifiedBadge v-if="true" class="w-6" />
                        <!--/ When Verified -->
                    </span>
                    <router-link to="">
                        <span
                            class="lg:block hidden py-1 px-3 text-sm font-medium text-white bg-primary hover:bg-primaryHover transition-colors rounded-md">
                            Follow
                        </span>
                        <UserPlusIcon class="w-7 lg:hidden block" />
                    </router-link>
                    <router-link :to="{ name: 'app.messages.people', params: { slug: 'shahbazahmad_7861' } }">
                        <ChatBubbleBottomCenterTextIcon class="w-7" />
                    </router-link>
                </div>
            </template>
            <!--/ Show When People Profile -->

            <div class="flex space-x-8">
                <button type="button" @click="scrollToPosts" class="font-normal hover:text-gray-700 text-center">
                    125 posts
                </button>
                <router-link :to="{ name: 'app.followers' }" class="font-normal hover:text-gray-700 text-center">
                    4.5K followers
                </router-link>
                <router-link :to="{ name: 'app.following' }" class="font-normal hover:text-gray-700 text-center">
                    145 following
                </router-link>
            </div>
            <div>
                <span class="text-base font-bold">Shahbaz Ahmad</span>
                <p class="w-4/5 text-[0.800rem]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nam alias fugiat perspiciatis eaque
                    <br> Sunt, velit maxime quas inventore
                    neque cum sint <br> quo ratione? Optio nam alias fugiat perspiciatis eaque <br> eius rem porro, iure
                    saepe veniam ad ratione
                </p>
            </div>
        </div>
        <!--/ Profile Designation -->
    </div>
</template>

<script setup>
import { Cog6ToothIcon, PencilSquareIcon, UserPlusIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/vue/24/outline";
import { useRoute } from 'vue-router'
const route = useRoute();

/* Scroll the document 260px vertically(Y)  */
const scrollToPosts = () => {
    window.scrollBy(0, 260);
};
</script>