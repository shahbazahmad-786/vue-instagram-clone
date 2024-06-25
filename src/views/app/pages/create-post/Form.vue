<template>
    <form @submit.prevent="submit">
        <!-- Modal body -->
        <div class="p-6 flex justify-center items-center">
            <div class="grid grid-cols-2">
                <div class="flex justify-end items-center">
                    <img :src="model.image_url
                        || 'http://localhost:3000/src/assets/image/default-image.png'"
                        class="w-full border-t border-l border-b border-black dark:border-gray-500 rounded-tl-lg rounded-bl-lg" />
                </div>
                <div>
                    <textarea v-model="model.caption" placeholder="Write a caption..."
                        class="w-full h-full border-t border-r border-b border-black dark:border-gray-500 rounded-tr-lg rounded-br-lg focus:ring-0 focus:border-black resize-none dark:bg-gray-700" />
                </div>
            </div>
        </div>
        <!--/ Modal body -->

        <!-- Modal footer -->
        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <!-- Select Photo -->
            <button type="button"
                class="relative overflow-hidden text-white bg-primary hover:bg-primaryHover font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors">
                Select Photo
                <input type="file" @change="onImageChoose"
                    class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer">
            </button>
            <!--/ Select Photo -->

            <!-- Share Post Btn -->
            <button type="submit" :data-modal-hide="modelStatus"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                Share Post
            </button>
            <!--/ Share Post Btn -->

        </div>
        <!-- Modal footer -->
    </form>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['modelStatus']);

/* Form's Models */
let model = ref({
    caption: "",
    slug: "",
    image: null,
    image_url: null,
});

/* Image Choose */
const onImageChoose = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
        /* The field to send on backend and apply validations */
        model.value.image = reader.result;

        /* The field to display here */
        model.value.image_url = reader.result;
        e.target.value = "";
    };
    reader.readAsDataURL(file);
}

/* Form Submit */
const submit = () => {
    alert(`Caption:  ${model.value.caption} \nImage: ${model.value.image}`);
}
</script>