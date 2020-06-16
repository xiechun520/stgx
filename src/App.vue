<template>
  <div id="app">
    <pageheader></pageheader>
    <router-view style="margin-top: 60px;"/>
    <pagefooter></pagefooter>
  </div>
</template>

<script>
  import pageheader from './components/public/header.vue'
  import pagefooter from './components/public/footer.vue'
  export default {
    name: 'App',
    components:{
      pageheader,
      pagefooter
    },
    mounted() {

    },
    methods:{

    }
  }
</script>

<style>
  @import url("../static/font-awesome-4.7.0/css/font-awesome.css");
  @import url("./assets/css/style.css");
  @import url("./assets/css/slider.css");
  .top-nav{
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 99;
    width: 100%;
    background: #FFFFFF;
  }

</style>
