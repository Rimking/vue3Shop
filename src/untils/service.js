import { requestData, requestPostData } from "./request.js";

// 登录
export function reqLoginWeb(param, callback) {
    requestPostData("/user/login", param, res => {
        callback(res);
    });
}
 
// 查询主页目录信息
export function reqQuerycatio(param, callback) {
    requestData("/pub/headCatalogue", param, res => {
        callback(res);
    });
} 

 
// 获取订单号
export function queryOrederNumber(param, callback) {
    requestData("/pub/findOrderNumber", param, res => {
        callback(res);
    });
} 
 
// 传递给后端订单号等等
export function queryOrederSend(param, callback) {
    requestData("/pub/successBT", param, res => {
        callback(res);
    });
} 