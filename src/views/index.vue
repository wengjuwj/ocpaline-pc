<template>
  <div class="pc-full-contain">
     <!-- 大图部分 -->
     <div class="img-wrapper">
        <el-carousel>
          <el-carousel-item v-for="item in 4" :key="item">
             <el-image
              :src="require('@/assets/loop11.png')"
              fit="contian"></el-image>
          </el-carousel-item>
        </el-carousel>
     </div>
     <!-- 筛选部分 -->
     <div class="select-wrap pc-contain">
        <div class="select-area">
            <div class="select-item">
              <div class="label">全部：</div>
              <div class="select-item-content" 
              @click="select(selectIndex)"
              :class="[selectIndex==selectFlag?'active':'']"  
               v-for="(selectItem,selectIndex) in selectData" :key="selectIndex">
                {{selectItem.name}}
              </div>

            </div>
        </div>
        <!--卡片部分  -->
        <div class="classification-area">
            <div class="classification-title">
              <div>今日直播</div>
              <div class="more">更多内容>></div>
            </div>
            <div class="card-area">
               <div class="card-item" v-for="c in 8" :key="c">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="img-wrap">
                    <img :src="require('@/assets/card.png')" class="image">
                    <div class="mark" v-if="c==1">
                        <div>正在直播</div>
                    </div>
                  </div>
                  
                  <div class="content-wrap">
                    <span class="title">慢性咳嗽与呼吸道感染诊治高峰论坛</span>
                    <div class="bottom clearfix">
                        <div>主讲人：<span>111</span><span>222</span></div>
                        <div>时间：<span>2021-07-16-12:30</span></div>
                    </div>
                  </div>
                </el-card>
               </div>
            </div>
        </div>
         <div class="classification-area">
            <div class="classification-title">
              <div>往期回播</div>
              <div class="more">更多内容>></div>
            </div>
            <div class="card-area">
               <div class="card-item" v-for="c in 8" :key="c">
                <el-card :body-style="{ padding: '0px' }">
                  <div class="img-wrap">
                    <img :src="require('@/assets/card1.png')" class="image">
                    <!-- <div class="mark" >
                        <div>正在直播</div>
                    </div> -->
                  </div>
                  
                  <div class="content-wrap">
                    <span class="title">慢性咳嗽与呼吸道感染诊治高峰论坛</span>
                    <div class="bottom clearfix">
                        <div>主讲人：<span>111</span><span>222</span></div>
                        <div>时间：<span>2021-07-16-12:30</span></div>
                    </div>
                  </div>
                </el-card>
               </div>
            </div>
        </div>
        <!-- 直播预告 -->
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
     </div>
  </div>
</template>

<script>
export default {
    name:'index',
    components:{
      
    },
    data(){
      return{
        selectData:[
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
          {name:'外科',value:'',id:''},
        ],
        cardData:[
         
        ],
        selectFlag:null

      }
    },
    created(){
      
    },
    methods:{
      select(index){
        this.selectFlag=index
      }
    }
}
</script>

<style lang="less" scoped>
  .select-wrap {
    margin-top: 20px;
    margin-bottom: 20px;
    .select-area{
      border: 1px solid #E3ECF3;
      padding: 25px 0;
      margin-bottom: 20px;
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