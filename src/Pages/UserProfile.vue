<script setup lang="ts">
import { ref, unref, watchEffect } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const id = route?.params?.id;
let data: Ref<{
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
} | null> = ref(null);

watchEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((res) => {
      data.value = unref(res);
    });
});
</script>

<template>
  <div class="outerDiv">
    <div class="header">USER DETAILS:</div>
    <div class="bdy">
      <div class="txt">Email: {{ data?.email }}</div>
      <div class="txt">Phone: {{ data?.phone }}</div>
      <div class="txt">Website: {{ data?.website }}</div>
      <div class="nested">
        <div class="txt">Address:</div>
        <div class="txt nest">Street: {{ data?.address?.street }}</div>
        <div class="txt nest">Suite: {{ data?.address?.suite }}</div>
        <div class="txt nest">City: {{ data?.address?.city }}</div>
        <div class="txt nest">ZipCode: {{ data?.address?.zipcode }}</div>
        <div class="txt nest">Geo Lat: {{ data?.address?.geo.lat }}</div>
        <div class="txt nest">Geo Lng: {{ data?.address?.geo.lng }}</div>
      </div>
      <div class="nested">
        <div class="txt">Company:</div>
        <div class="txt nest">Name: {{ data?.company?.name }}</div>
        <div class="txt nest">
          CatchPharse: {{ data?.company?.catchPhrase }}
        </div>
        <div class="txt nest">BS: {{ data?.company?.bs }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outerDiv {
  width: 80%;
  margin: 1rem auto;
  height: auto;
  border-radius: 5px;
  border: 2px solid #ef476f;
}

.header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f72585;
  border-radius: 5px 5px 0 0;
}

.bdy {
  height: auto;
}

.txt {
  margin: 0.5rem;
  padding: 1rem;
  color: #f6fff8;
  font-size: 1.3rem;
  font-weight: 700;
  background-color: #e07a5f;
  border-radius: 10px;
}

.nested,
.nest {
  padding: 0 0.5rem;
}
</style>
