<template>
  <div>
    <div class="padding-bottom-xl">
      <img src="../../assets/img/aboutcover.jpg" alt="">
    </div>
    <div class="padding-tb60 w1200 text-c abotw">
        <h1 class="font20">公司简介</h1>
        <p class="padding-tb-xl font16 line-height30">{{aboutdata.aboutinfo}}</p>
        <div class="flex-sp-ct">
          <img :src="aboutdata.img" alt="" class="w48">
          <img :src="aboutdata.img1" alt="" class="w48">
        </div>
    </div>
    <div class="padding-tb60 bg-f9">
        <div class="w1200">
          <h1 class="font20">企业文化</h1>
          <div class="padding-tb-xl">
            <p class="line-height30 font16">我们的使命: 水天在手 拥有所有</p>
            <p class="line-height30 font16">我们的愿景: 民众的水天共享 大众的财富共享</p>
            <p class="line-height30 font16">核心价值观: 用于民众, 惠于大众, 实现增收, 夯实财务, 用户想要的, 就是我们努力地。</p>
          </div>
          <div class="flex-sp-ct">
            <img :src="aboutdata.img2" alt="" class="w30">
            <img :src="aboutdata.img3" alt="" class="w30">
            <img :src="aboutdata.img4" alt="" class="w30">
          </div>
        </div>
    </div>
    <div class="padding-tb50 w1200">
        <h3 class="color7 font20 text-c" style="padding-bottom: 60px;">发展历程</h3>
        <img :src="aboutdata.img5" alt="">
        <!-- <div class="w48">
          <h1 class="font20">发展历程</h1>
          <p class="padding-top-xl color8 line-height30">{{aboutdata.aboutculture}}</p>
        </div>
        <div class="w48">
          <img :src="aboutdata.img5" alt="">
        </div> -->
    </div>
    <div class="padding-tb50"></div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        aboutdata: [],
      }
    },
    created() {
      this.aboutdata = this.$pagedata.data.about;
    }
  }
</script>

<style>
  @media(max-width: 500px){
    .abotw{
      padding: 0px 10px 0px 10px;
    }
  }
</style>
