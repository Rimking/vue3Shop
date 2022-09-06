<template>
  <div class="HomePage">
    <!-- <div class="tts"></div>  -->
      <!-- 顶部搜索，logo部分， -->
      <!-- <div class="topBar">
          <NavigationBar /> 
      </div> -->
      <!-- 限时 -->
      <div class="boder_bot">
      <div class="tabSec">
        <div class="tabSec_left">
          <i><img src="../../assets/Imgs/hb-white.png" alt=""></i>
          主题市场
          <!-- 目录部分，定位在这里 -->
          <div class="BannerMenu">
              <BannerMenu/>
          </div>
        </div> 
          <div class="tabSec_right">
            <a href="javascript:;">限时快抢</a>  
          </div> 
        </div> 
      </div>
      <!-- 首页大图部分 -->
      <div class="showBanner">
        <masBanner/>
      </div>
      <!-- 第一个特殊的模块 -->
      <div class="SpeModule">
          <SpecialModule/>
      </div>
      <!-- 女装&包包  基本模块 -->
      <div class="NomModule">
          <NormoalModule :title="FmodelTils" :batList="FbatList" :nums="Fnums"
           :leftMotoImg="FleftMotoImg" :itemData="HomaObjectF" 
          :marLeft="FmarLeft" :istransition="Fistransition" :HotDatList="FHotDatList"
          :itemPic="FitemPic" />
      </div>
      <!-- 模块二 -->
       <div class="NomModule">
          <NormoalModule :title="TmodelTils" :batList="TbatList" :nums="Tnums"
          :leftMotoImg="TleftMotoImg" :itemData="HomaObjectT" 
          :marLeft="TmarLeft" :istransition="Tistransition" :HotDatList="THotDatList"
          :itemPic="TitemPic" />
      </div>
      <!-- foot -->
      <!-- <div class="footBar">
        <FootModel/>
      </div> -->
  </div>
</template>

<script>
  import NavigationBar from '../../components/NavigationBar/NavigationBar.vue'
  import masBanner from '../../components/masBanner/masBanner.vue'
  import BannerMenu from '../../components/BannerMenu/BannerMenu.vue'
  import SpecialModule from '../../components/SpecialModule/SpecialModule.vue'
  import NormoalModule from '../../components/NormoalModule/NormoalModule.vue'
  import {toRef,reactive,provide} from 'vue'
