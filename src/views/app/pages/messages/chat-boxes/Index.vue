<template>
    <div class="w-[25rem] border-r dark:border-r-gray-800">
        <!-- Heading Component -->
        <Heading />
        <!--/ Heading Component -->

        <!-- Chat-Boxes Component -->
        <ChatBoxes />
        <!--/ Chat-Boxes Component -->
    </div>
</template>

<script setup>
import ChatBoxes from './ChatBoxes.vue';
import Heading from './Heading.vue';
</script>