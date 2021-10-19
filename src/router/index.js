//1 引入相关方法
import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () =>
    import ('./../pages/Home.vue')
const Course = () =>
    import ('./../pages/Course.vue')
const Friends = () =>
    import ('./../pages/Friends.vue')
const Study = () =>
    import ('./../pages/Study.vue')
const My = () =>
    import ('./../pages/My.vue')

//2 路由映射对象
// 2 创建路由对象
const routes = [
    /*通常第一个配置重定向 */
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/course', component: Course },
    { path: '/friends', component: Friends },
    { path: '/study', component: Study },
    { path: '/my', component: My }
]

// 3 创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes /*键值同名可缩写 */
});
//4 导出路由对象
export default router;