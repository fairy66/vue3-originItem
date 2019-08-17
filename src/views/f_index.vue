<template>
  <div class="home">
    <div class="headBox">
      <van-nav-bar left-arrow>
          <img :src="h_ting" alt="qr" slot="left" class="rightImg"/>
         <van-search slot="title" placeholder="请输入搜索关键词"></van-search>
          <img :src="h_qr" alt="qr" slot="right" class="rightImg"/>
      </van-nav-bar>
      <van-tabs>
        <van-tab v-for="index in 8" :title="'标签 ' + index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
    </div>
    <Footnav propsPage="home"></Footnav>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { Button, Tab, Tabs, NavBar,Search  } from 'vant';
  import Footnav from '../components/f_footNav.vue';
  import h_qr from '../assets/home/h_qr.png'
  import h_ting from '../assets/home/h_ting.png';
  import './styles/f_index.less';

  export default {
    name: 'home',
    components: {
      [Button.name]: Button,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [NavBar.name]: NavBar,
      [Search.name]:Search ,
      Footnav,
      propsFootdata: [
        { title: '首页', img: [] }
      ]
    },
    data() {
      return {
        h_qr,
        h_ting,
      }
    }
  }
</script>