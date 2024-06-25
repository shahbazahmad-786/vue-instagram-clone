<template>
    <form @submit.prevent="submit">
        <div class="space-y-5 border dark:border-gray-800 p-5">
            <!-- Image Field -->
            <div class="flex justify-between items-end">
                <div class="w-12 h-12 rounded-full border">
                    <img :src="model.image_url
                        || 'http://localhost:3000/src/assets/image/default-profile.jpeg'"
                        class="w-full h-full object-cover object-top rounded-full" />
                </div>
                <div>
                    <button type="button"
                        class="block relative bg-gray-100 text-black hover:bg-gray-200 active:border-primary py-1 rounded-md text-sm border-2 text-center w-64 cursor-pointer transition-colors dark:bg-gray-300">
                        Change profile photo
                        <input type="file" @change="onImageChoose" class="absolute top-0 left-0 right-0 bottom-0 opacity-0">
                    </button>
                </div>
            </div>
            <!--/ Image Field -->

            <!-- Name Field -->
            <div class="flex justify-between">
                <label for="name" class="text-base font-semibold">Name</label>
                <input v-model="model.name" type="text" id="name"
                    class="py-1 text-sm w-64 rounded-md bg-gray-100 dark:text-black dark:bg-gray-300">
            </div>
            <!--/ Name Field -->

            <!-- Username Field -->
            <div class="flex justify-between">
                <label for="username" class="text-base font-semibold">Username</label>
                <input v-model="model.username" type="text" id="username"
                    class="py-1 text-sm w-64 rounded-md bg-gray-100 dark:text-black dark:bg-gray-300">
            </div>
            <!--/ Username Field -->

            <!-- Bio Field -->
            <div class="flex justify-between">
                <label for="bio" class="text-base font-semibold">Bio</label>
                <textarea v-model="model.bio" type="text" placeholder="Bio..." id="bio"
                    class="py-1 text-sm w-64 rounded-md bg-gray-100 dark:text-black dark:bg-gray-300 placeholder:dark:text-black" />
            </div>
            <!--/ Bio Field -->

            <!-- Gender Field -->
            <div class="flex justify-between">
                <label for="gender" class="text-base font-semibold">Gender</label>
                <select v-model="model.gender"
                    class="py-1 text-sm w-64 rounded-md bg-gray-100 dark:text-black dark:bg-gray-300" id="gender">
                    <option value="null">Gender</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="o">Other</option>
                </select>
            </div>
            <!--/ Gender Field -->

            <!-- Submit Btn -->
            <button type="submit" class="py-1 px-3 bg-primary text-white hover:bg-primaryHover rounded-md cursor-pointer">
                Submit
            </button>
            <!--/ Submit Btn -->
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

/* Form's Models */
let model = ref({
    image: null,
    image_url: null,
    name: 'Shahbaz Ahmad',
    username: 'shahbazahmad_786',
    bio: '',
    gender: null
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

/* Form-Submit EditProfile */
const submit = () => {
    alert(`Caption:  ${model.value.name} \nUsername: ${model.value.username} \nBio: ${model.value.bio} \nGender: ${model.value.gender}`);
}
</script>