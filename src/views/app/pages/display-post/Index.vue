<template>
    <PopupModelLayout modelStatus="display-post-modal" modelWidth="w-full max-w-2xl">
        <template #heading>
            <!-- ModelHeading Component -->
            <ModelHeading />
            <!--/ ModelHeading Component -->
        </template>
        <template #body>
            <!-- ModelBody Component -->
            <ModelBody />
            <!--/ ModelBody Component -->
        </template>
    </PopupModelLayout>
</template>

<script setup>
import ModelHeading from './ModelHeading.vue'
import ModelBody from './ModelBody.vue'
</script>