<template>
  <div class="pc-full-contain">
    <!-- 大图部分 -->
    <div class="img-big-wrapper">
      <img src="" alt="">
      <div class="login-box">
        <i class="icon el-icon-user" />登录
      </div>
    </div>
     <!-- 走马灯部分 -->
     <!-- <div class="img-wrapper">
        <el-carousel>
          <el-carousel-item v-for="item in 4" :key="item">
             <el-image
              :src="require('@/assets/loop11.png')"
              fit="contian"></el-image>
          </el-carousel-item>
        </el-carousel>
     </div> -->
     <!-- 筛选部分 -->
     <div class="select-wrap pc-contain">
        <div class="select-area">
            <div class="select-item">
              <div class="label">全部：</div>
              <div class="select-item-content" 
              @click="select(selectIndex1,1)"
              :class="[selectIndex1==selectFlag?'active':'']"  
               v-for="(selectItem1,selectIndex1) in selectData" :key="selectIndex1">
                {{selectItem1.name}}
              </div>
            </div>
        </div>
        <div class="select-area">
            <div class="select-item">
              <div class="label">全部：</div>
              <div class="select-item-content" 
              @click="select(selectIndex2,2)"
              :class="[selectIndex2==selectFlagSeconed?'active':'']"  
               v-for="(selectItem2,selectIndex2) in selectedSeconed" :key="selectIndex2">
                {{selectItem2.name}}
              </div>
            </div>
        </div>
        <BoxCardLine title="近期直播"></BoxCardLine>
        <BoxCardCol title="往期回看"></BoxCardCol>
     </div>
  </div>
</template>

<script>
import {getClassification} from '@/api/index'
import BoxCardCol from '@/components/BoxCardCol'
import BoxCardLine from '@/components/BoxCardLine'

export default {
    name:'index',
    components:{
      BoxCardCol,
      BoxCardLine
    },
    data(){
      return{
        selectData:[
          {name:'外科',value:'',id:'',seconed:[
            {name:'二级1',value:'',id:''},
            {name:'二级2',value:'',id:''},
            {name:'二级3',value:'',id:''},
            ]
          },
          {name:'液术大讲堂',value:'',id:'',seconed:[
            {name:'二级1',value:'',id:''},
            {name:'二级2',value:'',id:''},
            {name:'二级3',value:'',id:''},
            ]
          },
          {name:'恒瑞国际会议',value:'',id:'',seconed:[
            {name:'二级1',value:'',id:''},
            {name:'二级2',value:'',id:''},
            {name:'二级3',value:'',id:''},
            ]
          },
        ],
        selectedSeconed:[],
        cardData:[],
        selectFlag:null,
        selectFlagSeconed:null

      }
    },
    created(){
      this.getList()
    },
    methods:{
      select(index,level){
        if(level==1){
          this.selectFlag=index
          this.selectedSeconed=this.selectData[this.selectFlag].seconed
        }
        if(level==2){
          this.selectFlagSeconed=index
        }
      },
      getList(){
        getClassification({}).then(response => {
          console.log('response', response)
        })
      }
    }
}
</script>

<style lang="less" scoped>
.img-big-wrapper{
  width: 100%;
  height: 800px;
  position: relative;
  box-sizing: border-box;
  img{
    width: 100%;
    height: 100%;
  }
  .login-box{
    position: absolute;
    top: 32px;
    right: 48px;
    padding: 9px 24px;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    color: #fff;
    .icon{
      padding-right: 5px;
      font-size: 18px;
    }
  }
}
  .select-wrap {
    margin-top: 20px;
    margin-bottom: 20px;
    .select-area{
      border: 1px solid #E3ECF3;
      padding: 25px 0;
      margin-bottom: 20px;
      &:first-child{
        margin-bottom: 0;
      }
      &:not(:first-child){
        border-top: none;
      }
      .select-item{
        display: flex;
        flex-wrap: wrap;
        .label{
          padding-left:15px;
          height: 25px;
          line-height: 22px;
          margin-left: 10px;
        }
        .select-item-content{
          height: 25px;
          padding: 0 15px;
          border-radius: 15px;
          background: transparent;
          line-height: 24px;
          margin-left: 10px;
          font-size: 14px;
          cursor: pointer;
          &.active{
            background: #1B97EE;
            color: #fff;
          }
        }
      }
    }
  }
   // 卡片部分
  .classification-area{
    .card-item{
        margin-left:2%;
        width: 32%;
        &:nth-child(3n+1){
          margin-left: 0;
        }
    }
  }
    // title
    .classification-title{
      padding-left: 18px;
      font-size: 20px;
       border-left: 4px solid #1678D3;
       display: flex;
       align-items: center;
       justify-content: space-between;
       .more{
         font-size: 14px;
         color: #999;
         cursor: pointer;
       }
    }
    .card-area{
      margin: 20px 0;
      display: flex;
      flex-wrap: wrap;
      .card-item{
        cursor: pointer;
        margin-bottom: 20px;
        .img-wrap{
          width: 100%;
          height: 175px;
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          .mark{
            position: absolute;
            top: 20px;
            right: 20px;
            width: 30%;
            height: 30px;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            justify-content: center;
            display: flex;
            align-items: center;
          }
        }
        .content-wrap{
          padding: 14px;
          .title{
             font-size: 16px;
          }
          .bottom{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #999;
            margin-top: 10px;
            span{
              margin-right: 6px;
            }
          }
        }
        // 左右排列的卡片样式
        .card-selfdefine{
          display: flex;
          padding: 15px;
          align-items: center;
          .card-left{
            width: 38%;
            height: 126px;
           img{
              max-width: 100%;
              height: 100%;
              border-radius: 15px;
           }
          }
          .card-right{
            margin-left: 10px;
            .right-title{
              font-size: 16px;
              margin-bottom: 30px;
            }
            .info{
              font-size: 14x;
              color: #999;
              margin-top: 10px;
            }
          }
        }
      }
    }

   .advance .card-item{
      width: 49%;
      margin-left: 2%;
      &:nth-child(2n+1){
          margin-left: 0;
        }
    }
</style>