<template>
    <div>
        <button type="button" @click="back()" class="my-4">
        <i class="fas fa-arrow-left fa-xl text-gray-700"></i>
        </button>
        <h2 class="text-yellow-900 text-3xl font-bold">輸入 Email</h2>
        <form class="mt-10">
        <div class="grid gap-4 lg:grid-cols-3">
            <div class="w-full">
            <p class="text-yellow-700 mb-2 text-xl">您的電子信箱</p>
            <input
                type="text"
                class="w-full p-4 border border-yellow-600 outline-none rounded-lg"
                v-model="email"
            />
            </div>
        </div>
    
        <div class="w-full flex mt-2">
            <input type="checkbox" v-model="isAgree" />
            <p class="text-yellow-700 ml-4">agree to the terms and conditions</p>
        </div>
    
        <div class="w-full flex mt-2">
            <input type="checkbox" v-model="isObeyRules" />
            <p class="text-yellow-700 ml-4">
            I will obey the rules when I use this website
            </p>
        </div>
    
        <div class="text-right">
            <button
            type="button"
            class="px-4 py-2 bg-yellow-700 text-white rounded-lg mt-4"
            @click="toNextPage()"
            :disabled="!isAgree || !isObeyRules"
            >
            下一步
            </button>
        </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>