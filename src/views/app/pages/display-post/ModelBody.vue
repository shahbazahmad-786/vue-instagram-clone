<template>
    <!-- Modal body -->
    <div class="p-6 flex justify-center items-center">
        <div class="grid grid-cols-2">
            <!-- Image -->
            <div class="flex justify-end items-center">
                <Profile class="w-full border-t border-l border-b border-black rounded-tl-lg rounded-bl-lg" />
            </div>
            <!--/ Image -->

            <!-- Caption -->
            <div>
                <div class="w-full h-full p-2 border border-black rounded-tr-lg rounded-br-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam esse omnis illo ab cupiditate delectus
                    perspiciatis tempora tempore quisquam facere.
                </div>
            </div>
            <!--/ Caption -->
        </div>
    </div>
    <!--/ Modal body -->

    <!-- Modal footer -->
    <div class="flex-bc p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
        <!-- Post Actions buttons -->
        <div class="flex-cc">
            <button
                class="border-l border-y rounded-tl-lg rounded-bl-lg text-gray-900 bg-white hover:bg-gray-100 focus:outline-none px-3 py-2.5 hover:text-gray-800">
                <HeartIcon class="w-5" />
            </button>
            <button
                class="border-r border-y rounded-tr-lg rounded-br-lg text-gray-900 bg-white hover:bg-gray-100 focus:outline-none px-3 py-2.5 hover:text-gray-800">
                <BookmarkIcon class="w-5" />
            </button>
        </div>
        <!--/ Post Actions buttons -->

        <!-- Post Details -->
        <div class="flex-cc space-x-2 text-gray-600 text-base">
            <span>136 likes</span>
            <span>&bull;</span>
            <span>18h</span>
        </div>
        <!--/ Post Details -->

    </div>
    <!-- Modal footer -->
</template>

<script setup>
import {
    HeartIcon, BookmarkIcon
} from "@heroicons/vue/24/outline";
</script>