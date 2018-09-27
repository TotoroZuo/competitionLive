<template>
<el-container>
  <el-header class="layout-header">
    <el-menu :default-active="activeMenu" router class="header-tabs-box" active-text-color="#db2c30" text-color="#0778b8"  mode="horizontal">
        <el-menu-item index="/home" >首页</el-menu-item>
        <el-menu-item index="/soccer" >足球直播</el-menu-item>
        <el-menu-item index="/basketball" >篮球直播</el-menu-item>
        <el-menu-item index="/volleyball" >排球直播</el-menu-item>
        <el-menu-item index="/tennis" >网球直播</el-menu-item>
        <el-menu-item index="/snooker" >斯诺克直播</el-menu-item>
        <el-menu-item index="/badminton">羽毛球直播</el-menu-item>
        <el-menu-item index="/baseball" >棒球直播</el-menu-item>
        <el-menu-item index="/all" >综合直播</el-menu-item>
    </el-menu>
  </el-header>
  <el-main>
      <div class="layout-content-box">
          <div class="layout-navigation-box">
              <div class="navigation-box-one layout-paper navigation-box"   v-if="showNotice && !isDetail">
                  <h2 class="layout-paper-label">公告</h2>
                  <div class="navigation-box-content">
                      <a href="http://sports.sina.com.cn/g/pl/2018-09-27/doc-ifxeuwwr8586825.shtml" target="_blank" class="notice-link">9月26日英联杯集锦 热苏斯马赫雷斯建功</a>
                     <a href="http://sports.sina.com.cn/g/pl/2018-09-27/doc-ifxeuwwr8586825.shtml" target="_blank" class="notice-link">9月26日英联杯集锦 热苏斯马赫雷斯建功</a>
                     <a href="http://sports.sina.com.cn/g/pl/2018-09-27/doc-ifxeuwwr8586825.shtml" target="_blank" class="notice-link">9月26日英联杯集锦 热苏斯马赫雷斯建功</a>
                     <a href="http://sports.sina.com.cn/g/pl/2018-09-27/doc-ifxeuwwr8586825.shtml" target="_blank" class="notice-link">9月26日英联杯集锦 热苏斯马赫雷斯建功</a>
                     <a href="http://sports.sina.com.cn/g/pl/2018-09-27/doc-ifxeuwwr8586825.shtml" target="_blank" class="notice-link">9月26日英联杯集锦 热苏斯马赫雷斯建功</a>
                  </div>
              </div>
              <div class="navigation-box-one layout-paper navigation-box"  v-if="!isDetail">
                  <h2 class="layout-paper-label">体育频道</h2>
                  <div class="navigation-box-content">
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">CCT5</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">CCTV5+</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">北京体育</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">广东竞技</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">广东体育</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">上海五星体育</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">24小时冰雪频道</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">24小时篮球频道</el-button>
                      <el-button size="medium"   class="navigation-btns" type="text" plain @click="jumpURL('/detail')">24小时足球频道</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">亚运频道1</el-button>
                      <el-button size="medium"   class="navigation-btns" type="text" plain @click="jumpURL('/detail')">亚运频道2</el-button>
                      <el-button size="medium"   class="navigation-btns" type="text" plain @click="jumpURL('/detail')">亚运频道3</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/detail')">亚运频道4</el-button>
                      <el-button size="medium"   class="navigation-btns" type="text" plain @click="jumpURL('/detail')">亚运频道5</el-button>
                  </div>
              </div>
              <div class="navigation-box-two layout-paper navigation-box">
                  <h2 class="layout-paper-label">体育赛事直播导航</h2>
                  <div class="navigation-box-content">
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/so/qq')">腾讯体育直播</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/so/qqNBA')">腾讯NBA直播</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/so/qie')">企鹅体育直播</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/so/nba')">NBA直播</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/so/longzhu')">龙珠体育直播</el-button>
                      <el-button size="medium"  class="navigation-btns" type="text" plain @click="jumpURL('/so/pp')">PP体育直播</el-button>
                  </div>
              </div>
          </div>
          <div class="layout-view-box">
              <router-view ></router-view>
          </div>
      </div>
  </el-main>
  <el-footer><a href="/" style="color:#3a8ee6;">©球吧网</a></el-footer>
</el-container>

