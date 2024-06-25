<template>
    <button @click="toggleBtn()" type="button" :class="button">
        <MoonIcon v-if="isDark" :class="icon" />
        <SunIcon v-else :class="icon" />
        Switch Appearance
    </button>
</template>

<script setup>
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleBtn = useToggle(isDark);

const props = defineProps(['button', 'icon']);
</script>