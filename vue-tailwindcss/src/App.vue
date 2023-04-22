<script setup></script>

<template>
  <div class="container mx-auto">
    <div class="text-center bg-gray-100 p-5">
      <h1 class="text-4xl text-green-500">Vue Router Demo Practice</h1>
    </div>

    <ul class="flex justify-center my-5 text-2xl ">
      <li class="hover:text-green-500 hover:underline pr-5">
        <router-link to="/">Home</router-link>
      </li>
      <li  class="hover:text-green-500 hover:underline pr-5" >
        <router-link to="/about">About</router-link>
      </li>
      <li  class="hover:text-green-500 hover:underline pr-5">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li  class="hover:text-green-500 hover:underline">
        <router-link to="/members">Members</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<style scoped></style>
