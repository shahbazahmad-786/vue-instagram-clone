<template>
    <PopupModelLayout modelStatus="create-post-modal" modelWidth="w-full max-w-2xl">
        <template #heading>
            Create New Post
        </template>
        <template #body>
            <!-- Form Component -->
            <Form modelStatus="create-post-modal" />
            <!--/ Form Component -->
        </template>
    </PopupModelLayout>
</template>

<script setup>
import Form from './Form.vue'
</script>