export default {
    name:"HomePage",
    components:{NavigationBar,masBanner,BannerMenu,SpecialModule,NormoalModule},
    setup() {
      // 普通模块一
      let HomaObjectF =reactive({
        // 普通模块一:
            leftMotoImg:require("../../assets/Imgs/norMolDT.webp"),
            marLeft:0,
            nums:3,//有多少个点点
            batList:["单鞋","小白鞋","运动鞋","帆布鞋","双肩包","拉杆箱"],
            modelTils:"女鞋&包包",
            istransition:"all 0.5s",
            itemPic:[
                {DList:[
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_1_1.webp"),titles:"不系带的小白鞋女夏季新款网面透气珍珠懒人鞋彩虹果冻底鞋",money:"79.6"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_1_2.webp"),titles:"韩国专柜蝴蝶结居家鞋夏韩国牛筋平底绸缎一字室内地板防滑女拖鞋",money:"56.0"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_1_3.webp"),titles:"网红凉拖女夏外穿2020新款时尚百搭蝴蝶结春拖鞋女平底一字沙滩鞋",money:"20.9"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_1_4.webp"),titles:"可爱包包2020新款潮日系鸭屁屁帆布包软妹少女学生百搭手机包",money:"52.1"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_1_5.webp"),titles:"UR腋下包包2021新款潮鳄鱼纹法棍包法国小众单肩青蛙包女包",money:"158"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_1_6.webp"),titles:"可充电行李箱拉杆箱旅行箱万向轮女网红大学生韩版个性密码箱子潮",money:"128"},]
                },
                {DList:[
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_2_1.webp"),titles:"贝壳头小白鞋女ins韩版夏凉百搭ulzzang潮板鞋子",money:"122"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_2_2.webp"),titles:"夏季新款韩版时尚拼色水晶跟高跟绒面透明拼接镂空一字鱼嘴女拖鞋",money:"115"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_2_3.webp"),titles:"八爪鱼椰子鞋女秋季透气百搭ins2021新款爆款女鞋飞织老爹鞋",money:"128"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_2_4.webp"),titles:"UR复古洋气千鸟格纹单肩小方包包女2021新款网红百搭斜挎包",money:"219"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_2_5.webp"),titles:"今年防水系列大容量书包女韩版原宿大学生背包高中ins风双肩包",money:"82.66"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_2_6.webp"),titles:"可爱网红小熊斜挎包包女2020新款夏韩国日系原宿软妹帆布胸包",money:"52.16"},]
                },
                {DList:[
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_3_1.webp"),titles:"老北京布鞋女鞋单鞋浅口百搭尖头低跟平跟黑色工作鞋平底鞋女瓢鞋",money:"75.07"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_3_2.webp"),titles:"蓓尔高帮二棉鞋女款加绒防寒ins冬季新款学生保暖外穿休闲板鞋",money:"89"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_3_3.webp"),titles:"超火老爹鞋女春秋新款春款网红厚底休闲小白运动休闲鞋ins潮夏",money:"70.84"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_3_4.webp"),titles:"牛仔布包包女2020新款日系可爱小熊单肩胸包潮ins百搭卡通斜挎包",money:"18.9"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_3_5.webp"),titles:"简佰格流行小包包女包新款2021韩版链条格子单肩斜挎包女百搭",money:"269.5"},
                    {url:require("../../assets/Imgs/normItem/NorOne/norBan_3_6.webp"),titles:"UR包包女2021新款潮蝴蝶结褶皱云朵包单肩手提斜跨腋下包",money:"218"},]
                },
            
            ],
            HotDatList:[
                {money:"69.90",titles:"蓓尔明星同款春秋季韩版百搭小白鞋平底白色系带学生板鞋女休闲鞋",url:require("../../assets/Imgs/normItem/NorOne/hottj1.webp")},
                {money:"89.00",titles:"2018新款马丁靴女加绒英伦风学生韩版百搭ins厚底女靴春秋季chic短靴子冬",url:require("../../assets/Imgs/normItem/NorOne/hottj2.webp")},
                {money:"55.72",titles:"梵花不语帆布包单肩文艺百搭小布包迷你手提斜挎包袋女包包学院风",url:require("../../assets/Imgs/normItem/NorOne/hottj3.webp")},
                {money:"85.00",titles:"ins包包女2018新款韩版简约百搭大容量chic水桶包港风单肩斜挎包10251820",url:require("../../assets/Imgs/normItem/NorOne/hottj4.webp")}
            ]
      })
      // provide("itemData",HomaObject)
      // 普通模块二
      let HomaObjectT =reactive({
           marLeft:0,
           nums:2,//有多少个点点
           modelTils:"男装&男鞋",
           batList:["当季新品","潮男T恤","百搭休闲裤","潮鞋"],
           leftMotoImg:require("../../assets/Imgs/norMolDF.webp"),
            istransition:"all 0.5s",
            itemPic:[
                {DList:[
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_1_1.webp"),titles:"加绒卫衣男纯色羊羔绒加厚保暖秋冬款套头连帽宽松大码冬装外套潮",money:"69"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_1_2.webp"),titles:"夏季情侣装新款纯棉宽松短袖T恤男女式字母印花半袖tee体恤衫",money:"87"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_1_3.webp"),titles:"纯棉休闲迷彩衣服polo衫男夏装潮流青年男士短袖t恤有领上衣",money:"66.5"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_1_4.webp"),titles:"（弹力商务裤）秋季男士商务时尚百搭直筒西装裤",money:"59.9"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_1_5.webp"),titles:"情侣装卫衣男女士韩版春秋季宽松上衣新款百搭圆领潮",money:"210"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_1_6.webp"),titles:"2021年新款宽松长袖t恤韩版潮流时尚休闲卫衣秋季打底上衣男",money:"119"},]
                },
                {DList:[
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_2_1.webp"),titles:"两件套装男春秋冬季新款潮流青年学生大码加绒加厚外套休闲裤搭配",money:"88.8"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_2_2.webp"),titles:"短袖男潮牌t恤韩版潮流ins港风男装半袖夏季宽松百搭衣服五分",money:"67"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_2_3.webp"),titles:"纯棉休闲迷彩衣服polo衫男夏装潮流青年男士短袖t恤有领上衣",money:"99.9"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_2_4.webp"),titles:"夏季新款男士短袖t恤ins韩版半袖上衣服打底衫男圆领T恤衫潮",money:"132"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_2_5.webp"),titles:"HLA/海澜之家六维弹力短袖T恤22夏新款图案印花圆领短t男",money:"77.66"},
                    {url:require("../../assets/Imgs/normItem/NorTwo/norBan_2_6.webp"),titles:"港风2021秋装新款皮补丁拼接灯芯绒夹克男潮流外套韩版男茄克",money:"66.16"},]
                },
            
            ],
            HotDatList:[
                {money:"39.90",titles:"木可男装 加绒卫衣男2019春季新款男士连帽上衣韩版潮流百搭套头帽衫青少年加厚外套",url:require("../../assets/Imgs/normItem/NorTwo/hottj1.webp")},
                {money:"126.00",titles:"连帽卫衣男韩版修身百搭长袖t恤男卫衣时尚外套男卫衣春装新款迷彩男士卫衣春季帅气百搭上衣男潮",url:require("../../assets/Imgs/normItem/NorTwo/hottj2.webp")},
                {money:"69.00",titles:"JVAV秋冬季韩风新款2018男士港仔文艺男工装韩风chic休闲夹克男宽松韩版青少年外套",url:require("../../assets/Imgs/normItem/NorTwo/hottj3.webp")},
                {money:"99.00",titles:"夏季男士短袖t恤潮流日系简约字母刺绣T恤男生韩版宽松百搭体恤",url:require("../../assets/Imgs/normItem/NorTwo/hottj4.webp")}
            ]
      })

      
      return {
        // 普通模块一
        HomaObjectF,
        FleftMotoImg:toRef(HomaObjectF,"leftMotoImg"),//左侧图片
        FmarLeft:toRef(HomaObjectF,"marLeft"),
        Fistransition:toRef(HomaObjectF,"istransition"),
        FHotDatList:toRef(HomaObjectF,"HotDatList"),//热门内容
        FitemPic:toRef(HomaObjectF,"itemPic"),//中间baner内容
        FmodelTils:toRef(HomaObjectF,"modelTils"),//模块标题
        FbatList:toRef(HomaObjectF,'batList'),//标题tabbar
        Fnums:toRef(HomaObjectF,'nums'),//标题tabbar
      // 普通模块二
        HomaObjectT,
        TleftMotoImg:toRef(HomaObjectT,"leftMotoImg"),
        TmarLeft:toRef(HomaObjectT,"marLeft"),
        Tistransition:toRef(HomaObjectT,"istransition"),
        THotDatList:toRef(HomaObjectT,"HotDatList"),//热门内容
        TitemPic:toRef(HomaObjectT,"itemPic"),//中间baner内容
        TmodelTils:toRef(HomaObjectT,"modelTils"),//模块标题
        TbatList:toRef(HomaObjectT,'batList'),//标题tabbar
        Tnums:toRef(HomaObjectT,'nums'),//标题tabbar
      }

    }
}

</script>

<style>
  @import url("./HomePage.css");
</style>