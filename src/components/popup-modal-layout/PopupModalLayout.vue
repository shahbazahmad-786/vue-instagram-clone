<template>
    <div :id="modelStatus" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full pt-4 px-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative max-h-full" :class="[modelWidth]">

            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" :class="[bodyStyle]">

                <!-- Modal header -->
                <div v-if="!headerStatus"
                    class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">

                    <!-- Model Heading -->
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        <slot name="heading" />
                    </h3>
                    <!--/ Model Heading -->

                    <!-- Close Btn -->
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        :data-modal-hide="modelStatus">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    <!--/ Close Btn -->
                </div>
                <!--/ Modal header -->

                <!-- Form Component -->
                <slot name="body" />
                <!--/ Form Component -->

            </div>
            <!--/ Modal content -->
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    /* initFlowbite Model Library */
    initFlowbite();
});

const props = defineProps(['modelStatus', 'modelWidth', 'bodyStyle', 'headerStatus']);
</script>