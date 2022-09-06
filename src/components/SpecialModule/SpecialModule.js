import {ArrowLeftBold,ArrowRightBold} from "@element-plus/icons-vue"
import {reactive,toRef} from "vue"
export default {
    name:"SpecialModule",
    comments:{ArrowLeftBold,ArrowRightBold},
    setup() {
        let itemData =reactive({
            marLeft:0,
            istransition:"all 0.5s",
            itemPic:[
                {title:"冬季呢子大衣女中长款韩版宽松显瘦开叉加厚气质女毛呢外套",
                url: require("../../assets/Imgs/item/item1.webp"),money:"189.9"},
                {title:"2021年新款针织连衣裙女长袖秋装气质内搭显瘦裙子",
                url:require("../../assets/Imgs/item/item2.webp"),money:"79"},
                {title:"春夏新款韩版显瘦V领气质单排扣收腰小黑裙中长款百搭连衣裙女",
                url:require("../../assets/Imgs/item/item3.webp"),money:"75.5"},
                {title:"韩版小个子加厚短人字纹呢子大衣针织打底衫黑色牛仔裤三件套套装",
                url:require("../../assets/Imgs/item/item4.webp"),money:"52.5"},
                {title:"风衣女中长款2021秋装新款韩版气质流行过膝春秋英伦大衣外套",
                url:require("../../assets/Imgs/item/item5.webp"),money:"198"},
                {title:"嘻哈风破洞套头卫衣韩版宽松原宿学生bf字母人像印花圆领帽衫",
                url:require("../../assets/Imgs/item/item6.webp"),money:"49.9"},
                {title:"牛仔连体裤女2021秋季蓝色工装港风帅气时尚潮流显瘦裤子",
                url:require("../../assets/Imgs/item/item7.webp"),money:"168"},
                {title:"蕾丝花边衬衣秋季洋气小衫荷叶边设计感波点上衣+修身牛仔裤套装",
                url:require("../../assets/Imgs/item/item8.webp"),money:"98"},
                {title:"韩都衣舍2022春装新款韩版女A字抽绳褶皱中长半身裙",
                url:require("../../assets/Imgs/item/item9.webp"),money:"168"},
                {title:"韩都衣舍2022春装新款韩版女装宽松小个子拼接中长款风衣",
                url:require("../../assets/Imgs/item/item10.webp"),money:"135 "},
                {title:"春季新款韩版V领长袖波点衬衫女高腰显瘦修身九分牛仔裤时尚套装",
                url:require("../../assets/Imgs/item/item11.webp"),money:"98"},
                {title:"卡其风衣女2021新款时尚流行中长款宽松百搭休闲薄款外套",
                url:require("../../assets/Imgs/item/item12.webp"),money:"168"},
                

            ],
            secDatList:[
                {tlone:"心机衬衫",tltwo:"秋季衬衫心机穿搭",color:"#EF479A",url:require("../../assets/Imgs/item/model1.webp")},
                {tlone:"轻薄针织",tltwo:"早晚降温必备单品",color:"#7297F7",url:require("../../assets/Imgs/item/model2.webp")},
                {tlone:"韩版卫衣",tltwo:"百搭必备",color:"#FF7851",url:require("../../assets/Imgs/item/model3.webp")},
                {tlone:"牛仔裤",tltwo:"穿出你的大长腿",color:"#FF6554",url:require("../../assets/Imgs/item/model4.webp")}
            ]
        })
        // 点击向右，向左
        function handleBtn(bool) {
            if(bool){
                // true就是增加一个 950 
                if(itemData.marLeft !== -1900){
                    itemData.marLeft -= 950;
                    itemData.istransition = "all 0.5s"
                }else{
                    itemData.marLeft = 0;
                    itemData.istransition = "all 1s"
                }
            }else{
                //false就是减少一个 950 
                if(itemData.marLeft !== 0){
                    itemData.marLeft += 950;
                    itemData.istransition = "all 0.5s"
                }else{
                    itemData.marLeft = -1900;
                    itemData.istransition = "all 1s"
                }
            }
        }

        return {
            itemData,
            handleBtn,
            marLeft:toRef(itemData,"marLeft"),
            istransition:toRef(itemData,"istransition"),
            itemPic:toRef(itemData,"itemPic"),
            secDatList:toRef(itemData,"secDatList")
        }
        
    }
}