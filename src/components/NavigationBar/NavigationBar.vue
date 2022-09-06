<template>
  <div id="NavigationBar">
    <!-- logo and 目录 -->
    <div class="lgAndml">
      <div class="logo">
        <a href="javascript:;">
          <img src="../../assets/Imgs/mgjlogo.png" alt="" />
        </a>
      </div>
      <div class="ml" @mouseover="ShowMlBool"
      @mouseleave="NotShowMlBool"
      >
        <i><img src="../../assets/Imgs/hg.png" alt="" /></i>
        目录
        <!-- 鼠标悬浮在目录这个区域时 -->
        <div class="mlItems" v-show="complete.isShowMl">
          <div class="themeMarket">
            <!-- themeList -->
            <p>主题市场</p>
            <ul class="themeUl">
              <li v-for="(im,ins) in themeList" :key="ins">
                {{im}}
              </li>
            </ul>
          </div>
          <!-- 热门品牌  -->
           <div class="themeMarket">
            <!-- themeList -->
            <p>热门品牌</p>
            <ul class="themeUl">
              <li v-for="(im,ins) in hotPpList" :key="ins">
                {{im}}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <!-- 左边搜索。 -->
    <div class="topLeft">
      <!-- input -->
      
      <div class="topIps">
        <div class="searchInpus">
          <input
            class="searchInpus"
            v-model="SearchInput"
            placeholder="Rimking"
          />
        </div>
        <el-button class="searchBtns">
          <el-icon :size="24" color="white">
            <Search />
          </el-icon>
        </el-button>
      </div>
      <!-- 小的模块 -->
      <div class="smItem">
        <ul>
          <li v-for="(im, index) in complete.fcList" :key="index">
            <i>
              <img :src="im.url" alt="" />
            </i>
            {{ im.titls }}
          </li>
        </ul>
        <!-- //个人信息部分 -->
        <div class="selfNews">
          <!-- 未登录 -->
          <div class="notLogin">
                       <div class="wLogin">
                           <img src="../../assets/Imgs/mgj.png" alt="">
                       </div>
                       <div class="wz">登录</div>
                  </div>
          <!-- 已登录 -->
          <!-- <div class="notLogin">
            <div class="wLogin">
              <img src="../../assets/Imgs/mgj.png" alt="" />
            </div>
            <div class="userNmae">大树202</div>
            <el-icon :size="12" color="black">
              <ArrowDown />
            </el-icon>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavigationBar from "./NavigationBar.js";
export default NavigationBar;
</script>

<style>
@import url("./NavigationBar.css");
</style>
