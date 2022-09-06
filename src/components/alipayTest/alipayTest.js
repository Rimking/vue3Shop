
import {reactive,toRef} from "vue"
import {queryOrederNumber} from "../../untils/service"
export default {
    name:"BannerMenu",
    setup() {
        let MenuList = reactive({
            subjectList:[],//分类数据
            jumpUrl:"",

        })
        //发送请求的方法
        function orderID() {
            let params = {orderId:"cy12344234545"}
            queryOrederNumber(params,res=>{
                console.log(res)
                MenuList.jumpUrl = res.data.url;
                // 拿到地址后进行本地跳转
                console.log(res.data.url)
                window.location.href = res.data.url;
            })
        }

        return {
            orderID,
            MenuList
        }
        
    }
}