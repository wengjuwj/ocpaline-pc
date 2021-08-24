<template>
  <div class="classification-area">
      <div class="classification-title" v-if="titleShow">
        <div>{{title}}</div>
        <div class="more" @click="moreEmit">{{more}}</div>
      </div>
      <div class="card-area">
          <div class="card-item" v-for="(item,index) in cardList" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <div @click="cardEmit">
              <div class="img-wrap" @click.stop="imgEmit">
                  <img :src="require('@/assets/card.png')" class="image">
                  <div class="mark" v-if="c==1">
                      <div>正在直播</div>
                  </div>
                </div>
                
                <div class="content-wrap">
                  <span class="title" @click.stop="titleEmit">慢性咳嗽与呼吸道感染诊治高峰论坛</span>
                  <div class="bottom clearfix">
                      <div class="tags-content">
                        <span @click.stop="tagsEmit">专家</span>
                        <span>宣讲</span>
                        <span>手术</span>
                      </div>
                      <div class="time">直播时间：<span>2021-07-16-12:30</span></div>
                      
                  </div>
                </div>
            </div>
          </el-card>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"cardcol",
  props:{
    titleShow:{
      type:Boolean,
      default:true
    },
    title: {
      type: String,
      default: '今日直播'
    },
    more: {
      type: String,
      default: '更多内容>>'
    },
    cardList: {
      type: Array,
      default: ()=>{
        return [1,2,3,4]
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
    moreEmit(){
      this.$emit("moretap")
    },
    cardEmit(){
      this.$emit("cardtap")
    },
    imgEmit(){
      this.$emit("imgtap")
    },
    titleEmit(){
      this.$emit("titletap")
    },
    tagsEmit(){
      this.$emit("tagtap")
    }
  }
}
</script>

<style lang="less" scoped>
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
            font-size: 14px;
            color: #999;
            margin-top: 10px;
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
            .time{
              margin-top: 10px;
            }

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