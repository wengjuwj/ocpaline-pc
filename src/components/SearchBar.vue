<template>
  <block>
    <el-input
      :style="{'width':width,'height':height+'px'}"
      placeholder="请输入搜索关键词"
      v-model="input1">
      <i slot="suffix" class="el-input__icon el-icon-search" @click="toSearchList"></i>
    </el-input>
  </block>
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
      default:"60",
      type:String
    }
  },
  components:{

  },
  data(){
    return{
      input1:""
    }
  },
  methods:{
    toSearchList(){
      this.$router.push('/searchlist')
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-input__inner{
  height: 100%;
  line-height: 100%;
}
/deep/ .el-input__icon{
  font-size: 22px;
  color: #1B97EE;
  padding-right: 10px;
  cursor: pointer;
}
</style>