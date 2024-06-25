<template>
    <PopupModelLayout modelStatus="logout-modal" modelWidth="w-full max-w-sm" headerStatus="false">
        <template #body>
            <!-- Modal body -->
            <div class="p-4">
                <div>
                    <QuestionMarkCircleIcon class="w-16 mx-auto text-primary" />
                    <p class="text-center mt-5">
                        Are you sure you want to <b>Log out</b> this site?
                    </p>
                </div>
                <div class="mt-7 flex space-x-2">
                    <!-- Logout Button -->
                    <button @click="logout" type="button" data-modal-hide="logout-modal"
                        class="w-full p-2 bg-primary text-white hover:bg-primaryHover transition-colors rounded-lg text-center">
                        Log out
                    </button>
                    <!--/ Logout Button -->

                    <!-- Cancel Button -->
                    <button type="button" data-modal-hide="logout-modal"
                        class="w-full p-2 hover:bg-gray-100 transition-colors rounded-lg border text-center dark:hover:text-black">
                        Cancel
                    </button>
                    <!--/ Cancel Button -->
                </div>
            </div>
            <!--/ Modal body -->
        </template>
    </PopupModelLayout>
</template>

<script setup>
import { QuestionMarkCircleIcon } from "@heroicons/vue/24/outline";
import { useRouter } from 'vue-router';

const router = useRouter();

/* Logout Method */
const logout = () => {
    router.push({ name: 'auth.login' });
}
</script>