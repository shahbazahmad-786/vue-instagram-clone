<template>
    <div>
        <div class="p-7 border border-gray-300">
            <!-- Logo -->
            <Logo class="w-36 mx-auto dark:invert" />
            <!--/ Logo -->

            <!-- Login Form -->
            <form @submit.prevent="login">
                <div class="mt-6 flex flex-col gap-y-2">
                    <!-- Username -->
                    <input type="text" placeholder="Username"
                        class="py-1 text-sm w-60 rounded-[2px] bg-gray-100 border-gray-300">
                    <!--/ Username -->

                    <!-- Password -->
                    <input type="password" placeholder="Password"
                        class="py-1 text-sm w-60 rounded-[2px] bg-gray-100 border-gray-300">
                    <!--/ Password -->
                </div>
                <!-- Submit -->
                <button type="submit"
                    class="mt-4 py-1 block w-full bg-primary text-white hover:bg-primaryHover rounded-md cursor-pointer">
                    Log in
                </button>
                <!--/ Submit -->
            </form>
            <!--/ Login Form -->

            <div class="mt-5 flex justify-center items-center">
                <span class="block  w-full h-[1px] bg-gray-400"></span>
                <span class="text-gray-500 mx-2">OR</span>
                <span class="block  w-full h-[1px] bg-gray-400"></span>
            </div>

            <!-- Forgot Password -->
            <div class="mt-3 flex justify-center items-center">
                <router-link to="" class="text-primary hover:text-primaryHover font-semibold text-sm">
                    Forgot Password?
                </router-link>
            </div>
            <!--/ Forgot Password -->
        </div>

        <!-- Another Route -->
        <div class="mt-2 py-4 border text-center border-gray-300 font-semibold">
            Don't have an account?
            <router-link :to="{ name: 'auth.register' }" class="text-primary hover:text-primaryHover transition-colors">
                Sign up
            </router-link>
        </div>
        <!--/ Another Route -->
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

/* Login Method */
const login = () => {
    alert('Login Successfully.');

    router.push({ name: 'app.index' });
};
</script>