<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

import { dashBoard } from '@/api/form'
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },

  data() {
    return {
      chart: null,
      time :[],
      data:[[],[],[]]
    }
  },
  mounted() {
    this.initChart()
    this.updataData()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  
  watch: {
    'time': function () {
      // this.initChart()
      this.initChart()
      this.times()
    }
  },
  methods: {
    // 动态获取xData和yData
    updataData(){
      dashBoard().then(resposr => {
        if (resposr) {
          this.time.push(resposr.data[0][0])
          this.data[0].push(resposr.data[1][0])
          this.data[1].push(resposr.data[2][0])
          this.data[2].push(resposr.data[3][0])
          console.log(this.time,this.data);
        }
      })
    },
    // 定时器，数据发生变化时调用
    times() {
      return setTimeout(() => {
        this.updataData()
      }, 10 * 1000)
    },
    initChart() {
      
      this.chart = echarts.init(document.getElementById(this.id))
      // const xData = this.time
      const xData = ["10.11", "10.12", "10.13", "10.14", "10.15", "10.16", "10.17", "10.18", "10.19", "10.20", "10.21","10.22"]
      // (function() {
      //   const data = []
      //   for (let i = 1; i < 13; i++) {
      //     data.push(i + 'month')
      //   }
      //   return data
      // }())
      this.chart.setOption({
        backgroundColor: 'rgba(255,255,255,0)',
        title: {
          text: '物资数据统计',
          x: '20',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          borderWidth: 0,
          top: 80,
          bottom: 95,
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          x: '5%',
          top: '10%',
          textStyle: {
            color: '#90979c'
          },
          data: ['车辆配送', '无人机配送', '总配送物资']
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0

          },
          data: xData
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          splitArea: {
            show: false
          }
        }],
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [
            0
          ],
          bottom: 30,
          start: 20,
          end: 100,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: '#d3dee5'

          },
          textStyle: {
            color: '#fff' },
          borderColor: '#90979c'

        }, {
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: [{
          name: '车辆配送',
          type: 'bar',
          stack: 'total',
          barMaxWidth: 35,
          barGap: '10%',
          itemStyle: {
            normal: {
              color: 'rgba(255,144,128,1)',
              label: {
                show: true,
                textStyle: {
                  color: '#fff'
                },
                position: 'insideTop',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          // data: this.data
          // data: this.data[0]
          data:[
            709,
            917,
            455,
            610,
            719,
            433,
            544,
            285,
            208,
            372,
            484,
            478
          ]
        },

        {
          name: '无人机配送',
          type: 'bar',
          stack: 'total',
          itemStyle: {
            normal: {
              color: 'rgba(0,191,183,1)',
              barBorderRadius: 0,
              label: {
                show: true,
                position: 'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          // data: this.data[1]
          data:[
            27,
            76,
            57,
            80,
            80,
            42,
            24,
            90,
            101,
            51,
            81,
            60
          ]
        },
         {
           name: '总配送物资',
          type: 'line',
          stack: 'total',
          symbolSize: 10,
          symbol: 'circle',
          smooth: true,
          itemStyle: {
            normal: {
              color: 'rgba(252,230,48,1)',
              barBorderRadius: 0,
              label: {
                show: true,
                position: 'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          // data: this.data[2]
          data: [
            736,
            987,
            512,
            690,
            799,
            475,
            568,
            375,
            309,
            423,
            565,
            538,
            
          ]
        }
        ]
      })
    }
  }
}
</script>
