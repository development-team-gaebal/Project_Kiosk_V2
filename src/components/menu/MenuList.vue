<script setup>
import { reactive } from "vue";
import { scholar } from "../menu/MenuData.js";

const MenuData = reactive(scholar);
</script>

<template>
  <div class="MenuList">
    <div v-for="item in MenuData" :key="item.id" class="menu-item">
      <img class="image" :src="item.img" :alt="item.name" />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.MenuList {
  display: flex;
  flex-wrap: wrap;
}

.menu-item {
  margin: 10px;
  text-align: center;
}

.image {
  width: 200px;
  height: auto;
}
</style>