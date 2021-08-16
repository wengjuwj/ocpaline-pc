<template>
  <div class="advance">
      <div class="classification-title">
        <div>直播预告</div>
        <div class="more">更多内容>></div>
      </div>
      <div class="card-area">
          <div class="card-item" v-for="c in 5" :key="c">
          <el-card :body-style="{ padding: '0px' }">
              <div class="card-selfdefine"> 
                <div class="card-left">
                  <img alt="" :src="require('@/assets/card1.png')">
                </div>
                <div class="card-right">
                    <div class="right-title">针对治好强直性脊柱炎的关键点剖析</div>
                    <div class="info">主讲人：<span>上海市第五人民医院 廖朱权主任</span></div>
                    <div class="info">时间：<span>2021-07-21-12:30</span></div>
                </div>
              </div>
          </el-card>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"",
  props:{
    titleShow:{
      type:String,
      default:true
    },
    title: {
      type: String,
      default: '直播预告'
    },
    more: {
      type: String,
      default: '更多>'
    },
    cardList: {
      type: Array,
      default: ()=>{
        return []
      }
    },
  },
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
  .advance .card-item{
      width: 49%;
      margin-left: 2%;
      &:nth-child(2n+1){
          margin-left: 0;
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
</style>