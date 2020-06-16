<template>
  <div>
    <div class="padding-bottom-xl">
      <img src="../../assets/img/teamcover.jpg" alt="">
    </div>
    <div class="padding-tb50 w1200">
      <h1 class="text-c font20">团队介绍</h1>
      <p class="padding-top text-c">
        <span class="disinl w80 line-height35 font16 color7 textw">
            水天共享科技有限公司聚集一批优秀的互联网精英人才, 以自身的互联网技术、大数据分析及互联网+的高科技集成系统建立平台, 推出集社交、直播、短视频、商城、游戏于一体的水天共享APP和实体产业相结合的互联网综合平台服务社会大众, 致力于最优质的服务向客户提供高层次的行业标准和增值服务
            起于2017我们风雨同舟、我们砥砺前行、我们乘风破浪、我们求实创新！
            水润万物、天道酬勤、水天共识、将是今后互联网共识标杆！
        </span>
      </p>
      <div class="padding-top">
        <pageteam :data = "teamdata.team"></pageteam>
      </div>
    </div>
  </div>
</template>

<script>
  import pageteam from '../public/team.vue'
  export default{
    components:{
      pageteam
    },
    data(){
      return{
        teamdata: [],
      }
    },
    created() {
      this.teamdata = this.$pagedata.data.index;
    }
  }
</script>

<style>
  @media (max-width: 500px) {
    .padding-tb50{
      padding: 0px 10px 10px 10px;
    }
    .textw{
      width: 100%;
      font-size: 14px;
      line-height: 24px;
    }
  }
</style>
