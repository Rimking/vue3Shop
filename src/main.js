

//引入的不在是vue构造函数，而是一个名为 createApp的工厂函数
import { createApp } from 'vue'
//引入elementui plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//配置路由
import router from './router/index'


//拆解后， 创建应用实例对象(app)-类似之前vue2的vm实例，
//             但比app更加轻，没有vm挂载的东西多
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
//挂载 app
app.mount("#app")

