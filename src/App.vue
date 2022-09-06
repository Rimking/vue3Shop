<template>
<div id="app">
  <div class="tts"></div> 
      <!-- 顶部搜索，logo部分， -->
      <div class="topBar">
          <NavigationBar /> 
      </div>  
  <keep-alive>
     <router-view></router-view>
  </keep-alive>
  <!-- 底部 -->
  <div class="footBar">
    <FootModel/>
  </div>
  </div>
</template>
<script>
import NavigationBar from './components/NavigationBar/NavigationBar.vue'
import HomePage from './Pages/HomePage/HomePage.vue'
import FootModel from './components/footModel/footModel.vue'
export default { 
  name: 'App',
  components: {
    HomePage,NavigationBar,FootModel
  },
  setup() {
    return {}

  }
}
</script>

<style>
 #app{
   margin: 0;
   padding: 0;
   background-color: #F5F5F5;
 }
 .tts{
    width:100%;
    height:30px;
    background-color: #CCEAE2;
}
/* 顶部 */
.topBar{
    width: 100%;
    height: 100px;
    background-color: white;
}
/* 底部 */
.footBar{
    width: 100%;
    height: 400px;
    background-color: red;
    margin-top: 50px;
}
</style>
