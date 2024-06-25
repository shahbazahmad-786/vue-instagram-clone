<template>
    <div data-popover :id="popoverId" role="tooltip"
        class="absolute z-100 invisible inline-block w-[22rem] transition-opacity duration-300 bg-white rounded-lg drop-shadow-2xl opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">

        <!-- Popover-Content -->
        <slot />
        <!--/ Popover-Content -->

        <div data-popper-arrow></div>
    </div>
</template>

<script setup>
const props = defineProps(['popoverId']);
</script>