<script lang="ts" setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const data = defineProps({
  data: Object,
});

function redirect(id: string) {
  router.push(`/user/${id}`);
}
</script>

<template>
  <div class="card" v-for="user in data.data" v-on:click="redirect(user.id)">
    <div class="header">
      <div class="tttl">{{ user?.name }}</div>
      <div class="tttl">{{ user?.username }}</div>
    </div>
    <div class="bdy">
      <div class="txt">Email: {{ user?.email }}</div>
      <div class="txt">Phone: {{ user?.phone }}</div>
      <div class="txt">Website: {{ user?.website }}</div>
      <div class="nested">
        <div class="txt">Address:</div>
        <div class="txt nest">Street: {{ user.address?.street }}</div>
        <div class="txt nest">Suite: {{ user.address?.suite }}</div>
        <div class="txt nest">City: {{ user.address?.city }}</div>
        <div class="txt nest">ZipCode: {{ user.address?.zipcode }}</div>
        <div class="txt nest">Geo Lat: {{ user.address?.geo.lat }}</div>
        <div class="txt nest">Geo Lng: {{ user.address?.geo.lng }}</div>
      </div>
      <div class="nested">
        <div class="txt">Company:</div>
        <div class="txt nest">Name: {{ user.company?.name }}</div>
        <div class="txt nest">CatchPharse: {{ user.company?.catchPhrase }}</div>
        <div class="txt nest">BS: {{ user.company?.bs }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 350px;
  margin: 1rem;
  border: 2px solid #a2d2ff;
  border-radius: 5px;
  background-color: #bde0fe;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
}

.bdy {
  padding: 0.5rem;
}
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #1b263b;
  background-color: #fdfcdc;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: 700;
}

.nested,
.nest {
  padding: 0 0.5rem;
}

.txt {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0.3rem;
  color: #353535;
}
</style>
