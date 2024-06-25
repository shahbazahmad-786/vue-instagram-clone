<template>
    <PopupModelLayout modelStatus="post-actions-modal" modelWidth="w-full max-w-sm" headerStatus="false">
        <template #body>
            <!-- Modal body -->
            <div class="flex-cc flex-col py-1">
                <router-link to=""
                    class="actions-links text-red-700 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400">
                    Unfollow
                </router-link>
                <router-link :to="{ name: 'app.profile.people', params: { slug: 'shahbazahmad_786' } }"
                    data-modal-hide="post-actions-modal" class="actions-links">
                    Go to profile
                </router-link>
                <router-link to="" class="actions-links">
                    Saved
                </router-link>
                <button type="button" data-modal-hide="post-actions-modal" class="actions-links  border-none">
                    Cancel
                </button>
            </div>
            <!--/ Modal body -->
        </template>
    </PopupModelLayout>
</template>

<script setup>
//
</script>