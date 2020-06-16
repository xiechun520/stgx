<template>
  <div class="index">
    <div class="banner">
      <el-carousel :height="imgHeight" :interval="3000">
        <el-carousel-item v-for="(item,index) in indexdata.banner" :key="index">
          <!-- <router-link :to="item.advJumpUrl"> -->
          <img :src="item.img" ref="imght" />
          <!-- </router-link> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="ex1">
      <div class="w1200">
        <ul>
          <div class="ex1-img" ref= 'left' :class="{'leftshow': tabshow}">
            <img src="../assets/img/exone.jpg">
          </div>
          <div class="ex1-txt" ref= 'right' :class="{'rightshow': tabshow}">
            <h1>跟随水天、玩转互联</h1>
            <p>{{indexdata.titleb}}</p>
            <li>
              <i class="fa fa-users"></i>
              <span>独立社交</span>
            </li>
            <li>
              <i class="fa fa-shopping-cart"></i>
              <span>社交电商</span>
            </li>
            <li>
              <i class="fa fa-file-movie-o "></i>
              <span>视频直播</span>
            </li>
            <li>
              <i class="fa fa-glass"></i>
              <span>实体庄园</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="sp2">
      <div class="w1200">
        <div class="sp-title h1 color-white" ref= 'bigtop'>
          <h1>线下实体庄园结合线上同步运行</h1>
        </div>
        <ul>
          <div class="sp2-left" ref="left2"><img src="../assets/img/sp2-2.png"></div>
          <div class="sp2-middle huadong fadeInUpBig "><img src="../assets/img/sp2-1.png"></div>
          <div class="sp2-right" ref="right2"><img src="../assets/img/sp2-3.png"></div>
        </ul>
      </div>
    </div>

    <div class="w1200">
      <div class="padding-tb-sm"></div>
      <div class="video">
        <h1>产品中心</h1>
        <div class="text-c color8 padding-bottom-xl">
          Products
        </div>
        <div class="video-left" ref="bigtop1">
          <router-link to="/product">
            <img src="../assets/img/pro.jpg">
            <div class="video-text">
              <h3>龙泉酒庄桂花酿</h3>
              <span>了解详情</span>
            </div>
          </router-link>
        </div>
        <div class="video-right" ref="bigb">
          <ul>
            <li>
              <router-link to="/detail?type=pro&i=4">
                <img src="../assets/img/pro1.jpg">
                <p>龙泉镇玫瑰花酿</p>
                <span>&gt;</span>
              </router-link>
            </li>
            <div class="bk15"></div>
            <li>
              <router-link to="/detail?type=pro&i=5">
                <img src="../assets/img/pro2.jpg">
                <p>龙泉镇咖啡酒</p>
                <span>&gt;</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w1200 padding-tb50">
      <h1 class="padding-bottom" style="font-size: 36px; font-weight: 200; text-align: center;">发展历程</h1>
      <p class="text-c color8">history</p>
      <div class="padding-top-xl flex-sp-ct">
        <div class="w60 hisw">
          <img src="../assets/img/history.jpg" alt="">
        </div>
        <div class="w35 histw">
          <p class="padding-bottom line-height35 font20 color7" v-for="(item,index) in indexdata.history" :key="index">
            {{item.text}}
          </p>
        </div>
      </div>
    </div>





    <div class="ep2" ref="ep2">
      <div class="w1200">
        <div>
          <h1  class="padding-bottom" style="font-size: 36px; font-weight: 200; text-align: center;">核心优势</h1>
          <p class="text-c color8">别人有，我有，别人没有，我有，您专属定制，就怕您不提要求!</p>
        </div>
        <div class="bk20"></div>
        <ul>
          <li><i class="fa fa-desktop"></i>
            <p>实体数据</p>
            <span>用户亲自录入</span>
          </li>
          <li><i class="fa fa-mobile-phone"></i>
            <p>线上数据</p>
            <span>千万数据安全保障</span>
          </li>
          <li><i class="fa fa-sign-out"></i>
            <p>轻松进入</p>
            <span>用户零门槛进入</span>
          </li>
          <li><i class="fa fa-edit"></i>
            <p>操作简便</p>
            <span>一键操作,无需重复请求</span>
          </li>
          <li><i class="fa fa-server"></i>
            <p>账户安全</p>
            <span>国内优秀的安全防护团队</span>
          </li>
          <li><i class="fa fa-file-word-o"></i>
            <p>实名认证</p>
            <span>实名认证, 安全可靠</span>
          </li>
          <li><i class="fa fa-user"></i>
            <p>扫脸认证</p>
            <span>确认用户本人操作</span>
          </li>
          <li><i class="fa fa-university "></i>
            <p>实体管理</p>
            <span>线下庄园专人管理</span>
          </li>
          <li><i class="fa fa-newspaper-o"></i>
            <p>资产复投</p>
            <span>多方面多产业投资</span>
          </li>
          <li><i class="fa fa-history"></i>
            <p>升级明确</p>
            <span>明确的升级标准, 轻松操作</span>
          </li>
          <li><i class="fa fa-globe"></i>
            <p>生态庄园</p>
            <span>天然原生态的生产基地</span>
          </li>
          <li><i class="fa fa-glass"></i>
            <p>实体酒庄</p>
            <span>实体酒庄专业酿造</span>
          </li>
        </ul>
      </div>
    </div>



  </div>
