<template>
    <div class="mb-16 mt-5">
        <div class="w-[32rem] mx-auto" v-for="i in 2">
            <!-- Post Header -->
            <div class="flex justify-between items-center my-3">
                <div class="flex items-center">
                    <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                        data-popover-target="profile-popover">
                        <div class="w-9 h-9" :class="[true ? 'story-ring' : '']">
                            <Profile
                                class="aspect-square object-cover object-top rounded-full border-2 border-white dark:border-black" />
                        </div>
                    </router-link>
                    <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                        data-popover-target="profile-popover"
                        class="font-medium hover:text-gray-500 transition-colors text-sm ml-3 flex items-center">
                        shahbazahmad_786

                        <!-- When Verified -->
                        <VerifiedBadge v-if="true" class="w-4" />
                        <!--/ When Verified -->
                    </router-link>
                    <span class="text-gray-500 mx-1">&bull;</span>
                    <span class="text-gray-600 text-sm">18h</span>
                    <span class="text-gray-500 mx-1">&bull;</span>
                    <router-link to="" class="text-primary font-medium hover:text-primaryHover transition-colors text-sm">
                        Follow
                    </router-link>
                </div>
                <button type="button" data-modal-target="post-actions-modal" data-modal-toggle="post-actions-modal">
                    <EllipsisHorizontalIcon class="w-6 cursor-pointer hover:text-gray-500" />
                </button>
            </div>
            <!--/ Post Header -->

            <!-- Post Body -->
            <div>
                <Profile class="w-full rounded" />
            </div>
            <!--/ Post Body -->

            <!-- Post Footer -->
            <div>
                <div class="flex justify-between items-center mt-3 mb-2">
                    <div class="flex items-center space-x-3">
                        <router-link to="" class="hover:text-gray-500 transition-colors">
                            <HeartIcon class="w-7" />
                        </router-link>
                        <router-link to="" class="hover:text-gray-500 transition-colors">
                            <ChatBubbleOvalLeftIcon class="w-7 -rotate-90" />
                        </router-link>
                        <router-link to="" class="hover:text-gray-500 transition-colors">
                            <PaperAirplaneIcon class="w-7 -rotate-45" />
                        </router-link>
                    </div>
                    <div>
                        <router-link to="" class="hover:text-gray-500 transition-colors">
                            <BookmarkIcon class="w-7" />
                        </router-link>
                    </div>
                </div>
                <router-link to="" class="font-semibold">136 likes</router-link>
                <div class="text-sm mt-1">
                    <router-link to="" class="font-semibold mr-1">shahbazahmad_786</router-link>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
                        maiores...
                    </span>
                    <br>
                    <router-link to="" class="text-gray-500 mt-1">more</router-link>
                </div>
                <router-link to="" class="text-sm text-gray-500 mt-1">
                    View all 14 comments
                </router-link>
                <router-link to="" class="text-sm text-gray-500 flex justify-between items-center mt-1">
                    <span class="text-sm text-gray-500">Add a comment...</span>
                    <FaceSmileIcon class="w-5" />
                </router-link>
            </div>
            <!--/ Post Footer -->
        </div>
    </div>

    <!-- PostActions Model -->
    <PostActions />
    <!--/ PostActions Model -->

    <!-- Profile Popover -->
    <ProfilePopover />
    <!--/ Profile Popover -->
</template>

<script setup>
import PostActions from "./PostActions.vue";
import {
    HeartIcon, BookmarkIcon, EllipsisHorizontalIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon, FaceSmileIcon
} from "@heroicons/vue/24/outline";
</script>