<script>
export default {
  name: "home",

  data() {
    return {
      menu: [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About", path: "/about" },
        { name: "Cart", path: "/contact" },
      ],
    };
  },
};
</script>

<template>
  <div class="bg-blue-950">
    <div class="container p-10">
      <h2 class="text-5xl text-yellow-300 text-center font-bold">FLY WITH STARLUX</h2>
      <ul class="flex items-center justify-end mt-5">
        <li
          class="px-4 py-4 text-yellow-400 hover:underline hover:cursor-pointer hover:bg-blue-700"
          v-for="item in menu"
          :key="item.name"
        >
          <a :href="item.path">
            {{ item.name }}
          </a>
        </li>
      </ul>
      <img src="../assets/STARLUX-A350-XWB1_tcm5-2925.jpeg" alt="starlux" class=" w-full">
    </div>
  </div>
</template>