</template>

<script>
  import indexteam from './public/team.vue'
  export default {
    name: 'HelloWorld',
    components: {
      indexteam
    },
    data() {
      return {
        imgHeight: '600px',
        indexdata: [],
        product: [],
        tabshow: true,
      }
    },
    mounted() {
      window.addEventListener('scroll',this.slider)
      this.imgHeight = `${(document.documentElement.clientWidth) * 0.3}px`;
      const that = this;
      window.onresize = function() { // 定义窗口大小变更通知事件
        // console.log(that.$refs.imght[0].height);
        that.imgHeight = `${that.$refs.imght[0].height}px`;
      };
    },
    destroyed() {
      window.removeEventListener("scroll", this.slider);
    },
    created() {
      this.indexdata = this.$pagedata.data.index;
      this.product = this.$pagedata.data.product;
      // const loading = this.$loading();
      //         setTimeout(() => {
      //           loading.close();
      //         }, 2000);
      // this.$api.post('/txapi/ncovabroad/index',{
      //   key: '6c3cc98e70b23637a15ffc09d0ce11aa'
      // }).then(res => {
      //   console.log(res);
      // })
    },
    methods:{
        slider(){
          var constop = this.$refs.ep2.getBoundingClientRect().top;
          var left = this.$refs.left.getBoundingClientRect().top;
          var right = this.$refs.right.getBoundingClientRect().top;
          var left2 = this.$refs.left2.getBoundingClientRect().top;
          var right2 = this.$refs.right2.getBoundingClientRect().top;
          var bigtop1 = this.$refs.bigtop1.getBoundingClientRect().top;
          var bigb = this.$refs.bigb.getBoundingClientRect().top;
          var bigtop = this.$refs.bigtop.getBoundingClientRect().top;
          if(left <600 && left > 0){
            this.$refs.left.style.opacity = "1"
            this.$refs.left.style.transform = "translate(0,0)";
          }
          if(right <600 && right > 0){
            this.$refs.right.style.opacity = "1"
            this.$refs.right.style.transform = "translate(0,0)";
          }
          if(bigtop <600 && bigtop > 0){
            this.$refs.bigtop.style.opacity = "1"
            this.$refs.bigtop.style.transform = "translate(0,0)";
          }
          if(left2 <600 && left2 > 0){
            this.$refs.left2.style.opacity = "1"
            this.$refs.left2.style.transform = "translate(0,0)";
          }
          if(right2 <600 && right2 > 0){
            this.$refs.right2.style.opacity = "1"
            this.$refs.right2.style.transform = "translate(0,0)";
          }
          if(bigtop1 <600 && bigtop1 > 0){
            this.$refs.bigtop1.style.opacity = "1"
            this.$refs.bigtop1.style.transform = "translate(0,0)";
          }
          if(bigb <600 && bigb > 0){
            this.$refs.bigb.style.opacity = "1"
            this.$refs.bigb.style.transform = "translate(0,0)";
          }
          if(constop <600 && constop > 0){
            let allLis = this.$refs.ep2.getElementsByTagName('li');
            var i = -1;
            var timer = setInterval(()=>{
              i = i+ 1;
              if(i< allLis.length){
                allLis[i].style.opacity = "1";
                allLis[i].style.transform = "translate(0,0)";
              }else{
                clearInterval(timer)
              }
            },100)
          }
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__arrow {
    width: 50px;
    height: 50px;
    background: rgba($color: #000000, $alpha: 0.5);
  }

  .el-carousel__arrow i {
    font-size: 28px;
  }

  .el-carousel__arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .ep1,
  .ep2,
  .ep3,
  .ep4 {
    width: 100%;
    overflow: hidden;
    padding: 40px 0px;
  }

  .ex1 {
    width: 100%;
    overflow: hidden;
    padding: 30px 0px;
  }

  .ex1 ul,
  .ex5 ul {
    overflow: initial;
    width: 100%;
    display: flex;
    align-items: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-lines: multiple;
  }

  .ex1-img,
  .ex1-txt {
    width: 45%;
  }
  .ex1-txt h1 {
    font-size: 30px;
    margin-bottom: 35px;
    font-weight: 200;
  }

  .ex1-txt p {
    font-size: 16px;
    line-height: 22px;
    color: #888;
    margin-bottom: 40px;
  }

  .ex1-txt li {
    width: 21%;
    float: left;
    text-align: center;
  }

  .ex1-txt li i,
  .ex3 li i {
    font-size: 35px;
    color: #3dc2ff;
  }

  .ex1-txt li span {
    display: inline-block;
    width: 100%;
    margin-top: 10px;
    color: #888;
  }

  .sp2 {
    background: url(../assets/img/sp2bj.png) repeat-x center top;
    padding: 40px 0px;
  }

  .sp-title h1,
  .sp1-title h1 {
    font-size: 36px;
    margin-bottom: 10px;
    font-weight: 200;
    text-align: center;
  }

  .sp1-title h1 {
    color: #FFFFFF;
  }

  .sp1-title p {
    color: #fff;
  }

  .sp2 ul {
    position: relative;
    width: 100%;
    padding-top: 30px;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-lines: multiple;
  }

  .sp2-left {
    width: 60%;
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .sp2-right {
    width: 30%;
    position: relative;
    z-index: 1;
  }

  .sp2-middle {
    position: absolute;
    top: 75px;
    left: 49%;
    width: 30%;
  }

  .sp5 {
    width: 100%;
    overflow: hidden;
    padding: 40px 0px 9% 0px;
  }

  .sp5-left {
    text-align: center;
    position: relative;
  }

  .sp5-right {
    position: absolute;
    width: 60%;
    top: 33%;
    left: 50%;
    transform: translateX(-50%);
    -moz-transform: translateX(-50%);
  }

  .ep1 ul,
  .ep2 ul,
  .ep3 ul,
  .ep4 ul {
    width: 100%;
    overflow: hidden;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-lines: multiple;
  }

  .sp-title p,
  .sp1-title p {
    font-size: 16px;
    line-height: 25px;
    color: #888;
    text-align: center;
  }

  .ep2 li {
    width: 23%;
    box-sizing: border-box;
    margin: 10px 0px;
    padding: 20px;
    text-align: center;
  }

  .ep2 li i {
    font-size: 40px;
    color: #00A2FF;
  }

  .ep2 li p {
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .ep2 li span {
    color: #888;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    height: 44px;
    line-height: 22px;
    overflow: hidden;
  }

  .ep2 li:hover {
    background: #00A2FF;
    border-radius: 5px;
  }

  .ep2 li:hover i,
  .ep2 li:hover p,
  .ep2 li:hover span {
    color: #FFFFFF;
  }

  .case-link {
    width: 100%;
    height: auto;
    padding: 20px 0px;
    text-align: center;
  }

  .video {
    padding-top: 20px;
    display: table;
  }

  .video h1 {
    text-align: center;
    font-weight: 200;
    font-size: 36px;
  }

  .video-left {
    width: 63%;
    height: auto;
    overflow: hidden;
    float: left;
  }

  .video-left a {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .video-left a img {
    transition: 0.5s;
  }

  .video-left a:hover img {
    transform: scale(1.1);
    transition: 0.5s;
  }

  .video-left a i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    text-align: center;
    border-radius: 50%;
    background-color: rgba(199, 0, 0, 0.27);
  }

  .video-left a i:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .video-text {
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    padding: 0 30px 20px 30px;
  }

  .video-text h3 {
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: normal;
  }

  .video-text span {
    position: absolute;
    right: 30px;
    bottom: 20px;
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #FFFFFF;
  }

  .video-text span:hover {
    /* background: #FC8080; */
    border-color: #0a08f1;
    color: #0a08f1;
  }

  .video-right {
    width: 36%;
    height: auto;
    overflow: hidden;
    float: left;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .video-right a {
    position: relative;
    display: block;
    color: #ffffff;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  .video-right a img {
    transition: 0.5s;
  }

  .video-right a:hover img {
    transform: scale(1.1);
    transition: 0.5s;
  }

  .video-right a i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-color: rgba(199, 0, 0, 0.27);
  }

  .video-right a i:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .video-right p {
    position: absolute;
    font-size: 15px;
    left: 30px;
    bottom: 20px;
  }

  .video-right span {
    font-size: 20px;
    position: absolute;
    right: 30px;
    bottom: 18px;
    font-family: "宋体";
  }

  .video-right span:hover {
    color: #FC8080;
  }
.leftshow {
    animation: lefts 2s 0s;
  }
  .rightshow{
    animation: rights 2s 0s;
  }
  @media (max-width: 500px) {
    .ex1-img,
    .ex1-txt,
    .video-left,
    .video-right{
      width: 100%;
    }
    .video-right{
      padding-left: 0px;
    }
    .video-right ul{
      display: flex;
      justify-content: space-between;
    }
    .video-right ul li{
      width: 50%;
    }
    .video-right .bk15{
      display: none;
    }
    .ex1-txt h1{
      text-align: center;
      margin-bottom: 16px;
    }
    .ex1-txt p{
      padding: 0px 10px;
    }
    .hisw{
      width: 100%;
    }
    .histw{
      width: 100%;
      padding: 15px 10px 0px 10px;

    }
    .histw .font20{
      font-size: 16px;
    }
    .histw .padding-bottom{
      padding-bottom: 5px;
    }
    .histw .line-height35{
      line-height: 25px;
    }
    .ep2{
      padding: 0px 0px 20px 0px;
    }
    .ep2 li {
        width: 33%;
    }
  }
  @keyframes lefts{
    0%{
      opacity: 0;
      transform: translate(-200px, 0px);
    }
    100%{
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
  @keyframes rights{
    0%{
      opacity: 0;
      transform: translate(200px, 0px);
    }
    100%{
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
</style>
