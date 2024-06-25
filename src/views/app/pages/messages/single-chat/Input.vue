<template>
    <div class="h-[10vh] p-3 flex-cc">
        <div class="w-full flex items-center border dark:border-gray-800 rounded-full space-x-2 px-3">
            <button type="button" class="hover:text-gray-600 transition-colors">
                <FaceSmileIcon class="w-6" />
            </button>

            <!-- Input-Field -->
            <input type="text" placeholder="Message..." class="w-full bg-transparent border-none focus:ring-0">
            <!--/ Input-Field -->

            <button type="button" class="hover:text-gray-600 transition-colors">
                <MicrophoneIcon class="w-6" />
            </button>
            <button type="button" class="hover:text-gray-600 transition-colors">
                <PhotoIcon class="w-6" />
            </button>
            <button type="button" class="hover:text-gray-600 transition-colors">
                <HeartIcon class="w-6" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { FaceSmileIcon, MicrophoneIcon, PhotoIcon, HeartIcon } from '@heroicons/vue/24/outline';
</script>