<template>
  <div class="footer padding-tb60">
    <div class="w1200 padding-top padding-bottom-xl flex-sp-ct">
      <ul class="flex-st-ct w55 fool">
        <li class="w25">
          <h1 class="padding-bottom font16">关于水天共享</h1>
          <p class="line-height30 color8">
            <router-link to="/about">
              公司简介
            </router-link>
          </p>
          <p class="line-height30 color8">
            <router-link to="/about">
              企业文化
            </router-link></p>
          <p class="line-height30 color8">
            <router-link to="/about">
              企业愿望
            </router-link></p>
          <p class="line-height30 color8">
            <router-link to="/about">
              发展历程
            </router-link></p>
        </li>
        <!-- <li>
          <h1 class="padding-bottom font16">水天商城</h1>
          <p class="line-height30 color8">品类齐全</p>
        </li> -->
        <li class="w25">
          <h1 class="padding-bottom font16">合作联系</h1>
          <p class="line-height30 color8">
            <router-link to="/about">
              加入我们
            </router-link></p>
          <p class="line-height30 color8">
            <router-link to="/about">
              联系我们
            </router-link></p>
          <p class="line-height30 color8">
            <router-link to="">
              投资者联系
            </router-link></p>
        </li>
        <li class="w45">
          <h1 class="padding-bottom font16">服务热线</h1>
          <p class="line-height30">
              08518484449
          <p class="line-height30">
              shuitianshare@126.com
          <p class="line-height25">
              贵州省贵阳市观山湖区长岭北路贵阳国际会议展览中心D区D4栋负1层11号
          </p>
        </li>
      </ul>
      <ul class="flex-sp-ct w25 foor">
        <li>
          <img src="../../assets/img/erwm.jpg" alt="" style="width: 120px;">
          <p class="padding-top-sm text-c">水天共享APP</p>
        </li>
        <li>
          <img src="../../assets/img/erwm.jpg" alt="" style="width: 120px;">
          <p class="padding-top-sm text-c">水天共享公众号</p>
        </li>
      </ul>
    </div>
    <div class="w1200 wbline">

    </div>
    <div class="padding-top-xl">
      <div class="w1200 color7 fba">
        备案号：黔ICP备17010227号-1
      </div>
    </div>
    <!-- <i class="el-icon-arrow-up back" @click="backtop" v-if="show"></i> -->
  </div>
</template>

<script>
  export default{
    data(){
      return{
        show: false,
      }
    },
    mounted() {
      // window.addEventListener('scroll',this.header)
    },
    methods:{
      // backtop(){
      //     var timer = null;//在前面声明
      //     timer = setInterval(function(){
      //       var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      //       document.documentElement.scrollTop = document.body.scrollTop = osTop - 50
      //       if(osTop == 0){
      //           clearInterval(timer);
      //       }
      //     },10);

      // },
      // header(){
      //   var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      //   if(osTop > 400){
      //     this.show =true
      //   }else{
      //     this.show = false;
      //   }
      // }
    },

  }
</script>

<style>
  .footer{
    background: #414141;
    color: #FFFFFF;
  }
  .footer a{
    color: #FFFFFF;
  }
  .footer a:hover{
    color: #999999;
  }
  .wbline {
      border-bottom: #333333 1px solid;
      box-shadow: 0 1px 0 #616161;
  }
  .back{
    position: fixed;
    right: 20px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 45px;
    border-radius: 50%;
    background: #cccccc;
    color: #FFFFFF;
    font-size: 35px;
  }
  @media (max-width: 500px) {
    .fool{
      width: 100%;
      padding: 0px 10px 30px 10px;
    }
    .fba{
      width: 100%;
      padding: 0px 10px;
    }
    .foor{
      width: 75%;
      padding: 0px 10px 0px 10px;
    }
  }
</style>