</template>
<script>
export default {
  data () {
    return {
      showNotice: true,
      isDetail: false,
      activeMenu: ''
    }
  },
  mounted () {
    this.chargePage()
  },
  methods: {
    chargePage () {
      this.showNotice = false
      this.isDetail = false
      if (this.$route.name === 'home') {
        this.showNotice = true
      }
      if (this.$route.name === 'detail' || this.$route.meta.isDetail) {
        this.isDetail = true
      }
      document.title = this.$route.meta.title
      this.activeMenu = this.$route.path
    },
    jumpURL (URL) {
      this.$router.push({ path: URL })
    }
  },
  watch: {
    '$route' (to, from) {
      this.chargePage()
    }
  }
}
</script>

<style lang="stylus">
.layout-header{
    text-align: center;
    border: 1px solid #adcbeb;
    background: linear-gradient(to bottom, #fff, #e4f0fd 100%);
}
.header-tabs-box{
    min-width 980px
    margin 0 auto!important
    background none!important
}
.layout-content-box{
    min-width 1000px
    margin 0 auto
}
@media (max-width: 1023px) {
    body{
        width 1023px
    }
}
@media (min-width: 1024px) and (max-width: 1200px) {
    .header-tabs-box,
    .layout-content-box{
        width 1000px
    }
}
@media (min-width: 1201px) and (max-width: 1440px) {

    .header-tabs-box,
    .layout-content-box{
        width: 83%;
    }
    .layout-content-box{
        display flex
        box-sizing border-box
    }
    .layout-navigation-box{
        width 300px
        margin-right 15px
    }
    .layout-view-box{
        flex 1

    }
}
@media (min-width: 1441px) {
    .header-tabs-box,
    .layout-content-box{
        width: 1200px;
    }
    .layout-content-box{
        display flex
    }
    .layout-navigation-box{
        width 300px
        margin-right 15px
    }
    .layout-view-box{
        flex 1
    }
}
.el-menu--horizontal .el-menu-item{
    margin-top 12px!important
    height 45px!important
    line-height 45px!important
    border-bottom none!important
}
.el-menu-item{
    font-size  1rem!important
    font-weight 400!important
}
.el-menu-item.is-active{
    background: linear-gradient(to bottom, #f2f8fe, #fff);
    border-radius: 5px 5px 0 0;
    border: 1px solid #c2d8f0;
    border-bottom: #fff;
}
.el-menu-item:hover{
    background: #ebeef5!important;
    color #db2c30!important
}
.el-footer {
    // background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
  }

  .layout-paper{
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    border: 1px solid #adcbeb;
  }
  .layout-paper-label{
    box-sizing border-box
    background: linear-gradient(to bottom, #fff, #e4f0fd 100%);
    border-bottom: 1px solid #adcbed;
    font-size 14px
    line-height 2.25
    font-weight normal
    text-align left
    padding 0 15px
    margin 0
  }
  .navigation-box-content{
      padding 15px
      margin 0
      text-align left
  }
  .el-button--text{
      padding 5px!important
  }
.el-button--text:hover{
    color: #c6e2ff !important;
    border:1px solid #3a8ee6!important;
}
.notice-link{
    display inline-block
    text-decoration none
    color #409EFF
    font-size 14px
    padding 5px
    width 100%
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
}
.notice-link:hover{
    color: #c6e2ff !important;
    text-decoration underline;
}
.el-button{
    border-radius 2px!important
}
.navigation-btns{
    width 120px
    margin-left 0!important
    margin-right 5px!important
    margin-bottom 5px!important
}
.navigation-box{
    margin-bottom  15px
}
.layout-view-box .el-table td,.layout-view-box .el-table th.is-leaf{
    border-bottom: 1px dotted #adcbeb !important;
}
.table-start-time{
    padding 3px 5px
    background #dddddd
    color #000
    border-radius 2px;
}
.table-status-live{
    background #67c23a
    color #fff
    padding 3px
    border-radius 2px;
    font-size 12px
    line-height 20px
    margin-top 2px
}
.table-status-wait{
    background red
    color #fff
    padding 3px
    border-radius 2px;
    font-size 12px
    line-height 20px
    margin-top 2px
}
.table-cate a{
    text-decoration none
    display inline-block
    background  #e5f3ff;
    cursor pointer
    padding 3px 5px
    border-radius 2px;
    color rgb(85, 26, 139)
}
.table-matche a{
    text-decoration none
    display inline-block
    cursor pointer
    padding 3px 5px
    color #333
    border-radius 2px;
}
.table-matche a:hover{
    background  red;
    color #fff
}
.list-table-box{
    margin-bottom 15px
}
</style>
