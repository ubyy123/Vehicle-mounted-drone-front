import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import BaiduMap from 'vue-baidu-map'//使用的百度地图组件Vue Baidu Map
import Element from 'element-ui'

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import AMapLoader from '@amap/amap-jsapi-loader';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss'
// import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import VueAMap from '@vuemap/vue-amap';//引入高德地图
import '@vuemap/vue-amap/dist/style.css'
import VueAmapThree from '@vuemap/vue-amap/dist/three'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})

Vue.use(dataV)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'w8rhRcNoFe5vEg9RGBlr118IleShWzhA'
})
Vue.use(VueAMap);
Vue.use(VueAmapThree);
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// AMapLoader.load({
//   "key": "7954c2c409cbc4e15579ff1af4c68a7a",              // 申请好的Web端开发者Key，首次调用 load 时必填
//   "version": "2.0",       // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
//   "plugins": [],
//   "Loca": {                // 是否加载 Loca， 缺省不加载
//     "version": '2.0.0'  // Loca 版本，缺省 1.3.2
//   },
//   ecurityJsCode: '8cd7b8fe31b22a7a23db8ad76190e39e'
// });

VueAMap.initAMapApiLoader({
  key: '7954c2c409cbc4e15579ff1af4c68a7a',
  version: '2.0',
  plugins: ['AMap.Driving', 'AMap.MoveAnimation', 'AMap.Geocoder'],
  securityJsCode: '8cd7b8fe31b22a7a23db8ad76190e39e',
  "Loca": {                // 是否加载 Loca， 缺省不加载
    "version": '2.0.0'  // Loca 版本，缺省 1.3.2
  },
});


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
