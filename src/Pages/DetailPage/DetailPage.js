import { reactive,created} from "vue"
import {useRoute} from "vue-router"
import {queryOrederSend} from "../../untils/service"

export default {
    name:"HomePage",
    setup() {

        let cons = reactive({

        }) 
        const route = useRoute();
        let params = {
            out_trade_no:route.query.out_trade_no,
            trade_no:route.query.trade_no,
        }
        queryOrederSend(params,res=>{
            console.log("验证的值",res)
        })
        

       




        
    }
}