<template>
    <PopupModelLayout modelStatus="search-modal" modelWidth="w-full max-w-lg">
        <template #heading>
            Search
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