<template>
    <div class="h-[80vh] p-3 overflow-y-scroll">
        <!-- Texts -->
        <div v-for="text in texts" :key="text.id">
            <!-- Date -->
            <div class="text-center my-3">
                <span class="text-xs font-semibold text-gray-500">
                    {{ text.date }}
                </span>
            </div>
            <!--/ Date -->

            <!-- Text-Field -->
            <div class="flex" :class="[text.sender ? 'justify-end' : 'justify-start']">
                <!-- People Profile-Image -->
                <Profile v-if="!text.sender" class="w-7 h-7 aspect-square rounded-full mr-2 self-end" />
                <!--/ People Profile-Image -->

                <!-- Text -->
                <div class="max-w-[80%] px-3 pt-[0.2rem] pb-[0.3rem] rounded-2xl"
                    :class="[text.sender ? 'bg-primary text-white' : 'bg-gray-100 text-black dark:bg-gray-900 dark:text-white']">
                    {{ text.text }}
                </div>
                <!--/ Text -->
            </div>
            <!--/ Text-Field -->
        </div>
        <!--/ Texts -->
    </div>
</template>

<script setup>
/* Fake Texts-Data */
const texts = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        date: '01/04/2023,19:54',
        user_id: 2,
        sender: false
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor ',
        date: '03/04/2023,19:54',
        user_id: 1,
        sender: true
    },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing consectetur',
        date: '10/04/2023,19:54',
        user_id: 2,
        sender: false
    },
    {
        id: 4,
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius perspiciatis officiis quas accusamus ducimus consequatur ratione, obcaecati at debitis cum, enim pariatur necessitatibus earum, expedita assumenda maxime. Et, nostrum ducimus!',
        date: '10/04/2023,19:54',
        user_id: 2,
        sender: false
    },
    {
        id: 5,
        text: '.',
        date: '10/04/2023,19:54',
        user_id: 1,
        sender: true
    },
    {
        id: 6,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing consectetur',
        date: '10/04/2023,19:54',
        user_id: 2,
        sender: false
    },
    {
        id: 7,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing',
        date: '01/04/2023,19:54',
        user_id: 1,
        sender: true
    },
];
</script>