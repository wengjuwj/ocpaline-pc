<template>
  <div class="pc-full-contain">
    <!-- 直播视频部分 -->
    <div class="video-wrapper">
      <div class="pc-contain video-content">
        <!-- 左边 -->
        <div class="video-left">
           <div class="video-left-title">
              <div class="title-info">
                <div class="title-text">液术大讲堂-第七十七期</div>
                <div class="title-list">
                  <div class="list-item">
                    <label>直播间：</label><span class="live-title">古麻今醉直播间</span>
                  </div>
                  <div class="list-item">
                    <label>直播时间：</label><span>2021年07月2日</span>
                  </div>
                  <div class="list-item">
                    <span>2.36万人浏览</span>
                  </div>
                </div>
              </div>
              <div class="title-btns">
                  <div class="btn-item">关注</div>
              </div>
           </div>
           <!-- 视频部分 -->
           <div class="telelive-video">
              <video src="" width="100%" height="100%"></video>
           </div>
        </div>
        <!-- 右边 -->
        <div class="video-right">
          <div class="video-right-title">
              互动区
          </div>
          <div class="video-right-content">
            <!-- 未登录,未开播 /已登录，未开播-->
            <div class="video-notlogin-wrap" style="display:none">
                <!-- <div class="prompt"><span class="scan-btn">扫码登录</span>后发言</div>
                <div class="prompt">与讲师互动交流</div> -->
                <div class="img-wrap">
                  <el-image
                  class="code-img"
                  :src="require('@/assets/novideo.png')"
                  fit="contian"></el-image>
                  <p class="info-text">暂未开播哦~</p>
                </div>
            </div>
            <!-- 未登录，已开播/已登录，已开播 -->
            <div class="video-login-wrap"  >
              <!-- 互动区 -->
              <div class="dialog-area">
                <div class="dialog-content">
                  <!--  -->
                  <div class="dialog-item">
                    <div class="dialog-role">
                      <img class="dialog-role-avator" src="" alt="">
                      <div class="dialog-role-identity">讲师</div>
                      <div class="dialog-role-username">邵主任</div>
                    </div>
                    <!--  -->
                    <div class="dialog-text">
                      <div class="dialog-content">老师讲的非常好！</div>
                    </div>
                  </div>
                  <p class="message">2021-07-22 14:12</p>
                   <div class="dialog-item">
                    <div class="dialog-role">
                      <img class="dialog-role-avator" src="" alt="">
                      <!-- <div class="dialog-role-identity">讲师</div> -->
                      <div class="dialog-role-username">你好你好</div>
                    </div>
                    <!--  -->
                    <div class="dialog-text">
                      <div class="dialog-content">老师讲的非常好！</div>
                    </div>
                  </div>
                   <div class="dialog-item">
                    <div class="dialog-role">
                      <img class="dialog-role-avator" src="" alt="">
                      <!-- <div class="dialog-role-identity">讲师</div> -->
                      <div class="dialog-role-username">这么</div>
                    </div>
                    <!--  -->
                    <div class="dialog-text">
                      <div class="dialog-content">对对</div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="dialog-item dialog-right">
                    <!--  -->
                    <div class="dialog-text">
                      <div class="dialog-content">对对</div>
                    </div>
                  </div>
                </div>
                
              </div>
              <!-- 底部操作区 -->
              <div class="bottom-operation">
                  <div class="scan-code" style="display:none">
                      <div class="left-prompt">
                        <div class="prompt"><span class="scan-btn">扫码登录</span>后发言</div>
                        <div class="prompt">与讲师互动交流</div>
                      </div>
                      <div class="scan-img">
                        <el-image
                        class="code-img"
                        :src="require('@/assets/code.png')"
                        fit="contian"></el-image>
                      </div>
                  </div>
                  <!-- 输入框 -->
                  <div class="input-box">
                    <div class="input-content">
                      <el-input v-model="input" placeholder="我也来参与一下互动"></el-input>
                    </div>
                    <div class="operation">
                        <div class="operation-item">
                          <i class="icon el-icon-picture-outline-round"></i>
                        </div>
                        <!--  -->
                        <div class="operation-item">
                          <div class="send-btn">发送</div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
