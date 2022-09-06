<template>
<!-- banner下面的第一个模块 -->
    <div id="NormoalModule">
        <!-- title bar 部分 -->
        <div class="titleBar">
            <p class="tilTask">{{title}}</p>
            <ul>
                <li v-for="(item,im) in batList" :key="im"><a href="javascript:;">{{item}}</a></li>
            </ul>
        </div>
        <!-- 内容 部分 -->
        <div class="specConent">
            <!-- 左侧大图 -->
            <div class="typeDiagram">
                <a href="javascript:;"><img :src="leftMotoImg" alt=""></a>
            </div>
            <!-- 右侧滚动 -->
             <!-- 用户切换组内容 -->
             <div>
                 <!-- 中间的滚动 -->
                 <div class="norBanner">
                     <!-- 控制滚动区域的宽度 -->
                     <div class="swiptenWids" 
                     :style="{'marginLeft':marLeft+'px','transition':istransition}">
                        <div class="norSwitem" v-for=" (im,index) in itemPic" :key="index">
                         <div class="norBanitem" v-for="(ip,nus) in im.DList" :key="nus">
                          <a href="javascript:;">
                              <img :src="ip.url" alt="">
                          </a>
                          <p class="norBanms">{{ip.titles}}</p>
                          <p class="norBanMon"><span>￥</span>{{ip.money}}</p>
                        </div>
                       </div>
                       </div>
                     <div class="norBarpoint">
                         <ul>
                             <li :class="isActive == i ? 'active' : ''" v-for="i in nums" @click="handlePointCheck(i)"></li>
                         </ul>
                     </div>
                     <!-- /* 182   222 */ -->
                 </div>


                 <!-- 右边的热门推荐 -->
                 <div class="hotTems">
                     <div class="hotTielsCons">热门商品推荐</div>
                     <a href="javascript:;" class="aItemHot" v-for="(item,index) in HotDatList" :key="index" >
                        <div class="imgAim">
                            <img :src="item.url" alt="">
                        </div>
                        <div class="textHotSp">
                            <p class="text_Pcons">{{item.titles}}</p>
                            <p class="text_Money"><span>￥</span>{{item.money}}</p>
                        </div>
                     </a>
                 </div>



             </div>
         
           

        </div>
    </div>
</template>

<script>
    import NormoalModule from './NormoalModule'
    export default NormoalModule

</script>

<style scoped>
    @import url("./NormoalModule.css");
</style>