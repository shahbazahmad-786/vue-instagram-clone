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
                <h1 class="text-3xl">Sorry, this page isn't available.</h1>
                <p>The link you followed may be broken, or the page may have been removed.</p>
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