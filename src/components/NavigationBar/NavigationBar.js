// 引入ui模板的图标
import {
  Search,ArrowDown
} from '@element-plus/icons-vue'

import {ref,reactive,toRef,toRefs} from "vue"
export default { 
    name: 'NavigationBar',
    components: {
      Search,ArrowDown
    },
    setup() {
      let complete =reactive({
        input:"",
        isShowMl:false,
        fcList:[
          {titls:"消息",url:require("../../assets/Imgs/news.png")},
          {titls:"收藏",url:require("../../assets/Imgs/sc.png")},
          {titls:"购物车",url:require("../../assets/Imgs/shopCar.png")},
          {titls:"二维码",url:require("../../assets/Imgs/ewm.png")}
        ],
        themeList:["上衣","裙装","裤子","女鞋","美妆","包包",
        "配饰","内衣","男友","母婴","家居","食品"
         ]  ,
        hotPpList:["SICILY西西里","Aokang/奥康","美康粉黛",
        "MONA","三宅一生","ZARA","塞斯贝拉","Champion","ORIGINS/悦木之源","IKEA"
          ],
        })

        //鼠标移入目录和移出目录
        function ShowMlBool() {
          return  complete.isShowMl = true;
        }
        function NotShowMlBool() {
          return  complete.isShowMl = false;
        }

      return {
        complete,
        ShowMlBool,//鼠标移入
        NotShowMlBool,//鼠标移除
        SearchInput:toRef(complete,"input"), 
        themeList:toRef(complete,"themeList"),
        hotPpList:toRef(complete,"hotPpList"),
      }
  
    }
  }