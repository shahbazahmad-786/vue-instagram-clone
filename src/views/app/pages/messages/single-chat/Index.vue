<template>
    <!-- Single-Chat -->
    <div v-if="route.params.slug" class="w-full">
        <!-- Header Component -->
        <Header />
        <!--/ Header Component -->

        <!-- Texts Component -->
        <Texts />
        <!--/ Texts Component -->

        <!-- Input Component -->
        <Input />
        <!--/ Input Component -->
    </div>
    <!--/ Single-Chat -->

    <!-- Empty-Chat Component -->
    <EmptyChat v-else />
    <!--/ Empty-Chat Component -->
</template>

<script setup>
import EmptyChat from './EmptyChat.vue';
import Header from './Header.vue';
import Texts from './Texts.vue';
import Input from './Input.vue';
import { useRoute } from 'vue-router'

const route = useRoute();
</script>
