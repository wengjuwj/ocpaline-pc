<template>
  <div class="pc-full-contain">
    <!-- 直播视频部分 -->
    <div class="video-wrapper">
      
    </div>
    <!-- 选项卡切换部分 -->
    <div class="pc-contain">
      <div class="tabs-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="直播介绍" name="first">
              <div class="introduction-title">【主题】某某医院“精雕七次元”近视双激光手术直播</div>
              <!-- 介绍 content 部分 -->
              <div class="introduction-content">
                  <div class="introduction-left">
                    <img src="" alt="">
                  </div>
                  <div class="introduction_right">
                    <div class="item-title">面对面问诊</div>
                    <div class="item-text">医患面对面，1对N问诊，实时答疑</div>
                  </div>
              </div>
              <!-- 大图 -->
              <div class="detail-img">
                  <img src="" alt="">
              </div>
          </el-tab-pane>
          <el-tab-pane label="相关视频" name="second">
              <div class="relation-box">
                <div class="relation-item">
                    <div class="relation-left">
                        <img src="" alt="">
                    </div>
                    <div class="relation-right">
                        <div class="relation-title">血管内皮生长因子</div>
                        <div class="relation-speaker"><span>主讲人：</span><span>南京师范医科大学</span><span style="margin-left:10px">XXX主任</span></div>
                        <div class="relation-info"><span><i class="el-icon-video-play"></i></span><span style="margin-left:8px">2569次播放</span><span style="margin-left:15px">时间：2021-07-22 09:30</span></div>
                    </div>
                </div>
              </div>
          </el-tab-pane>
          <el-tab-pane label="评论（123）" name="third">
            <div class="comment-box">
              <div class="comment-item" v-for="item in 8" :key="item">
                <el-avatar :size="50" src="" class="avatar"></el-avatar>
                <div class="comment-info">
                  <div class="comment-info-title">一锅炖不下</div>
                  <div class="comment-info-content">讲的非常好</div>
                  <div class="comment-info-time">2020-9-18 20:30</div>
                </div>
                <div class="comment-operation">
                  <div class="operation-item"><i class="icon el-icon-warning-outline"></i>举报</div>
                  <div class="operation-item"><i class="icon el-icon-s-comment"></i></div>
                  <div class="operation-item"><i class="icon el-icon-s-opportunity"></i>699</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
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
        activeName:'first'

      }
    },
    created(){
      console.log('tag', 'ggg')
    }
}
</script>

<style lang="less" scoped>
  .video-wrapper{
    width: 100%;
    height: 670px;
    background: #000;
  }
  .tabs-box{
    padding: 10px 0;
    .introduction-title{
          font-size: 22px;
          text-align: center;
          padding: 15px 0;
    }
    .introduction-content{
      display: flex;
      align-items: center;
      .introduction-left{
        flex: 1;
        margin-right: 50px;
        height: 360px;
        border: 1px solid #ddd;
        img{
          max-width: 100%;
        }
      }
      .introduction_right{
        flex: 1;
        .item-title{
          // font-weight: bold;
          font-size: 18px;
        }
        .item-text{
          font-size: 14px;
          margin: 10px 0;
        }
      }
    }
    .detail-img{
      margin: 50px 0;
      display: flex;
      height: 676px;
      border: 1px solid #ddd;
      img{
        width: 100%;
      }
    }
  }
  .relation-box{
    margin: 20px 0;
    width: 100%;
    .relation-item{
      width: 100%;
      display: flex;
      align-items: center;
      .relation-left{
        width: 215px;
        height: 135px;
        border: 1px solid #ddd;
        img{
          width: 100%;
        }
      }
      .relation-right{
        flex: 1;
        margin-left: 30px;
        .relation-title{
          font-size: 18px;
        }
        .relation-speaker{
          color: #999;
          font-size: 14px;
          margin: 15px 0;
        }
        .relation-info{
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
  .comment-box{
    .comment-item{
      display: flex;  
      align-items: center; 
      border-bottom:1px solid #eee ;
      padding: 10px 0;
      &:last-child{
        border-bottom: none;
      }
      .avatar{
        margin-right: 20px;
      }
      .comment-info{
        flex: 1;
        .comment-info-title{
          font-size: 18px;
        }
        .comment-info-content{
          color: #999;
          font-size: 14px;
          margin: 10px 0;
        }
        .comment-info-time{
          color: #999;
          font-size: 14px;
        }
      }
      .comment-operation{
        display: flex;
        align-items: center;
        color: #999;
        .operation-item{
          margin-left: 20px;
        }
        .icon{
          margin-right: 5px;
        }
      }
    }
  }
  /deep/.el-tabs__nav-wrap::after{
    background-color: transparent;
  }
</style>