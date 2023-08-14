const Mock = require('mockjs')
const number = Math.ceil(Math.random() * 5);
const List = []
const List1 = []
const MapMessage = []
const count = 99
const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    // id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  })
  )
}
// 
for (let i = 0; i < count; i++) {
  List1.push(Mock.mock({
    id: '@increment',
    sendGoodCustomNo: '@string("upper", 5)',
    sendGoodCustom: '@cname',
    acceptGoodCustom: '@cname',
    'acceptGoodCustomTel|1': '@string("number", 11)',
    acceptAddress: '@city(true)',
    weight: '@float(0, 10, 1, 2)',
    importance: '@integer(1, 3)',
    'state|1': ['待发', '待送', '未到'],
    actualDelivertData: '@now(yyyy-MM-dd)',
    pageviews: '@integer(300, 5000)',
  }))
}
// 自己写的调用接口
Mock.Random.extend({
  longitude: function () {
    var lng = '116.' + Mock.mock(/\d{6}/)// 自己写前缀哈
    var lat = '39.' + Mock.mock(/\d{6}/)
    return { lng, lat }//Number()
  }
})

// 使用 Mocks
// var Mock = require('mockjs')
for (let i = 0; i < number; i++) {
  MapMessage.push(Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'longitude': '@longitude'
    }]
  })
  )
}


var timeNumber = [[], [], [], []]

setInterval(function () {
  timeNumber = [[], [], [], []]

  var timestamp = new Date().getTime();
  var date = new Date(timestamp);
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  timeNumber[0].push(h + m + s)
  timeNumber[1].push(Math.ceil(Math.random() * 100))
  timeNumber[2].push(Math.ceil(Math.random() * 100))
  timeNumber[3].push(Math.ceil(Math.random() * 100))
}, 5 * 1000);


module.exports = [
  {
    url: '/vue-element-admin/article/list',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }
      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },
  {
    url: '/vue-element-admin/article/form',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: List1.length,
          items: List1
        }
      }
    }
  },
  {
    url: '/vue-element-admin/article/submit',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: '添加成功'
      }
    }
  },
  {
    url: '/vue-element-admin/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/perec/vrp',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: [
          [{ lng: 116.345241, lat: 39.89842 },
          { lng: 116.310123, lat: 39.868104 },
          { lng: 116.345973, lat: 39.854626 },
          { lng: 116.41451, lat: 39.851595 }],
        ],
      }
    }
  },

  {
    url: '/perec/vrp',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/dashboard/chart',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: timeNumber
      }
    },

  },
  {
    url: '/vue-element-admin/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

]

