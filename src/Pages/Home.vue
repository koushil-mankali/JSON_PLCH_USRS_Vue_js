<script setup lang="ts">
import { reactive, watchEffect, unref, ref } from "vue";
import type { ReactiveEffect } from "vue";

import UserCard from "../components/UserCard.vue";

// const data = reactive([
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
// ]);

let data = ref([]);

watchEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res, 'res')
      data.value = unref(res);
    });
});

console.log(data, 'data')
</script>

<template>
  <!-- {{data[0]}} -->
  <Layout>
    <div class="cards">
      <UserCard :data="data" />
    </div>
  </Layout>
</template>

<style scoped>
.cards {
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
