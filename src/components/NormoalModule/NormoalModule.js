import {ArrowLeftBold,ArrowRightBold} from "@element-plus/icons-vue"
import {reactive,toRef,provide,inject,Ref} from "vue"
export default {
    name:"NormoalModule",
    props:["marLeft","istransition","HotDatList","itemPic",
    "itemData","leftMotoImg","title","batList","nums"],
    comments:{ArrowLeftBold,ArrowRightBold},
    setup(props) {
        let itemData = props.itemData;
        let nowList = reactive({
            isActive:1,
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
                    itemData.istransition = "all 0s"
                }
            }else{
                //false就是减少一个 950 
                if(itemData.marLeft !== 0){
                    itemData.marLeft += 950;
                    itemData.istransition = "all 0.5s"
                }else{
                    itemData.marLeft = -1900;
                    itemData.istransition = "all 0s"
                }
            }
        }

        // 点击小点点
        function handlePointCheck(nums){
            switch (nums) {
                case 1:
                    console.log(nums)
                    itemData.marLeft = 0;
                    nowList.isActive = 1;
                    break;
                case 2:
                    itemData.marLeft = -638;
                    nowList.isActive = 2;
                    break;
                case 3:
                    itemData.marLeft = -1280;
                    nowList.isActive = 3;
                    break;
            }
        }

        return {
            itemData,
            isActive:toRef(nowList,"isActive"),
            handleBtn,//向左向右
            handlePointCheck,//小点点
           
            
        }
        
    }
}