const routes = [
    {
        path: '/',
        component: () => import('../Pages/HomePage/HomePage.vue'),
    },
    {
        name: 'homepage',
        path: '/homepage',
        component: () => import('../Pages/HomePage/HomePage.vue')
    },
    {
        //详情页
        name:"detail",
        path: '/detail',
        component: () => import('../Pages/DetailPage/DetailPage.vue')
    },
    {
        //支付
        name:"orderby",
        path: '/orderby',
        component: () => import('../components/alipayTest/alipayTest.vue')
    }
    
];
 
export default routes