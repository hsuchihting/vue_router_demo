<script>
export default {
  name: "addEmail",
  setup() {
    return {
      data() {
        return {};
      },
    };
  },
  methods: {
    back() {
      this.$router.push("/members");
    },
    toNextPage() {
      this.$router.push("/members/addContact");
    },
  },
};
</script>
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
          />
        </div>
      </div>

      <div class="w-full flex mt-2">
        <input type="checkbox" />
        <p class="text-yellow-700 ml-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          ea iusto fugit magnam mollitia sunt tempore aut soluta cumque itaque!
        </p>
      </div>

      <div class="w-full flex mt-2">
        <input type="checkbox" />
        <p class="text-yellow-700 ml-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          ea iusto fugit magnam mollitia sunt tempore aut soluta cumque itaque!
        </p>
      </div>

      <div class="text-right">
        <button
          type="button"
          class="mt-4 px-32 py-3 rounded-md bg-yellow-900 text-white"
          @click="toNextPage()"
        >
          下一步
        </button>
      </div>
    </form>
  </div>
</template>
