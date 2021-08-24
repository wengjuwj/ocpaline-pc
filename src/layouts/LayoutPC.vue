<template>
  <div class="pc-layout">
      <Header  :componentName="$route.name" v-if="$route.meta.showheader"></Header>
      <div class="container">
        <router-view></router-view>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/pc/Header'
import Footer from '@/components/pc/Footer'
export default {
  name:"layout",
  components:{
    Header,
    Footer
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
  .pc-layout{
    
  }
</style>