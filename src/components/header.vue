<template>
 <div class="pc-full-contain">
    <div class="pc-contain">
      <div class="pc-header-top">
        <div class="pc-header-logo">
          <el-image
          :src="require('@/assets/topLog.png')"
          fit="contian"></el-image>
        </div>
        <div class="pc-header-between">
          <el-image
          :src="require('@/assets/header_title.png')"
          fit="contian"></el-image>
        </div>
        <!-- 右边 -->
        <!-- <div class="pc-header-right">
            
            <div class="pc-header-hotline">24小时服务热线: 159 0219 6474</div>
           
            <div class="pc-header-login">登录</div>
        </div> -->
      </div>
    </div>
    <!-- tab头部 -->
    <div class="pc-header-tab" style="display:none">
      <div class="pc-contain tab-wrap">
          <div class="tab-wrap-item" :class="[targetIndex==index?'active':'']"  @click="toLink(item.path,index)" v-for="(item,index) in talist" :key="index">{{item.text}}</div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  components:{

  },
  data(){
    return{
      talist:[
        {
          name:'index',
          text:'首页',
          path:'/index',
        },
        {
          name:'special',
          text:'重磅专栏',
          path:'/special',
        },
        {
          name:'newKnowledge',
          text:'应用新知',
          path:'/newKnowledge',
        },
        {
          name:'news',
          text:'行业资讯',
          path:'/news',
        },
        {
          name:'recorded',
          text:'录播',
          path:'/recorded',
        },
        {
          name:'direact',
          text:'直播',
          path:'/direact',
        }
      ],
      targetIndex:null
    }
  },
  created(){
    if(sessionStorage.getItem('page')){
      this.targetIndex=sessionStorage.getItem('page')
    }
  },
  methods:{
    toLink(path,index){
      this.targetIndex=index;
      sessionStorage.setItem('page',index)
      this.$router.push(path)
    }
  },
  watch:{
    
  }
}
</script>

<style lang="less" scoped>
  .pc-full-contain{
    background: url('~@/assets/header_bg.png') no-repeat;
    background-size: 100% 100%;
  }
  .pc-header-top{
    display: flex;
    align-items: center;
    // justify-content: space-between;
    font-size: 16px;
    .pc-header-logo{
      max-width: 185px;
      padding: 10px 0;
      .el-image{
        max-width: 100%;
      }
    }
    .pc-header-between{
      max-width: 50%;
      margin-left: 25px;
    }
    .pc-header-right{
      display: flex;
      align-items: center;
      text-align: right;
      .pc-header-hotline{
        color: #1b97ee;
      }
      .pc-header-login{
        cursor: pointer;
        margin-left: 15px;
      }
    }
  }
  // 
  .pc-header-tab{
    width: 100%;
    background: #1b97ee;
    font-size: 16px;
    .tab-wrap{
      height: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
      .tab-wrap-item{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #fff;
        cursor: pointer;
        &:hover,&.active{
          background: #1678d3;
        }
      }
    }
  }
</style>