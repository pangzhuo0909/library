<script setup>
import TabItem from "./components/TabItem.vue";
import TabBar from "./components/TabBar.vue";
</script>

<template>
  <div>
    <router-view></router-view>
    <TabBar>
      <!--自定义path属性，用于传值.和TabItem.vue中props对应-->
      <TabItem path="/home" textColor="red">
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/index.svg" />
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/index-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>首页</div>
        </template>
      </TabItem>
      <TabItem path="/course" textColor="brown">
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/course.svg" />
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/course-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>课程</div>
        </template>
      </TabItem>
      <TabItem path="/friends" textColor="green">
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/friends.svg" />
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/friends-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>朋友圈</div>
        </template>
      </TabItem>
      <TabItem path="/study" textColor="darkblue">
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/study.svg" />
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/study-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>学习</div>
        </template>
      </TabItem>
      <TabItem path="/my" textColor="blue">
        <template v-slot:item-img>
          <img src="./assets/imgs/tabBar/my.svg" />
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/imgs/tabBar/my-selected.svg" />
        </template>
        <template v-slot:item-title>
          <div>我的</div>
        </template>
      </TabItem>
    </TabBar>
  </div>
</template>

<style>
/*底部bar样式 */
</style>  
