<template>
  <div class="home-box">
      <div class="list-table-box layout-paper">
        <h2 class="layout-paper-label">09月26日 赛事</h2>
        <div class="list-table-content">
            <el-table
              :data="tableData"
              :show-header="false"
              empty-text="暂无赛事"
              style="width: 100%">
              <el-table-column
                prop="time"
                label="时间"
                align="center"
                width="70">
                <template slot-scope="scope">
                  <div class="table-start-time">
                    {{scope.row.time}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="赛事类别"
                width="110">
                <template slot-scope="scope">
                  <div class="table-cate">
                    <a :href="scope.row.cateUrl">{{scope.row.cate}}</a>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="game"
                width="150"
                min-width="150"
                label="赛事分类">
              </el-table-column>
              <el-table-column
                prop="matche"
                label="赛事场次">
                 <template slot-scope="scope">
                  <div class="table-matche">
                    <a :href="scope.row.url">{{scope.row.matche}}</a>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="quality"
                width="60"
                label="直播质量">
                <template slot-scope="scope">
                  <div :style="{color:scope.row.quality=='HD'?'red':'#000',fontWeight:600}">
                    [{{scope.row.quality}}]
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="status"
                width="70"
                label="赛事状态">
                <template slot-scope="scope">
                  <div :class="scope.row.status ? 'table-status-live':'table-status-wait'">
                    {{scope.row.status ? 'LIVE':'未开始'}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="url"
                width="100"
                label="直播地址">
                <template slot-scope="scope">
                  <div style="padding-top:5px;">
                      <el-button size="medium"   type="text" plain @click="jumpLive(scope.row.url)">观看直播</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
        </div>
      </div>
      <div class="list-table-box layout-paper">
        <h2 class="layout-paper-label">09月27日 赛事</h2>
        <div class="list-table-content">
            <el-table
              :data="tableData2"
              :show-header="false"
              empty-text="暂无赛事"
              style="width: 100%">
              <el-table-column
                prop="time"
                label="时间"
                align="center"
                width="70">
                <template slot-scope="scope">
                  <div class="table-start-time">
                    {{scope.row.time}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="赛事类别"
                width="110">
                <template slot-scope="scope">
                  <div class="table-cate">
                    <a :href="scope.row.cateUrl">{{scope.row.cate}}</a>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="game"
                width="150"
                min-width="150"
                label="赛事分类">
              </el-table-column>
              <el-table-column
                prop="matche"
                label="赛事场次">
                 <template slot-scope="scope">
                  <div class="table-matche">
                    <a :href="scope.row.url">{{scope.row.matche}}</a>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="quality"
                width="60"
                label="直播质量">
                <template slot-scope="scope">
                  <div :style="{color:scope.row.quality=='HD'?'red':'#000',fontWeight:600}">
                    [{{scope.row.quality}}]
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="status"
                width="70"
                label="赛事状态">
                <template slot-scope="scope">
                  <div :class="scope.row.status ? 'table-status-live':'table-status-wait'">
                    {{scope.row.status ? 'LIVE':'未开始'}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="url"
                width="100"
                label="直播地址">
                <template slot-scope="scope">
                  <div style="padding-top:5px;">
                      <el-button size="medium"  type="text" plain @click="jumpLive(scope.row.url)">观看直播</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
        </div>
      </div>
      <div class="list-table-box layout-paper">
        <h2 class="layout-paper-label">09月28日 赛事</h2>
        <div class="list-table-content">
            <el-table
              :data="tableData3"
              :show-header="false"
              empty-text="暂无赛事"
              style="width: 100%">
              <el-table-column
                prop="time"
                label="时间"
                align="center"
                width="70">
                <template slot-scope="scope">
                  <div class="table-start-time">
                    {{scope.row.time}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="赛事类别"
                width="110">
                <template slot-scope="scope">
                  <div class="table-cate">
                    <a :href="scope.row.cateUrl">{{scope.row.cate}}</a>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="game"
                width="150"
                min-width="150"
                label="赛事分类">
              </el-table-column>
              <el-table-column
                prop="matche"
                label="赛事场次">
                 <template slot-scope="scope">
                  <div class="table-matche">
                    <a :href="scope.row.url">{{scope.row.matche}}</a>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="quality"
                width="60"
                label="直播质量">
                <template slot-scope="scope">
                  <div :style="{color:scope.row.quality=='HD'?'red':'#000',fontWeight:600}">
                    [{{scope.row.quality}}]
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="status"
                width="70"
                label="赛事状态">
                <template slot-scope="scope">
                  <div :class="scope.row.status ? 'table-status-live':'table-status-wait'">
                    {{scope.row.status ? 'LIVE':'未开始'}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="url"
                width="100"
                label="直播地址">
                <template slot-scope="scope">
                  <div style="padding-top:5px;">
                      <el-button size="medium"  type="text" plain @click="jumpLive(scope.row.url)">观看直播</el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'qq',
  data () {
    return {
      tableData2: [],
      tableData: [{
        time: '13:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '乌兹别克塔什干公开赛 - 2号场地',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '13:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '乌兹别克塔什干公开赛 - 中央场地',
        quality: 'HD',
        status: 1,
        url: '/baminton'
      },
      {
        time: '14:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '乌兹别克塔什干公开赛 - 中央场地',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '14:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '台中璞园 VS 辽宁衡润',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '14:30',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '2018 KPL秋季赛常规赛第3周第2比赛日',
        quality: 'HD',
        status: 0,
        url: '/detail'
      },
      {
        time: '14:30',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '贾德•特朗普 VS 颜丙涛',
        quality: 'SD',
        status: 0,
        url: '/detail'
      }
      ],
      tableData3: [{
        time: '13:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '乌兹别克塔什干公开赛 - 2号场地',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '13:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '乌兹别克塔什干公开赛 - 中央场地',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '14:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '乌兹别克塔什干公开赛 - 中央场地',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '14:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '台中璞园 VS 辽宁衡润',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '14:30',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '2018 KPL秋季赛常规赛第3周第2比赛日',
        quality: 'HD',
        status: 0,
        url: '/detail'
      },
      {
        time: '14:30',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '贾德•特朗普 VS 颜丙涛',
        quality: 'SD',
        status: 0,
        url: '/detail'
      }, {
        time: '13:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '乌兹别克塔什干公开赛 - 2号场地',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '13:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '乌兹别克塔什干公开赛 - 中央场地',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '14:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '乌兹别克塔什干公开赛 - 中央场地',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '14:00',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '台中璞园 VS 辽宁衡润',
        quality: 'HD',
        status: 1,
        url: '/detail'
      },
      {
        time: '14:30',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '2018 KPL秋季赛常规赛第3周第2比赛日',
        quality: 'HD',
        status: 0,
        url: '/detail'
      },
      {
        time: '14:30',
        cate: '龙珠体育',
        cateUrl: '/baminton',
        game: '国际羽联巡回赛',
        matche: '贾德•特朗普 VS 颜丙涛',
        quality: 'SD',
        status: 0,
        url: '/detail'
      }]
    }
  },
  methods: {
    jumpLive (url) {
      window.open(url)
    }
  }
}
</script>
