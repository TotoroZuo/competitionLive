import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
import SO from './views/SO.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      },
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          meta: {
            title: '球吧网-首页'
          },
          component: () =>
            import('./views/Home.vue')
        },
        {
          path: 'soccer',
          name: 'soccer',
          meta: {
            title: '足球直播'
          },
          component: () =>
             import('./views/Soccer.vue')
        }, {
          path: 'basketball',
          name: 'basketball',
          meta: {
            title: '篮球直播'
          },
          component: () =>
             import('./views/Basketball.vue')
        }, {
          path: 'volleyball',
          name: 'volleyball',
          meta: {
            title: '排球直播'
          },
          component: () =>
             import('./views/Volleyball.vue')
        }, {
          path: 'tennis',
          name: 'tennis',
          meta: {
            title: '网球直播'
          },
          component: () =>
             import('./views/Tennis.vue')
        }, {
          path: 'snooker',
          name: 'snooker',
          meta: {
            title: '斯诺克直播'
          },
          component: () =>
             import('./views/Snooker.vue')
        }, {
          path: 'badminton',
          name: 'badminton',
          meta: {
            title: '羽毛球直播'
          },
          component: () =>
             import('./views/Badminton.vue')
        }, {
          path: 'baseball',
          name: 'baseball',
          meta: {
            title: '棒球直播'
          },
          component: () =>
             import('./views/Baseball.vue')
        }, {
          path: 'all',
          name: 'all',
          meta: {
            title: '综合直播'
          },
          component: () =>
             import('./views/All.vue')
        },
        {
          path: 'detail',
          name: 'detail',
          meta: {
            title: '直播详情'
          },
          component: () =>
            import('./views/Detail.vue')
        },
        {
          path: 'so',
          name: 'so',
          redirect: {
            name: 'qq'
          },
          component: SO,
          children: [{
            path: 'qq',
            name: 'qq',
            meta: {
              isDetail: true,
              title: '腾讯体育直播'
            },
            component: () => import('./views/QQ.vue')
          }, {
            path: 'qqNBA',
            name: 'qqNBA',
            meta: {
              isDetail: true,
              title: '腾讯NBA直播'
            },
            component: () => import('./views/QqNba.vue')
          }, {
            path: 'qie',
            name: 'qie',
            meta: {
              isDetail: true,
              title: '企鹅体育直播'
            },
            component: () => import('./views/Qie.vue')
          }, {
            path: 'nba',
            name: 'nba',
            meta: {
              isDetail: true,
              title: 'NBA直播'
            },
            component: () => import('./views/Nba.vue')
          }, {
            path: 'longzhu',
            name: 'longzhu',
            meta: {
              isDetail: true,
              title: '龙珠体育直播'
            },
            component: () => import('./views/Longzhu.vue')
          }, {
            path: 'pp',
            name: 'pp',
            meta: {
              isDetail: true,
              title: 'PP体育直播'
            },
            component: () => import('./views/Pp.vue')
          }]
        }
      ]

    }

  ]
})