import SearchBar from '@/components/pc/SearchBar.vue'
export default {
    name:'direact',
    components:{
      SearchBar
    },
    data(){
      return{
        activeName:'first',
        input:''

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
    background: #000;
    .video-content{
      display: flex;
      padding: 40px 50px 20px 50px;
    }
    // 视频区
    .video-left{
      flex: 1;
      height: 600px;
      background: #2D2D2D;
      .video-left-title{
        padding: 12px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title-info{
          .title-text{
            color: #fff;
            font-size: 18px;
          }
          .title-list{
              display: flex;
              margin-top: 10px;
              color: #666;
              .list-item{
                &:first-child{
                  margin-left: 0;
                }
                margin-left: 30px;
              }
              .live-title{
                color:#FF742F ;
              }

            }
        }
        .title-btns{
          .btn-item{
            padding: 5px 24px;
            font-size: 18px;
            color: #fff;
            background: #FF742F;
            border-radius: 5px;
          }
        }
      }
      // 视频部分
      .telelive-video{
        width: 100%;
        height: calc(600px-77px);
        .video{
          width: 100%;
          height: 100%;
        }
      }
   
    }
    // 互动区
    .video-right{
      width: 300px;
      height: 600px;
      margin-left: 20px;
      background: #2D2D2D;
      .video-right-title{
        text-align: center;
        padding: 10px 0;
        width: 100%;
        background: #333333;
        color: #DDD;
      }
      .video-right-content{
        width: 100%;
        padding-top:1px ;
        height: calc(600px-40px);
        // 未开播
        .video-notlogin-wrap{
          margin-top: 120px;
          text-align: center;
          // .prompt{
          //   color: #DDD;
          //   margin-bottom: 6px;
          //   .scan-btn{
          //     color: #FF742F;
          //   }
          // }
          .img-wrap{
            margin-top: 50px;
            .code-img{
                max-width: 170px;
              }
              .info-text{
                color: #999;
                font-size: 16px;
              }
          } 
        }
        // 已开播
        .video-login-wrap{
          width: 100%;
          height: 100%;
          position: relative;
          // 互动区
          .dialog-area{
            width: 100%;
            height:460px;
            overflow-y: scroll;
            // border: 1px solid blue;
            .dialog-content{
              padding: 0 10px;
            }
            .dialog-item{
              padding: 15px 0;
              .dialog-role{
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                .dialog-role-avator{
                  width: 28px;
                  height: 28px;
                  border-radius: 50%;
                }
                .dialog-role-identity{
                  padding: 0 12px 2px 12px;
                  color: #fff;
                  background: #FF742F;
                  font-size: 12px;
                  border-radius: 3px;
                  margin-left: 10px;
                }
                .dialog-role-username{
                  margin-left: 10px;
                  color: #999;
                  font-size: 14px;
                }
              }
              // 
              .dialog-text{
                padding-left: 38px;
                display: flex;
                justify-content: flex-start;
                .dialog-content{
                  padding: 5px 14px;
                  background: #000;
                  border-radius: 5px;
                  color: #fff;
                  display: inline-block;
                }
              }
              &.dialog-right{
                .dialog-text{
                  justify-content: flex-end;
                }
              }
            }
            // 
            .message{
              text-align: center;
              color: #999;
              font-size: 12px;
              margin: 0;
            }
            /*滚动条样式*/
            &::-webkit-scrollbar {
                width: 4px;    
                /*height: 4px;*/
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                -webkit-box-shadow: inset 0 0 5px rgba(102,102,102,1);
                background: rgba(102,102,102,1);
            }
            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 5px rgba(102,102,102,1);
                border-radius: 0;
                background: rgba(0,0,0,0.1);

            }
          }
          .bottom-operation{
            width: 100%;
            height: 100px;
            position: absolute;
            bottom: 0;
            background: #333333;
            .scan-code{
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              .left-prompt{
                .prompt{
                  color: #DDD;
                  margin-bottom: 6px;
                  .scan-btn{
                    color: #FF742F;
                  }
                }
              }
              .scan-img{
                margin-left: 20px;
                .code-img{
                  max-width: 70px;
                }
              }
            }
            // 输入框部分
            .input-box{
              width: 100%;
              height: 100%;
              /deep/.el-input{
                .el-input__inner{
                  background-color: transparent;
                  border: none;
                }
              }
            }
            .operation{
              display: flex;
              justify-content: flex-end;
              align-items: center;
              .operation-item{
                margin-right: 18px;
                .icon{
                  color: #999;
                  font-size: 20px;
                }
                .send-btn{
                  padding:  2px 12px 5px 12px;
                  color: #fff;
                  background: #666;
                  border-radius: 3px;
                }
              }
            }
          }
        }
      }

    }
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