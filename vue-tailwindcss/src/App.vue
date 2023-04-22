<script setup></script>

<template>
  <div class="text-center bg-gray-100 p-5">
    <h1 class="text-4xl text-green-500">Vue Router Demo Practice</h1>
  </div>

  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <router-link to="/contact">Contact</router-link>
    </li>
  </ul>

  <router-view></router-view>
</template>

<style scoped></style>
