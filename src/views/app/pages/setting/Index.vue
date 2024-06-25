<template>
    <div class="w-[80%] mx-auto my-8">
        <!-- Heading -->
        <h1 class="text-xl font-semibold mb-8">
            Setting
        </h1>
        <!--/ Heading -->

        <!-- Setting Component -->
        <Setting />
        <!--/ Setting Component -->

    </div>

    <!-- Footer Plugin -->
    <Footer class="max-w-[90%] mx-auto space-x-5 text-center sm:block hidden" />
    <!--/ Footer Plugin -->
</template>

<script setup>
import Setting from './Setting.vue';
</script>