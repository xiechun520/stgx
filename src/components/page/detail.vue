<template>
  <div>
    <img src="../../assets/img/covercp.jpg" alt="">
    <div v-if="type == 'pro'" class="w1200 flex-sp-ct padding-tb60 detail">
      <div class="w40">
        <img :src="data.img" alt="">
      </div>
      <div class="w55">
        <h1 class="font18 fontb">{{data.title}}</h1>
        <p class="padding-top color8">{{data.time}}</p>
        <p class="padding-tb color7 font15 line-height30">{{data.cpjj}}</p>
        <!-- <p class="color-red font18">{{data.price}} 元/瓶</p> -->
      </div>
    </div>
    <div v-else class="w1200 flex-sp-ct padding-tb60 detail">
        <div class="w40">
          <img :src="data.teamimg" alt="">
        </div>
        <div class="w55">
          <h1 class="font18 fontb"><span class="tishow">姓名：</span>{{data.name}}</h1>
          <h1 class="font16 padding-tb-sm"><span class="tishow">职 位：</span>{{data.position}}</h1>
          <p class="padding-tb color7 font15 line-height30 jj"><span class="tishow">简介：</span>{{data.occupation}}</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'detail',
    data(){
      return{
        type: '',
        data: [],
      }
    },
    watch:{
      $route(to,from){
        console.log(to.path);
      }
    },
    created() {
      this.type = this.$route.query.type;
      if(this.$route.query.type == 'pro'){
        this.data = this.$pagedata.data.product[this.$route.query.i];
      }else{
        this.data = this.$pagedata.data.index.team[this.$route.query.i];
        console.log(this.data)
      }
    }
  }
</script>

<style>
  .jj{
    position: relative;
    padding-left: 57px;
  }
  .jj span{
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    color: #000000;
    font-size: 16px;
  }
  @media (max-width: 800px) {
     .detail .w40{
       width: 100%;
       text-align: center;
     }
     .detail .w55{
       width: 100%;
       padding-top: 30px;
       text-align: center;
     }
     .jj{
       padding: 10px;
     }
     .tishow{
       display: none;
     }
  }
</style>
