<template>
    <PopupModelLayout modelStatus="notifications-modal" modelWidth="w-full max-w-lg">
        <template #heading>
            Notifications
        </template>
        <template #body>
            <!-- Modal body Component -->
            <ModelBody />
            <!--/ Modal body Component -->
        </template>
    </PopupModelLayout>
</template>

<script setup>
import ModelBody from './ModelBody.vue';
</script>