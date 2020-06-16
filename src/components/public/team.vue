<template>
  <div class="flex-sp-ct">
    <div class="w30 padding-tb-xl team" v-for="(item,index) in data" :key = "index">
      <router-link :to="{path: '/detail', query: {type: 'team', i: index}}">
        <img :src="item.teamimg" alt="">
        <div class="teamps color-white text-c">
          <h3 class="font18">{{item.name}}</h3>
          <h4 class="padding-tb-sm font16">{{item.position}}</h4>
          <h5 class="margin-top-xs margin-bottom-xl line-over3 font13" style="color: #EEEEEE;">{{item.occupation}}</h5>
          <p class="">
            详情 >
            <!-- <span class="margin-right">
              <i class="el-icon-s-platform font30 color-white"></i>
            </span>
            <span class="margin-right">
              <i class="el-icon-s-platform font30 color-white"></i>
            </span>
            <span>
              <i class="el-icon-s-platform font30 color-white"></i>
            </span> -->
          </p>
        </div>
      </router-link>
    </div>
    <div class="w30 padding-tb-xl team" v-if="data.length % 3 == 2">

    </div>
  </div>
</template>

<script>
  export default{
    name:'team',
    props:["data"],
    data(){
      return{

      }
    },
    created() {
      // console.log(this.data)
    }
  }
</script>

<style>
  .team a{
    display: inline-block;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
  }
  .team a::before{
    position: absolute;
    top: 200%;
    left: 0px;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(0, 0, 0, 0.59);
    z-index: 10;
    transition: all 0.5s;
  }
  .teamps{
    position: absolute;
    top: 200%;
    left: 50%;
    width: 80%;
    transform: translate(-50%,-50%);
    z-index: 20;
    transition: all 0.5s;
  }
  .team a:hover::before{
    top: 0%;
    transition: all 0.5s;
  }
  .team a:hover .teamps{
    top: 50%;
    transition: all 0.5s;
  }
  @media (max-width:500px) {
    .team{
      padding: 10px 0px;
    }
    .team a{
      position: initial;
    }
    .teamps{
      position: initial;
      top: 0px;
      left: 0px;
      width: 100%;
      padding-top: 10px;
      -webkit-transform: translate();
      transform: translate(0,0);
      color: #333333;
    }
    .team a:hover .teamps h3{
      color: #0067BE;
    }
    .team a::before{
      display: none;
    }
    .teamps h4{
      font-size: 14px;
      padding: 5px 0px 0px 0px;
    }
    .teamps h5,
    .teamps p{
      display: none;
    }
  }
</style>
