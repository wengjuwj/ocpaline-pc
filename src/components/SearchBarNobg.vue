<template>
  <span class="search" :style="{'width':width,'height':height+'px'}">
    
    <el-input 
    v-model="input" 
    placeholder="请输入搜索关键词"

    >
    </el-input>
    <span class="search-btn">
      <i class="el-icon-search"></i>
    </span>
    <!-- <el-input
      :style="{'width':width,'height':height+'px'}"
      placeholder="请输入搜索关键词"
      v-model="input1">
      <i slot="suffix" class="el-input__icon el-icon-search"></i>
    </el-input> -->
  </span>
</template>

<script>
export default {
  name:"searchbar",
  props:{
    width:{
      default:"100%",
      type:String
    },
    height:{
      default:"48",
      type:String
    }
  },
  components:{

  },
  data(){
    return{
      input:""
    }
  },
  methods:{
    
  }
}
</script>

<style lang="less" scoped>
.search{
  display: flex;
  .search-btn{
    width: 90px;
    height: 100%;
    background:#1B97EE ;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-icon-search{
      color: #fff;
      font-size: 20px;
    }
  }
  /deep/ .el-input__inner{
    height: 100%;
    line-height: 100%;
  }
}
</style>