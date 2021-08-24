<template>
 <div class="pc-contain">
   <div class="tabs-contain">  
     <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="近期直播" name="first">
          <BoxCardLine :title-show="false"></BoxCardLine>
        </el-tab-pane>
        <el-tab-pane label="往期回看" name="second">
          <BoxCardCol :title-show="false"></BoxCardCol>
        </el-tab-pane>
        
      </el-tabs>
   </div>
   
 </div>
</template>

<script>
import BoxCardCol from '@/components/pc/BoxCardCol'
import BoxCardLine from '@/components/pc/BoxCardLine'
export default {
  name:"direactmore",
  components:{
    BoxCardCol,
    BoxCardLine
  },
  data(){
    return{
      activeName:'first',
    }
  },
  methods:{
    handleClick(){

    }
  }
}
</script>

<style lang="less" scoped>
.tabs-contain{
  margin-top: 20px;
}
/deep/ .el-tabs__item{
  font-size: 20px;
}
</style>