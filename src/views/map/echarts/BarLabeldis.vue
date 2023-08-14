<template>
    <div>
        <div class="echart" id="mychartdis" style=" float: left; width: 100%; height: 400px "></div>
    </div>
    

</template>

<script>
import * as echarts from "echarts";
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            xData: ["总距离(km)", "总时间(s)","总价格（元）"], //横坐标
            yData: this.myNumber, //人数数据
            taskDate: [] ,
        };
    },
    computed:{
        ...mapGetters([
            'otherNumber',
            'myNumber'
        ])
    },
    watch:{
        'otherNumber':function(){
            this.initEcharts()
        } 
    },
    mounted() {
        this.initEcharts();
    },
    methods: {
        initEcharts() {
            // 多列柱状图
            const mulColumnZZTData = {
                color: ['#61a0a8','#d48265'],
                xAxis: {
                    data: this.xData
                },
                // 图例
                legend: {
                    data: ["DRL", "CPACO"],
                    top: "0%"
                },
                yAxis:[
                    {
                    type: "value",
                    
                    nameTextStyle: {
                        color: "red",
                    },
                },
                    
                ] ,
                series: [
                    {
                        type: "bar", //形状为柱状图
                        data: this.myNumber[0],
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
                        data: this.otherNumber[0],
                        name: "CPACO", // legend属性
                        label: {
                            // 柱状图上方文本标签，默认展示数值信息
                            show: true,
                            position: "top"
                        }
                    }
                ]
            };
            const myChart = echarts.init(document.getElementById("mychartdis"));
            myChart.setOption(mulColumnZZTData);
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        }
    }
};
</script>
