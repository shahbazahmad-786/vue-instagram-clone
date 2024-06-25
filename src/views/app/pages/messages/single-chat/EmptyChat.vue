<template>
    <div class="w-full flex-cc">
        <div class="space-y-2 text-center">
            <ChatBubbleOvalLeftEllipsisIcon class="w-20 mx-auto text-gray-500" />
            <div>
                <h1 class="text-xl">
                    Your messages
                </h1>
                <span class="text-gray-500 text-sm">
                    Send private photos or messages to a friends
                </span>
            </div>
            <button type="button"
                class="py-1 px-2 mx-auto text-white bg-primary hover:bg-primaryHover rounded-lg transition-colors">
                Send message
            </button>
        </div>
    </div>
</template>

<script setup>
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/vue/24/outline";
</script>