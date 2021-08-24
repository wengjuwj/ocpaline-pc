<template>
  <div class="h5-layout">
      <Header></Header>
      <div class="container">
        <router-view></router-view>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/h5/Header'
import Footer from '@/components/h5/Footer'
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
html{
  background: red;
}
.h5-layout{
  max-width: 640px;
  margin: auto;
}
</style>