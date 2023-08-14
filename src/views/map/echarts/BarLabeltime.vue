<template>
    <div class="echart" id="mycharttime" :style="myChartStyle"></div>
</template>

<script>
import * as echarts from "echarts";
import { mapGetters } from 'vuex'
import { color } from 'echarts/lib/export';
export default {
    data() {
        return {
            xData: ["车辆数量", "无人机数量"], //横坐标
            yData: [1,2,3], //人数数据
            taskDate: [4,5,6],
            myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
        };
    },
    mounted() {
        this.initEcharts();
    },
    computed: {
        ...mapGetters([
            'otherNumber',
            'myNumber'
        ])
    },
    watch: {
        'otherNumber': function () {
            this.initEcharts()
        }
    },
    methods: {
        initEcharts() {
            // 多列柱状图
            const mulColumnZZTData = {
                color: ['#61a0a8', '#d48265'],
                xAxis: {
                    data: this.xData
                },
                // 图例
                legend: {
                    data: ["DRL", "CPACO"],
                    top: "0%"
                },
                yAxis: {
                    type:"value",
                    name:"数量（个）",
                    nameTextStyle: {
                        color: "red",
                    },
                },
                series: [
                    {
                        type: "bar", //形状为柱状图
                        data: this.myNumber[1],
                        barGap: "0%",
                        name: "DRL", // legend属性
                        label: {
                            // 柱状图上方文本标签，默认展示数值信息
                            show: true,
                            position: "top"
                        }
                    },
                    {
                        type: "bar", //形状为柱状图
                        data: this.otherNumber[1],
                        name: "CPACO", // legend属性
                        label: {
                            // 柱状图上方文本标签，默认展示数值信息
                            show: true,
                            position: "top"
                        }
                    }
                ]
            };
            const myChart = echarts.init(document.getElementById("mycharttime"));
            myChart.setOption(mulColumnZZTData);
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        }
    }
};
</script>
