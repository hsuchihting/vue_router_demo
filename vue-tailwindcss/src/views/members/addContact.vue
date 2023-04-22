<script>
export default {
  name: "addContact",
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
      this.$router.push("/members/addPersonalInfo");
    },
  },
};
</script>

<template>
  <div>
    <button type="button" @click="back()" class="my-4">
      <i class="fas fa-arrow-left fa-xl text-gray-700"></i>
    </button>
    <h2>addContact component is working!</h2>

    <div class="text-right">
      <button
        type="button"
        class="mt-4 px-32 py-3 rounded-md bg-yellow-900 text-white"
        @click="toNextPage()"
      >
        下一步
      </button>
    </div>
  </div>
</template>
