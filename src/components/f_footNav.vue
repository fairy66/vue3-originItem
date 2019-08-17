<template>
    <div class="footNav">
        <ul class="foot_nav_box">
            <router-link to='/'>
                <li>
                    <img :src="propsPage==='home'?home1:home0" alt="">
                    <div :class="propsPage === 'home' ?'active_page':''">首页</div>
                </li>
            </router-link>
            <router-link to='/classify'>
                <li>
                    <img :src="propsPage === 'classify' ? classify1 : classify0" alt="">
                    <div :class="propsPage === 'classify' ?'active_page':''">分类</div>
                </li>
            </router-link>
            <router-link to='/shopCart'>
                <li>
                    <img :src="propsPage === 'shopcart' ? shopcart1 : shopcart0" alt="">
                    <div :class="propsPage === 'shopcart' ?'active_page':''">购物车</div>
                </li>
            </router-link>
            <router-link to='/mine'>
                <li>
                    <img :src="propsPage === 'mine' ?  mine1: mine0" alt="">
                    <div :class="propsPage === 'mine' ?'active_page':''">我的</div>
                </li>
            </router-link>
        </ul>
        <router-view />
    </div>
</template>

<script>
import './styles/f_footNav.less';
import home0 from '../assets/footer_icon/home0.png';
import home1 from '../assets/footer_icon/home1.png';
import classify0 from '../assets/footer_icon/classify0.png';
import classify1 from '../assets/footer_icon/classify1.png';
import vip0 from '../assets/footer_icon/vip0.png';
import vip1 from  '../assets/footer_icon/vip1.png';
import shopcart0 from '../assets/footer_icon/shopcart0.png';
import shopcart1 from  '../assets/footer_icon/shopcart1.png';
import mine0 from '../assets/footer_icon/mine0.png';
import mine1 from '../assets/footer_icon/mine1.png';

export default {
    name: 'Footnav',
    props: {
        propsPage: String,
    },
    data() {
        return {
            home0,
            home1,
            classify0,
            classify1,
            vip0,
            vip1,
            shopcart0,
            shopcart1,
            mine0,
            mine1,
        }
    },
    created(){
        
    }
}

</script>