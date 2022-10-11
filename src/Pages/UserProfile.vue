<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();

const id = route?.params?.id;

console.log(id, "id");
</script>

<template>
  <h1>User Profile {{ id }}</h1>
</template>

<style scoped></style>
