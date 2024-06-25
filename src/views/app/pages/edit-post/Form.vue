<template>
    <form @submit.prevent="submit">
        <!-- Modal body -->
        <div class="p-6 flex justify-center items-center">
            <div class="grid grid-cols-2">
                <div class="flex justify-end items-center">
                    <img :src="model.image_url
                        || 'http://localhost:3000/src/assets/image/default-image.png'"
                        class="w-full border-t border-l border-b border-black dark:border-gray-500  rounded-tl-lg rounded-bl-lg" />
                </div>
                <div>
                    <textarea v-model="model.caption" placeholder="Write a caption..."
                        class="w-full h-full border-t border-r border-b border-black dark:border-gray-500  rounded-tr-lg rounded-br-lg focus:ring-0 focus:border-black resize-none dark:bg-gray-700" />
                </div>
            </div>
        </div>
        <!--/ Modal body -->

        <!-- Modal footer -->
        <div class="flex-bc p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
            <!-- Form's Buttons -->
            <div class="flex-cc">

                <!-- Edit Post Btn -->
                <button type="submit" :data-modal-hide="modelStatus"
                    class="rounded-tl-lg rounded-bl-lg border-y border-l dark:border-gray-500 text-white bg-primary hover:bg-primaryHover font-normal text-sm px-5 py-2.5 text-center transition-colors">
                    Edit Post
                </button>
                <!--/ Edit Post Btn -->

                <!-- Post Actions buttons -->
                <button class="edit-post-btn">
                    <HeartIcon class="w-5" />
                </button>
                <button class="edit-post-btn">
                    <BookmarkIcon class="w-5" />
                </button>
                <button class="border-r dark:border-r-gray-500 rounded-tr-lg rounded-br-lg edit-post-btn">
                    <TrashIcon class="w-5" />
                </button>
                <!--/ Post Actions buttons -->

            </div>
            <!--/ Form's Buttons -->

            <!-- Post Buttons -->
            <div class="flex-cc space-x-2 text-gray-600 dark:text-gray-300 text-base">
                <span>136 likes</span>
                <span>&bull;</span>
                <span>18h</span>
            </div>
            <!--/ Post Buttons -->

        </div>
        <!-- Modal footer -->
    </form>
</template>

<script setup>
import { ref } from 'vue';
import {
    HeartIcon, BookmarkIcon, TrashIcon
} from "@heroicons/vue/24/outline";

const props = defineProps(['modelStatus']);

/* Form's Models */
let model = ref({
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem, labore nostrum veniam corporis commodi necessitatibus ea perferendis cupiditate tenetur.",
    slug: "",
    image: null,
    image_url: "http://localhost:3000/src/assets/image/profile2.jpg",
});

/* Form Submit */
const submit = () => {
    alert(`Caption:  ${model.value.caption} \nImage: ${model.value.image}`);
}
</script>