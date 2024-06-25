<template>
    <PopupModelLayout modelStatus="edit-post-modal" modelWidth="w-full max-w-2xl">
        <template #heading>
            Edit Post
        </template>
        <template #body>
            <!-- Form Component -->
            <Form modelStatus="edit-post-modal" />
            <!--/ Form Component -->
        </template>
    </PopupModelLayout>
</template>

<script setup>
import Form from './Form.vue'
</script>