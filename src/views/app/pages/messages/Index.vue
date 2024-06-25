<template>
    <div class="flex">
        <!-- Chat-Boxes Component -->
        <ChatBoxes />
        <!--/ Chat-Boxes Component -->

        <!-- Single-Chat Component -->
        <SingleChat />
        <!--/ Single-Chat Component -->
    </div>
</template>

<script setup>
import ChatBoxes from './chat-boxes/Index.vue';
import SingleChat from './single-chat/Index.vue';
</script>