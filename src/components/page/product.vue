<template>
  <div>
    <div class="pdtimg">
      <img src="../../assets/img/procover.jpg" alt="">
      <!-- <div class="pdttext border-ca-b">
        <h1 class="line-height40 font18">产品介绍</h1>
        <p class="color7">Products</p>
      </div> -->
    </div>
    <div class="w1200">
      <div class="flex-sp-ct padding-tb50 whide" style="align-items: center;" v-for="(item,index) in prodata" :key="index">
        <div class="w50" v-if="index%2 != 0">
          <router-link :to="{path: '/detail', query: {type: 'pro', i: index}}">
            <img :src="item.img" alt="">
          </router-link>
        </div>
        <div class="w45" v-if="index%2 != 0">
            <h1 class="font25">
              <router-link :to="{path: '/detail', query: {type: 'pro', i: index}}">
                {{item.title}}
              </router-link>
            </h1>
            <p class="color7 font16 padding-tb-xl">{{item.time}}</p>
            <p class="line-over4 font18 line-height35">{{item.cpjj}}</p>
            <router-link :to="{path: '/detail', query: {type: 'pro', i: index}}" class="disinl margin-top-xl line-height40 color-blue border10" style="border: 1px solid #3894FF; padding: 0px 50px;">
              详情 >
            </router-link>
        </div>
        <div class="w45" v-if="index%2 == 0">
            <h1 class="font25">
              <router-link :to="{path: '/detail', query: {type: 'pro', i: index}}">
                {{item.title}}
              </router-link>
            </h1>
            <p class="color7 font16 padding-tb-xl">{{item.time}}</p>
            <p class="line-over4 font18 line-height35">{{item.cpjj}}</p>
            <router-link :to="{path: '/detail', query: {type: 'pro', i: index}}" class="disinl margin-top-xl line-height40 color-blue border10" style="border: 1px solid #3894FF; padding: 0px 50px;">
              详情 >
            </router-link>
        </div>
        <div class="w50 text-r" v-if="index%2 == 0">
          <router-link :to="{path: '/detail', query: {type: 'pro', i: index}}">
            <img :src="item.img" alt="">
          </router-link>
        </div>
      </div>
      <div class="flex-sp-ct phone" style="align-items: center;padding-top: 30px;" v-for="(item,index) in prodata" :key="item.title">
        <div class="w32">
          <router-link :to="{path: '/detail', query: {type: 'pro', i: index}}">
            <img :src="item.img" alt="">
          </router-link>
        </div>
        <div class="w65">
            <h1 class="font20">
              <router-link :to="{path: '/detail', query: {type: 'pro', i: index}}">
                {{item.title}}
              </router-link>
            </h1>
            <p class="color7 font16 padding-tb-sm">{{item.time}}</p>
            <p class="line-over4 line-height25">{{item.cpjj}}</p>
            <router-link :to="{path: '/detail', query: {type: 'pro', i: index}}" class="disinl margin-top line-height30 color-blue border10" style="border: 1px solid #3894FF; padding: 0px 50px;">
              详情 >
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'product',
    data(){
      return{
        prodata: [],
      }
    },
    created() {
      this.prodata = this.$pagedata.data.product;
    },
  }
</script>

<style>
  .pdtimg{
    position: relative;
  }
  .pdttext{
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
    background: #FFFFFF;
    width: 1200px;
    padding: 15px 30px;
  }
  .phone{
    display: none;
  }
  @media(max-width: 500px){
    .whide{
      display: none;
    }
    .phone{
      display: block;
    }
    .phone .w65{
      width: 100%;
      padding: 10px;
    }
    .phone .w32{
      width: 100%;
    }
  }
</style>
