<template>
  <div id="BannerMenu">
      <ul class="banMenItem" v-for="item in subjectList" :key="item.typeId">
          <li>{{item.typeName}}</li>
          <li v-for="im in item.child" :key="im.typeId">
             <a href="javascript:;"
             :class="im.typeIspor == 1 ? 'fontColor_ind' : 'fontColor_black'"
             >{{im.typeName}}</a>
            <span v-show="im.typeIshot">
                 <img src="../../assets/Imgs/hot-13.png" alt="">
                </span>
          </li>
      </ul>

  </div>
</template>

<script>
    import BannerMenu from './BannerMenu'
    export default BannerMenu
</script>

<style>
 @import url("./BannerMenu.css");
</style>