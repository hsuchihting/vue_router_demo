<script>
export default {
  name: "addMember",
  setup() {
    return {
      data() {
        return {};
      },
    };
  },
  methods: {
    back() {
      console.log(this.$router.back());
      this.$router.back();
    },
    login() {
      alert("登入成功");
    },
  },
};
</script>

<template>
  <div>
    <button type="button" @click="back()" class="my-4">
      <i class="fas fa-arrow-left fa-xl text-gray-700"></i>
    </button>
    <h2 class="text-yellow-900 text-3xl font-bold">登入會員</h2>
    <form class="mt-10">
      <div class="grid gap-4 lg:grid-cols-3">
        <div class="w-full">
          <p class="text-yellow-700 mb-2 text-xl">帳號</p>
          <input
            type="text"
            class="w-full p-4 border border-yellow-600 outline-none rounded-lg"
          />
        </div>
      </div>
      <div class="grid gap-4 lg:grid-cols-3 mt-6">
        <div class="w-full">
          <p class="text-yellow-700 mb-2 text-xl">密碼</p>
          <input
            type="text"
            class="w-full p-4 border border-yellow-600 outline-none rounded-lg"
          />
        </div>
      </div>

      <router-link
        to="/members/addEmail"
        class="mt-2 block text-yellow-600 hover:underline"
      >
        註冊會員
        <i class="fas fa-chevron-right"></i>
      </router-link>

      <div class="text-left">
        <button
          type="button"
          class="mt-4 px-32 py-3 rounded-md bg-yellow-900 text-white"
          @click="login()"
        >
          登入
        </button>
      </div>
    </form>
  </div>
</template>
