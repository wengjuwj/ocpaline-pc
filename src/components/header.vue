<template>
 <div class="pc-full-contain">
    <div class="pc-contain">
      <div class="pc-header-top">
        <div class="pc-header-logo">
          <el-image
          :src="require('@/assets/topLog.png')"
          fit="contian"></el-image>
        </div>
        <!-- 右边 -->
        <div class="pc-header-right">
            <!--  -->
            <div class="pc-header-hotline">24小时服务热线: 159 0219 6474</div>
            <!--  -->
            <div class="pc-header-login">登录</div>
        </div>
      </div>
    </div>
    <!-- tab头部 -->
    <div class="pc-header-tab">
      <div class="pc-contain tab-wrap">
          <div class="tab-wrap-item">首页</div>
          <div class="tab-wrap-item">重磅专栏</div>
          <div class="tab-wrap-item">应用新知</div>
          <div class="tab-wrap-item">行业资讯</div>
          <div class="tab-wrap-item">录播</div>
          <div class="tab-wrap-item">直播</div>
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
    }
  },
  methods:{

  }
}
</script>

<style lang="less" scope>
  .pc-header-top{
    display: flex;
    justify-content: space-between;
    .pc-header-logo{
      max-width: 258px;
      padding: 10px 0;
      .el-image{
        max-width: 100%;
      }
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
        &:hover{
          background: #1678d3;
        }
      }
    }
  }
</style>