<template>
  <div class="top-nav" :class="{'hadshow': flexshow}">
    <div class="w1200 flex-st-ct">
      <div class="logo">
        <router-link to="/" class="fl">
          <img src="../../assets/img/logo.png" alt="">
        </router-link>
      </div>
      <!--导航 start-->
      <div class="navshow">
        <i class="fa fa-navicon" v-if="!itenshow" @click="itenshow = true"></i>
        <i class="fa fa-remove" v-else @click="itenshow = false"></i>
      </div>
      <nav :class="{'itenshow': itenshow}" @click="itenshow = false">
        <ul class="menu flex-st-ct">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/product">产品中心</router-link></li>
          <li><router-link to="/team">团队介绍</router-link></li>
          <li><router-link to="/about">公司简介</router-link></li>
          <li><a href="http://www.guochenzhongyi.com/">国宸集团</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        itenshow: false,
        headershow: false,
        flexshow: true,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.header)
    },
    methods: {
      header() {
        var scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop; //滚动条距离顶部的高度
        if (scrollTop > 60) {
          this.headershow = true;
        } else {
          this.headershow = false;
        }
      }
    }
  }
</script>

<style>
  .hadshow {
    animation: heas 2s 0s;
  }
  @keyframes heas{
    0%{
      opacity: 0;
      transform: translate(0px, -100px);
    }
    100%{
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
   .top-nav {
       width: 100%;
       height: 70px;
       display: table;
       background: #01071a;
       border-bottom: 1px solid rgba(255,255,255,.1);
   }
  .menu{
    height: 70px;
    line-height: 70px;
  }
  .menu a{
    display: inline-block;
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    color: #FFFFFF;
    width: 120px;
    height: 70px;
    line-height: 70px;
    position: relative;
  }
  .menu a:hover{
    border-bottom: 2px solid #fff000;
  }
  .menu .router-link-exact-active{
    border-bottom: 2px solid #fff000;
  }
  .navtop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .headertop {
    box-shadow: 0px 1px 3px 1px #cccccc;
  }

  .header-r {
    text-align: center;
  }

  .header-r a {
    height: 60px;
    line-height: 60px;
    padding: 0px 20px;
    margin-right: 50px;
  }
  @media (max-width: 1000px) {
    .itenshow{
      transition: all 0.5s;
      opacity: 1;
      top: 62px;
    }
    .top-nav {
        height: 60px;
    }
    .menu{
      height: auto;
    }
    .menu li{
      width: 100%;
      line-height: 50px;
    }
    .menu a{
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #FFFFFF;
    }
    .menu .router-link-exact-active {
      color: #fff000;
    }
  }
  @media (max-width: 500px){
  .itenshow {
      top: 59px;
  }
}
</style>
