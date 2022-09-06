<template>
<!-- banner下面的第一个模块 -->
    <div id="SpecialModule">
        <!-- title bar 部分 -->
        <div class="titleBar">
            <p class="tilTask">女装</p>
            <ul>
                <li><a href="javascript:;">时尚套装</a></li>
                <li><a href="javascript:;">长袖衬衫</a></li>
                <li><a href="javascript:;">牛仔外套</a></li>
                <li><a href="javascript:;">卫衣</a></li>
                <li><a href="javascript:;">牛仔裤</a></li>
                <li><a href="javascript:;">休闲裤</a></li>
            </ul>
        </div>
        <!-- 内容 部分 -->
        <div class="specConent">
            <!-- 左侧大图 -->
            <div class="typeDiagram">
                <a href="javascript:;"><img src="../../assets/Imgs/speMolDT.webp" alt=""></a>
            </div>
            <!-- 右侧滚动 -->
             <div> <!-- 用户切换组内容 -->
            <div class="rigScend">
                 <div class="itemLeft" @click="handleBtn(false)"><img src="../../assets/leftJt.png" alt=""></div>
                 <div class="itemRight"  @click="handleBtn(true)"><img src="../../assets/rightJt.png" alt=""></div>
              <div class="itemsBody" :style="{'marginLeft':marLeft+'px','transition':istransition}">
                <div class="switm_fl" v-for="(item,ins) in itemPic" :key="ins">
                     <a href="javascript:;"><img :src="item.url" alt=""></a>
                     <p class="tradeName">{{item.title}}</p>
                     <p class="tradePrace"><span>￥</span>{{item.money}}</p>
                </div>
              </div>
            </div>
           <!-- 滚动下面 -->
            <div class="thrbar">
                 <!-- 滚动下第一个 -->
                <ul class="fitst">
                    <li><a href="javascript:;"> <img src="../../assets/Imgs/item/btPic1.webp" alt=""></a></li>
                    <li><a href="javascript:;"> <img src="../../assets/Imgs/item/btPic2.webp" alt=""></a></li>
                    <li><a href="javascript:;"> <img src="../../assets/Imgs/item/btPic3.webp" alt=""></a></li>
                </ul>
                <!-- 第二个 -->
                <ul class="seclod">
                    <li v-for="(dm,ind) in secDatList" :key="ind">
                        <div class="desModel">
                            <div class="dSecTitle" :style="{'color':dm.color}">{{dm.tlone}}</div>
                             <div class="dFuTitle">{{dm.tltwo}}</div>
                        </div>
                        <div class="delImgMod">
                            <a href="javascript:;">
                                <img :src="dm.url" alt="">
                            </a>
                        </div>
                    </li>
                    
                </ul>
            </div>
         </div>
        </div>
    </div>
</template>

<script>
    import SpecialModule from './SpecialModule'
    export default SpecialModule

</script>

<style scoped>
    @import url("./SpecialModule.css");
</style>