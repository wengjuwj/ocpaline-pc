<template>
  <div class="pc-full-contain footer-contain">
    <div class="pc-contain">
      <div class="pc-footer-top">
          <div class="footer-top-logo">
            <el-image
            :src="require('@/assets/footlog.png')"
            fit="contian"></el-image>
          </div>
          <!--  -->
          <div class="pc-footer-right">
              <span>24小时服务热线: 15618292428</span>
          </div>
      </div>
      <!--  -->
      <div class="pc-footer-contain">
          <div class="footer-contain-left">
            <!-- link box -->
            <div class="link-box">
                <span class="link-item" v-for="(item,index) in footerLink" :key="index" @click="link(item)"> 
                  <span>{{item.text}}</span>
                </span>
            </div>
            <!-- adress box -->
            <div class="address-box">
              <span>地址: 上海市徐汇区中山西路2025号2405室</span>
              <span>/</span>
              <span>电话: 021-60390780</span>
            </div>
            <!-- copyright box -->
            <div class="copyright-box">
              <span>Copyright: 2016-2027</span>
              <span>古麻今醉</span>
              <span><a href="http://">沪ICP备17029187号</a></span>
              <router-link to='/live'><a>popop</a></router-link>
            </div>
          </div>
          <div class="footer-contain-right">
            <el-image
            :src="require('@/assets/code.png')"
            fit="contian"></el-image>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{

  },
  data(){
    return{
      footerLink:[
        {text:"首页",link:"/index"},
        {text:"重磅专栏",link:"/special"},
        {text:"应用新知",link:"/newKnowledge"},
        {text:"行业资讯",link:"/news"},
        {text:"录播",link:"/recorded"},
        {text:"直播",link:"/direact"},
      ]
    }
  },
  methods:{
    link(data){
      this.$router.push(data.link)
    }
  }
}
</script>

<style lang="less" scoped>
  .footer-contain{
    height: 248px;
    background: #465D71;
    // background-size: 100% 100%;
    .pc-footer-top{
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #7b8095;
      .footer-top-logo{
        max-width: 215px;
        .el-image{
          max-width: 100%;
        }
      }
    }
    .pc-footer-right{
      span{
        font-size: 22px;
        color: #1b97ee;
        font-weight: bold;
      }
    }
    .pc-footer-contain{
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      .footer-contain-left{
        color: #fff;
        flex: 1;
        .link-box{
          width: 100%;
          margin-bottom: 25px;
          .link-item{
            padding:0 15px;
            border-right: 1px solid #fff;
            cursor: pointer;
            &:first-child{
              padding-left: 0;
            }
            &:last-child{
              border: none;
            }
          }
        }
        .address-box,.copyright-box{
          width: 100%;
          margin-bottom: 10px;
          span:nth-child(2){
            margin:0 10px
          }
           a{color: #fff;}
        }
       
      }
      .footer-contain-right{
        max-width: 115px;
        .el-image{
          max-width: 100%;
        }
      }

    }
  }
</style>