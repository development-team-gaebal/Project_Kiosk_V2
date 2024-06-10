<script setup>
import { ref, onMounted } from 'vue';
import Video from "../components/video/video.vue";
import Category from "../components/category/Category.vue";
import MenuList from "../components/menu/MenuList.vue";

const selectedCategory = ref(0);
const updateCategory = (index) => {
  selectedCategory.value = index;
};
</script>

<template>
  <div class="PHY_header">
    <header>
      <div>
        <h1 class="custom-font"> Cafe.js </h1>
      </div> 
    </header>

    <div>
        <Video/>
    </div>
    <div>
      <Category @update-category="updateCategory"/>
    
      <MenuList :category="selectedCategory"/>
    </div>


  </div>
</template>


<style>


.PHY_header {
    /* !important 는 중요우선순위. 이게 달려있으면 순서상관없이 이게 실행됨. */
    text-align: center !important;
    width: 1080px;
    height: 1920px;
    margin: 0 auto;
  }

.category {
    height: 50px;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
  }

  @font-face{
  font-family:'DNFBitBitv2';
  font-style: normal; 
  font-weight:400; 
  src:url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf')format('opentype')
}
  
.custom-font{
  font-size: 5em;
  font-family: 'DNFBitBitv2', sans-serif;
  color: #FFB834;
  text-shadow: 5px 5px 0 #783E19; /* X, Y, blur-radius, color */   
  text-align: center;
      
}
  
body {
  background-color: #BA9470;
}

</style>