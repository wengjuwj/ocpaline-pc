<template>
  <div class="pc-full-contain">
    <div>
        <div class="pc-contain">
            <div class="breadcrumb-box">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>关键词搜索</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </div>
     
     <!-- 搜索结果 -->
     <div class="search-content">
       <div class="pc-contain">
         <div class="total-show">
           共有<span>12</span>门包含“<span>甲沟炎</span>”的直播课程
         </div>
          <div class="card-item" v-for="(item,index) in cardList" :key="index">
            <el-card :body-style="{ padding: '0px' }">
                <div class="card-selfdefine" @click="cardEmit"> 
                  <div class="card-left" @click.stop="imgEmit">
                    <img alt="" :src="require('@/assets/card1.png')">
                    <div class="mark" v-if="c==1">
                        <div>今日直播</div>
                    </div>
                  </div>
                  <div class="card-right">
                      <div class="right-title" @click.stop="titleEmit">针对治好强直性脊柱炎的关键点剖析</div>
                      <div class="tags-content">
                        <span @click.stop="tagsEmit">专家</span>
                        <span>宣讲</span>
                        <span>手术</span>
                      </div>
                      <!-- <div class="info">主讲人：<span>上海市第五人民医院 廖朱权主任</span></div> -->
                      <div class="info">时间：<span>2021-07-21-12:30</span></div>
                  </div>
                </div>
            </el-card>
            </div>
       </div>
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
      cardList:[1,2,3,4]
    }
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
  .breadcrumb-box{
      padding: 25px 0 15px 0;
      
      /deep/ .el-breadcrumb{
        font-size: 14px;
      }
  }
  .search-content{
    width: 100%;
    box-shadow: -7px -2px 7px #e6e6e6;
    background: #F6F6F6;
    .total-show{
      padding: 30px 0;
      font-size: 14px;
      color: #999;
      span{
        color: #1B97EE;
      }
    }
  }
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
          // padding: 15px;
          align-items: center;
          .card-left{
            width: 38%;
            height: 245px;
            position: relative;
             .mark{
              position: absolute;
              top: 0;
              left: 0;
              width: 40%;
              height: 30px;
              border-radius: 15px 0;
              background: linear-gradient(#1678D3,#1B97EE);
              color: #fff;
              justify-content: center;
              display: flex;
              align-items: center;
            }
           img{
              max-width: 100%;
              height: 100%;
              border-radius: 15px 0 0 15px;
           }
          }
          .card-right{
            margin-left: 10px;
            .right-title{
              font-size: 16px;
              margin-bottom: 30px;
            }
            .tags-content{
              span{
                padding:0 7px 0 7px;
                background: #d5ecfd;
                color: #1B97EE;
                border-radius: 2px;
                margin-right: 10px;
                &:last-child{
                  margin-right: 0;
                }
              }
            }
            .info{
              font-size: 14x;
              color: #999;
              margin-top: 10px;
            }
          }
        }
      }
</style>