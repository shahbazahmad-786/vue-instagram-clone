<template>
    <div class="w-full h-screen flex justify-center items-center bg-gray-100">
        <div>
            <!-- Logo -->
            <router-link :to="{ name: 'app.index' }">
                <Logo class="w-36 mx-auto" />
            </router-link>
            <!--/ Logo -->

            <!-- Designation -->
            <div class="text-center space-y-5 mt-5">
                <h1 class="text-3xl">Social networking service</h1>
                <p class="w-[70%] mx-auto">
                    Instagram is a photo and video sharing social networking service owned by American company Meta
                    Platforms. The app allows users to upload media that can be edited with filters, be organized by
                    hashtags, and be associated with a location — via geographical tagging.
                </p>
                <div>
                    <router-link :to="{ name: 'app.index' }"
                        class="text-center bg-primary hover:bg-primaryHover py-1 px-3 rounded-md text-white transition-colors">
                        Go back to instagram
                    </router-link>
                </div>
            </div>
            <!--/ Designation -->

            <!-- Footer Plugin -->
            <Footer class="mt-10 mx-auto space-x-5 text-center sm:block hidden" />
            <!--/ Footer Plugin -->
        </div>
    </div>
</template>