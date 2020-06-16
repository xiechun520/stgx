<template>
  <div>
    <div class="pdtimg">
      <img src="../../assets/img/about.jpg" alt="">
      <div class="pdttext border-ca-b">
        <h1 class="line-height40 font18">经典案例</h1>
        <p class="color7">Case</p>
      </div>
    </div>
    <div class="w1200 padding-top-xl">
      <div v-for="(item,index) in prodata" :key="index" class="border-ca-b padding-tb">
        <h1 class="font20 padding-top-xl">{{item.title}}</h1>
        <div class="padding-tb-xl">
            {{item.price}}
        </div>
        <div class="flex-sp-ct">
          <div class="w40" v-if="index%2 != 0">
            <img :src="item.img" alt="">
          </div>
          <div class="w55 casebox" v-if="index%2 != 0">
              <p class="line-over5 font20 line-height35">{{item.cpjj}}</p>
              <span>
                Read More >
              </span>
          </div>
          <div class="w55 casebox" v-if="index%2 == 0">
              <p class="line-over5 font20 line-height35">{{item.cpjj}}</p>
              <span>
                Read More >
              </span>
          </div>
          <div class="w40" v-if="index%2 == 0">
            <img :src="item.img" alt="">
          </div>
        </div>
        <div class="padding-tb"></div>
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
      this.prodata = this.$pagedata.data.casedata;
    }
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
  .casebox{
    position: relative;
  }
  .casebox span{
    position: absolute;
    left: 0px;
    bottom: 0px;
    font-style: '宋体';
    color: #EB7A67;
    font-size: 18px;
  }
</style>
