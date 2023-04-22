<script>
export default {
  name: "addPersonalInfo",
  setup() {
    return {
      data() {
        return {};
      },
    };
  },
  methods: {
    back() {
      this.$router.push("/members/addEmail");
    },
    toNextPage() {
      alert("註冊成功");
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <div>
    <button type="button" @click="back()" class="my-4">
      <i class="fas fa-arrow-left fa-xl text-gray-700"></i>
    </button>

    <h2>addPersonalInfo component is working!</h2>
    <div class="text-right">
      <button
        type="button"
        class="mt-4 px-32 py-3 rounded-md bg-yellow-900 text-white"
        @click="toNextPage()"
      >
        完成註冊
      </button>
    </div>
  </div>
</template>
