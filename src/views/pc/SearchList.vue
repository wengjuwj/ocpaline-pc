<template>
  <div class="pc-full-contain">
     <div class="pc-contain">
        <div class="breadcrumb-box">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
     </div>
     <!-- 搜索结果 -->
     <div class="search-content">

     </div>
  </div>
</template>

<script>
export default {
  name:"searchlist",
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

<style lang="less" scoped>
  .breadcrumb-box{
      padding: 15px 0;
  }
  .search-content{
    
  }
</style>