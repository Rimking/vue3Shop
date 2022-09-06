
import {reactive,toRef} from "vue"
import {reqQuerycatio} from "../../untils/service"
export default {
    name:"BannerMenu",
    setup() {
        let MenuList = reactive({
            subjectList:[],//分类数据

        })
        //循环列表数据
        function forItemData() {
            let params = {}
            reqQuerycatio(params,res=>{
                console.log(res)
                if(res.status == 0){
                    let list = res.data;
                    MenuList.subjectList = list
                }
            })
        }
        forItemData();

        return {
            MenuList,
            subjectList:toRef(MenuList,"subjectList")
        }
        
    }
}