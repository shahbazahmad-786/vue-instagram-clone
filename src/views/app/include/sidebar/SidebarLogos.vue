<template>
    <div class="h-[15vh] flex items-center pl-3">
        <router-link :to="{ name: 'app.index' }">
            <!-- Full-Logo -->
            <Logo class="dark:invert"
                :class="[route.fullPath === '/messages'
                    || route.fullPath === `/messages/${route.params.slug}` ? 'md:hidden hidden' : 'md:block hidden']" />
            <!--/ Full-Logo -->

            <!-- Mini-Logo -->
            <LogoMini class="w-7 dark:invert" :class="[route.fullPath === '/messages'
                || route.fullPath === `/messages/${route.params.slug}` ? 'md:block block' : 'md:hidden block']" />
            <!--/ Mini-Logo -->
        </router-link>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>