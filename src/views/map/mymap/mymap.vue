<template>
    <div>
        <el-amap :center="center" :zoom="zoom" @init="init" class="amap-demo" mapStyle="amap://styles/blue">
            
        </el-amap>
    </div>
</template>
<script>
import { fetchlat } from '@/api/map'
import { color } from 'echarts/lib/export';
export default {
    data() {
        // 杭州
        // return {
        //     zoom: 15,
        //     center: [120.163297, 30.271647],
        //     map: null,
        //     LatLng: [120.163297, 30.271647],
        //     marker: null,
        //     allpoints: [
        //         [
        //             { lng: 120.157198, lat: 30.273649 },
        //             { lng: 120.157941, lat: 30.277727 },
        //             // { lng: 120.151304, lat: 30.281588 },
        //             { lng: 120.148231, lat: 30.277831 }
        //         ],
        //         [
        //             // { lng: 120.160628, lat: 30.270091 },
        //             { lng: 120.153283, lat: 30.267138 },
        //             { lng: 120.157926, lat: 30.262996 },
        //             // { lng: 120.155854, lat: 30.268351 },
        //             // { lng: 120.160299, lat: 30.265969 },
        //             { lng: 120.161215, lat: 30.263503 },
        //             // { lng: 120.159956, lat: 30.26016 }
        //         ],
        //         [
        //             { lng: 120.167054, lat: 30.269413 },
        //             { lng: 120.168862, lat: 30.268072 },
        //             { lng: 120.172436, lat: 30.257931 },
        //             { lng: 120.185832, lat: 30.260091 },
        //             { lng: 120.186272, lat: 30.267139 }
        //         ]],
        //     allpoint: [
        //         { "lng": 116.404, "lat": 39.915, "weight": 0.0 },
        //         { "lng": 116.44401, "lat": 39.872035, "weight": 0.20 },
        //         { "lng": 116.443278, "lat": 39.896736, "weight": 0.10 },
        //         { "lng": 116.345241, "lat": 39.89842, "weight": 0.21 },
        //         { "lng": 116.310123, "lat": 39.868104, "weight": 0.25 },
        //         { "lng": 116.345973, "lat": 39.854626, "weight": 0.27 },
        //         { "lng": 116.34451, "lat": 39.831595, "weight": 0.32 },
        //         { "lng": 116.287443, "lat": 39.831033, "weight": 0.24 },
        //         { "lng": 116.343862, "lat": 39.828408, "weight": 0.29 },
        //         { "lng": 116.421869, "lat": 39.832152, "weight": 0.25 },
        //         { "lng": 116.434869, "lat": 39.863212, "weight": 0.28 }
        //     ],

        //     UavLine: [
        //         [
        //             [120.157941, 30.277727],
        //             [120.151304, 30.281588],
        //             [120.148231, 30.277831]
        //         ],
        //     [
                
        //         [120.157926, 30.262996],
        //         [120.160299, 30.265969],
        //         [120.161215, 30.263503],
        //     ], [
             
        //         [120.172436, 30.257931],
        //         [120.173641, 30.262332],
        //         [120.185832, 30.260091],
        //     ],
        //     ],
            
        // };
        // 成都
        // return {
        //     zoom: 15,
        //     center: [104.065902, 30.670795],
        //     map: null,
        //     LatLng: [104.065902, 30.670795],
        //     marker: null,
        //     allpoints: [
        //         [
        //             { lng: 104.060366, lat: 30.671949, weight: 0.3 },

        //             { lng: 104.059527, lat: 30.680527, weight: 0.3 },
        //             { lng: 104.055268, lat: 30.691342, weight: 0.3 },
        //             // { lng: 104.073322, lat: 30.694497, weight: 0.3 },
        //         ],
        //         [
        //             { lng: 104.065567, lat: 30.667041, weight: 0.3 },
        //             { lng: 104.059485, lat: 30.659513, weight: 0.3 },
        //             { lng: 104.060691, lat: 30.656403, weight: 0.3 },
        //             // { lng: 104.065152, lat: 30.650131, weight: 0.3 },
        //             { lng: 104.06736, lat: 30.652121, weight: 0.3 },
        //             { lng: 104.073237, lat: 30.657586, weight: 0.3 },


        //         ],
        //         [
        //             { lng: 104.070806, lat: 30.67134, weight: 0.3 },
        //             { lng: 104.078427, lat: 30.669729, weight: 0.3 },
        //             { lng: 104.084668, lat: 30.668721, weight: 0.3 },
        //             { lng: 104.090816, lat: 30.665876, weight: 0.3 },
        //             { lng: 104.082693, lat: 30.662133, weight: 0.3 },
        //             { lng: 104.076587, lat: 30.666682, weight: 0.3 },

        //         ]],

        //     allpoint: [
        //         { lng: 104.065902, lat: 30.670795, weight: 0.3 },
        //         { lng: 104.061595, lat: 30.675423, weight: 0.3 },
        //         { lng: 104.05587, lat: 30.678959, weight: 0.3 },
        //         { lng: 104.061291, lat: 30.68145, weight: 0.3 },
        //         { lng: 104.0589, lat: 30.685966, weight: 0.3 },
        //         { lng: 104.066085, lat: 30.689343, weight: 0.3 },
        //         { lng: 104.073322, lat: 30.694497, weight: 0.3 },
        //         { lng: 104.065567, lat: 30.667041, weight: 0.3 },
        //         { lng: 104.059485, lat: 30.659513, weight: 0.3 },
        //         { lng: 104.060459, lat: 30.663964, weight: 0.3 },
        //         { lng: 104.057559, lat: 30.659154, weight: 0.3 },
        //         { lng: 104.060691, lat: 30.656403, weight: 0.3 },
        //         { lng: 104.057058, lat: 30.65961, weight: 0.3 },
        //         { lng: 104.070806, lat: 30.67134, weight: 0.3 },
        //         { lng: 104.075914, lat: 30.668991, weight: 0.3 },
        //         { lng: 104.076926, lat: 30.670424, weight: 0.3 },
        //         { lng: 104.078427, lat: 30.669729, weight: 0.3 },
        //         { lng: 104.084668, lat: 30.668721, weight: 0.3 },
        //         { lng: 104.086003, lat: 30.67059, weight: 0.3 },
        //         { lng: 104.09347, lat: 30.677438, weight: 0.3 },
        //     ],

        //     UavLine: [
        //         [
        //             [104.055268, 30.691342],
        //             [104.073322, 30.694497],
        //             [104.065902, 30.670795],
        //         ],
        //         [
        //             [104.060691, 30.656403],
        //             [104.065152, 30.650131],
        //             [104.06736, 30.652121],
        //         ], [

        //             [104.078427, 30.669729],
        //             [104.09347, 30.677438],
        //             [104.090816, 30.665876],
        //         ],
        //     ],

        // };
        // 成都40
        return {
            zoom: 15,
            center: [104.065902, 30.670795],
            map: null,
            LatLng: [104.065902, 30.670795],
            marker: null,
            allpoints: [
                [{ lng: 104.061859, lat: 30.673553, weight: 0.3 },
                { lng: 104.059262, lat: 30.676602, weight: 0.3 },
                { lng: 104.061162, lat: 30.682489, weight: 0.3 },
                { lng: 104.057104, lat: 30.693862, weight: 0.3 },
                { lng: 104.053853, lat: 30.690256, weight: 0.3 },
                ],
                [
                    { lng: 104.07339, lat: 30.67192, weight: 0.3 },
                    { lng: 104.078234, lat: 30.673098, weight: 0.3 },
                    { lng: 104.088123, lat: 30.673103, weight: 0.3 },
                    { lng: 104.090842, lat: 30.676893, weight: 0.3 },
                    { lng: 104.088207, lat: 30.668386, weight: 0.3 },
                    { lng: 104.08286, lat: 30.669532, weight: 0.3 },
                ],
                [
                    { lng: 104.059817, lat: 30.670943, weight: 0.3 },
                    { lng: 104.054205, lat: 30.672023, weight: 0.3 },
                    { lng: 104.048078, lat: 30.672676, weight: 0.3 },
                    { lng: 104.052062, lat: 30.666971, weight: 0.3 },
                    { lng: 104.056444, lat: 30.668419, weight: 0.3 },
                    { lng: 104.060689, lat: 30.668377, weight: 0.3 },
                ], [
                    { lng: 104.072176, lat: 30.666675, weight: 0.3 },
                    { lng: 104.073841, lat: 30.660146, weight: 0.3 },
                    { lng: 104.08462, lat: 30.657168, weight: 0.3 },
                    { lng: 104.088358, lat: 30.659382, weight: 0.3 },
                    { lng: 104.092089, lat: 30.656879, weight: 0.3 },
                    { lng: 104.084072, lat: 30.647003, weight: 0.3 },
                    { lng: 104.071086, lat: 30.656316, weight: 0.3 },
                ]],
            allpoint: [
                { lng: 104.061859, lat: 30.673553, weight: 0.3 },
                { lng: 104.059262, lat: 30.676602, weight: 0.3 },
                { lng: 104.061162, lat: 30.682489, weight: 0.3 },
                { lng: 104.057104, lat: 30.693862, weight: 0.3 },
                { lng: 104.053853, lat: 30.690256, weight: 0.3 },
                { lng: 104.07339, lat: 30.67192, weight: 0.3 },
                { lng: 104.078234, lat: 30.673098, weight: 0.3 },
                { lng: 104.088123, lat: 30.673103, weight: 0.3 },
                { lng: 104.086503, lat: 30.676064, weight: 0.3 },
                { lng: 104.090842, lat: 30.676893, weight: 0.3 },
                { lng: 104.088207, lat: 30.668386, weight: 0.3 },
                { lng: 104.08286, lat: 30.669532, weight: 0.3 },
                { lng: 104.059817, lat: 30.670943, weight: 0.3 },
                { lng: 104.054205, lat: 30.672023, weight: 0.3 },
                { lng: 104.048078, lat: 30.672676, weight: 0.3 },
                { lng: 104.052062, lat: 30.666971, weight: 0.3 },
                { lng: 104.056444, lat: 30.668419, weight: 0.3 },
                { lng: 104.060689, lat: 30.668377, weight: 0.3 },
                { lng: 104.072176, lat: 30.666675, weight: 0.3 },
                { lng: 104.073841, lat: 30.660146, weight: 0.3 },
                { lng: 104.08462, lat: 30.657168, weight: 0.3 },
                { lng: 104.088358, lat: 30.659382, weight: 0.3 },
                { lng: 104.092089, lat: 30.656879, weight: 0.3 },
                { lng: 104.084072, lat: 30.647003, weight: 0.3 },
                { lng: 104.071086, lat: 30.656316, weight: 0.3 },
                { lng: 104.055094, lat: 30.682482, weight: 0.3 },
                { lng: 104.092224, lat: 30.671903, weight: 0.3 },
                { lng: 104.093328, lat: 30.64934, weight: 0.3 },
            ],
            UavLine: [
                [

                    [104.061162, 30.682489],
                    [104.055094, 30.682482],
                    [104.057104, 30.693862]
                ],
                [
                    [104.090842, 30.676893],
                    [104.092224, 30.671903],
                    [104.088207, 30.668386]

                ],
                [
                    [104.048078, 30.672676],
                    [104.041444, 30.668941],
                    [104.052062, 30.666971],

                ],
                [
                    [104.092089, 30.656879],
                    [104.093328, 30.64934],
                    [104.084072, 30.647003]
                ]
            ],

        };
        // 杭州 40
        // return {
        //     zoom: 15,
        //     center: [120.163297, 30.271647],
        //     map: null,
        //     LatLng: [120.163297, 30.271647],
        //     marker: null,
        //     allpoints: [
        //         [
        //             { lng: 120.157605, lat: 30.272054, weight: 0.3 },
        //             { lng: 120.156534, lat: 30.2752, weight: 0.3 },
        //             { lng: 120.154141, lat: 30.278731, weight: 0.3 },
        //             { lng: 120.147928, lat: 30.277888, weight: 0.3 },
        //             { lng: 120.141469, lat: 30.277643, weight: 0.3 },
        //             { lng: 120.141469, lat: 30.277643, weight: 0.3 },
        //             // { lng: 120.136644, lat: 30.2713, weight: 0.3 },
        //             { lng: 120.150765, lat: 30.270127, weight: 0.3 },
        //         ],
        //         [
        //             { lng: 120.166045, lat: 30.276521, weight: 0.3 },
        //             { lng: 120.171945, lat: 30.281731, weight: 0.3 },
                    
        //             { lng: 120.176725, lat: 30.27964, weight: 0.3 },
                    
        //             { lng: 120.182567, lat: 30.279884, weight: 0.3 },
        //             { lng: 120.178957, lat: 30.274141, weight: 0.3 },
                    
        //             { lng: 120.168388, lat: 30.269894, weight: 0.3 },
                    
                    
        //         ],
        //         [
        //             { lng: 120.167209, lat: 30.268862, weight: 0.3 },
        //             { lng: 120.170882, lat: 30.267336, weight: 0.3 },
        //             { lng: 120.175994, lat: 30.264659, weight: 0.3 },
                    
        //             // { lng: 120.181951, lat: 30.260816, weight: 0.3 },
        //             { lng: 120.181927, lat: 30.258135, weight: 0.3 },
        //             { lng: 120.175099, lat: 30.258038, weight: 0.3 },
        //             { lng: 120.171842, lat: 30.263156, weight: 0.3 },
        //         ],
        //         [
        //             { lng: 120.163543, lat: 30.264139, weight: 0.3 },
        //             { lng: 120.16379, lat: 30.258594, weight: 0.3 },
        //             { lng: 120.158599, lat: 30.258594, weight: 0.3 },
        //             { lng: 120.155705, lat: 30.263167, weight: 0.3 },
        //             // { lng: 120.147926, lat: 30.265801, weight: 0.3 },
        //         ]
        //     ],
        //     allpoint: [
        //         { lng: 120.163543, lat: 30.264139, weight: 0.3 },
        //         { lng: 120.16379, lat: 30.258594, weight: 0.3 },
        //         { lng: 120.158599, lat: 30.258594, weight: 0.3 },
        //         { lng: 120.155705, lat: 30.263167, weight: 0.3 },
        //         { lng: 120.147926, lat: 30.265801, weight: 0.3 },
        //         { lng: 120.167209, lat: 30.268862, weight: 0.3 },
        //         { lng: 120.170882, lat: 30.267336, weight: 0.3 },
        //         { lng: 120.175994, lat: 30.264659, weight: 0.3 },
        //         //{lng:120.184552,lat:30.265777,weight:0.3},
        //         { lng: 120.181951, lat: 30.260816, weight: 0.3 },
        //         { lng: 120.181927, lat: 30.258135, weight: 0.3 },
        //         { lng: 120.175099, lat: 30.258038, weight: 0.3 },
        //         { lng: 120.171842, lat: 30.263156, weight: 0.3 },
        //         { lng: 120.166045, lat: 30.276521, weight: 0.3 },
        //         { lng: 120.171945, lat: 30.281731, weight: 0.3 },
        //         { lng: 120.176725, lat: 30.27964, weight: 0.3 },
        //         { lng: 120.178957, lat: 30.274141, weight: 0.3 },
        //         { lng: 120.178027, lat: 30.285348, weight: 0.3 },
        //         { lng: 120.172147, lat: 30.271993, weight: 0.3 },
        //         { lng: 120.182567, lat: 30.279884, weight: 0.3 },
        //         { lng: 120.168388, lat: 30.269894, weight: 0.3 },
        //         { lng: 120.157605, lat: 30.272054, weight: 0.3 },
        //         { lng: 120.156534, lat: 30.2752, weight: 0.3 },
        //         { lng: 120.154141, lat: 30.278731, weight: 0.3 },
        //         { lng: 120.147928, lat: 30.277888, weight: 0.3 },
        //         { lng: 120.141469, lat: 30.277643, weight: 0.3 },
        //         { lng: 120.141469, lat: 30.277643, weight: 0.3 },
        //         { lng: 120.136644, lat: 30.2713, weight: 0.3 },
        //         { lng: 120.150765, lat: 30.270127, weight: 0.3 },
        //     ],
        //     UavLine: [
        //         [
        //             [120.141469, 30.277643],
        //             [120.136644, 30.2713],
        //             [120.150765, 30.270127]

        //         ],
        //         [

        //             [120.171945, 30.281731],
        //             [120.178027, 30.285348],
        //             [120.176725, 30.27964]

        //         ],
        //         [
        //             [120.175994, 30.264659],
        //             [120.184552, 30.265777],
        //             [120.181927, 30.258135]
        //         ],
        //         [
        //             [120.155705, 30.263167] ,
        //             [120.147926,30.265801]  ,
        //             [120.163297, 30.271647]
        //         ]
        //     ],

        // };
    },

    methods: {
        init(map) {
            let that = this
            that.map = map
        },
        button(allpoint) {
            var allpoint = this.allpoint
            var that = this
            fetchlat(allpoint).then(response => {
                if (response) {
                    this.$message({
                        message: response,
                        type: 'success'
                    })
                    // 更改车辆后端发过来的格式
                    let waypoints = []
                    for (let j = 0; j < response.obj.truck_route_list.length; ++j) {
                        let waypoint = []
                        for (let i = 1; i < response.obj.truck_route_list[j].length - 1; ++i) {
                            waypoint.push({ lng: response.obj.truck_route_list[j][i][0], lat: response.obj.truck_route_list[j][i][1] })
                        }
                        waypoints.push(waypoint)
                    }
                    that.allpoints = waypoints
                    console.log(waypoints);
                }
            })
        },

        Go() {
            let map = this.map
            let that = this
            let deliveryOrder = 0 //快递在运订单数
            var distance=0
            var time=0
            var driving = [] //存储行车路线
            var Uavpolyline = [] //存储无人机路线
            var LatLng = that.LatLng //起点终点一样
            var waypoints = [] //存储格式化以后的路线
            var allpoints = that.allpoints // 行车信息
            var linePlan = []
            var linePlanNumber = []
            var carNumber = 0
            var uavNumber = 0
            var dis = this.UavDistance()
            //数据格式为serch可识别的格式 
            for (let i = 0; i < allpoints.length; ++i) {
                let waypoint = []
                for (let j = 0; j < allpoints[i].length; ++j) {
                    waypoint.push(new AMap.LngLat(allpoints[i][j].lng, allpoints[i][j].lat))
                }
                waypoints.push(waypoint)
            }
            // 创建allpoints.length条线路
            for (let i = 0; i < allpoints.length; ++i) {
                driving[i] = new AMap.Driving({
                    map: map,
                    // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
                    policy: AMap.DrivingPolicy.LEAST_DISTANCE,
                    showTraffic: false,
                    outlineColor: 'green',
                    autoFitView: false,
                    // hideMarkers:true
                })
                driving[i].search(LatLng, LatLng, { waypoints: waypoints[i] }, function (status, result) {
                    // 未出错时，result即是对应的路线规划方案
                    // that.PatheExtraction(result.routes, i)
                    linePlanNumber.push(i)
                    linePlan.push(result.routes);
                    distance = distance + result.routes[0].distance
                    time = time + result.routes[0].time
                })
            }

            carNumber = carNumber + this.allpoints.length
            for (let i = 0; i < this.UavLine.length; ++i) {
                if (this.UavLine[i]) {
                    uavNumber += 1
                }
            }
            // 延时1S
            setTimeout(() => {
                that.$store.commit("mapMessage/myMap", [[distance, time, dis], [carNumber, uavNumber]])
            }, 1000)
                
            
            
            // 绘制无人机飞行路线
            for (let i = 0; i < that.UavLine.length; ++i) {
                if (that.UavLine[i].length) {
                    // 绘制轨迹
                    Uavpolyline[i] = new AMap.Polyline({
                        map: map,
                        path: that.UavLine[i],
                        showDir: true,
                        strokeColor: "#28F",  //线颜色
                        strokeOpacity: 0.6,     //线透明度
                        strokeWeight: 6,      //线宽
                        // strokeStyle: "solid"  //线样式
                    });
                    let marker = new AMap.Marker({
                        icon: "456.png",
                        position: that.UavLine[i][1],
                        offset: new AMap.Pixel(-13, -35)
                    });
                    marker.on('click', this.markerClick)
                    marker.setMap(map);
                }
            }

            for (let i = 0; i < allpoints.length; ++i) {
                deliveryOrder += allpoints[i].length
            }
            for (let i = 0; i < that.UavLine.length; ++i) {
                if (that.UavLine[i].length) {
                    deliveryOrder += that.UavLine[i].length - 2
                }
            }
            that.$store.commit("mapMessage/Revise", [deliveryOrder, allpoints.length])
            setTimeout(() => {
                this.PatheExtraction(linePlan, linePlanNumber)
                console.log(linePlanNumber);
            }, 1000);
        },

        markerClick(e){
            let map = this.map
            let message =null
            
            var geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                city: '010'
            })
            let lnglat = e.lnglat
              geocoder.getAddress(lnglat, function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    message = '物资地址：'+result.regeocode.formattedAddress + '<br/>物资重量：0.3kg<br/>'+'是否送达：已送达'

                    var infowindow1 = new AMap.InfoWindow({
                        content: message,
                        offset: new AMap.Pixel(10, -30),
                        autoMove:false,
                        isCustom:false
                    });
                    infowindow1.open(map,e.lnglat)
                }
            })    
             

        },


        // 无人机路线距离
        UavDistance() {
            let dis = 0
            var Uavline = this.UavLine
            for (let i = 0; i < Uavline.length; ++i) {
                if (Uavline[i].length != 0){
                    dis += AMap.GeometryUtil.distance(Uavline[i][0], Uavline[i][1]) + AMap.GeometryUtil.distance(Uavline[i][1], Uavline[i][2])
                }
            }
            return dis
        },
        // 获取一次路上的的路线，将路径中的经纬度取出，存到数组path中,serialNumber
        PatheExtraction(linePlan, linePlanNumber) {
            for (var ji = 0; ji < linePlan.length; ++ji) {
                let carline = linePlan[ji][0]
                var path = []
                var target = []
                for (let i = 0; i < carline.steps.length; ++i) {
                    for (let j = 0; j < carline.steps[i].tmcs.length; ++j) {
                        var polyline = carline.steps[i].tmcs[j].polyline
                        var Lng, Lat  //分别用于存储经纬度
                        var LngLat = []
                        var a = ''
                        for (let x = 0; x < polyline.length; ++x) {
                            if (polyline[x] == ',') {
                                Lng = Number(a)
                                LngLat.push(Lng)
                                a = ''
                            } else if (polyline[x] == ';') {
                                Lat = Number(a)
                                LngLat.push(Lat)
                                if (target[0] != LngLat[0] & target[1] != LngLat[1]) {
                                    path.push(LngLat)
                                }
                                LngLat = []
                                a = ''
                            } else if (x == polyline.length - 1) {
                                a = a + polyline[x]
                                Lat = Number(a)
                                LngLat.push(Lat)
                                target = LngLat
                                path.push(LngLat)
                                LngLat = []
                                a = ''
                            } else {
                                a = a + polyline[x]
                            }
                        }
                    }
                }
                this.CarAnimation(path, linePlanNumber[ji]) //设置完成行车路线后调用,ji是指具体哪条路线,path为车辆的路径
            }
        },
        // 设置行车的动画
        CarAnimation(path, serialNumber) {
            console.log(serialNumber);
            var that = this
            var UavLine = that.UavLine
            var allpoints = that.allpoints
            var flag = true
            var flag2 = true
            var flag3 = true
            var i = 0;
            var marker = new AMap.Marker({
                map: this.map,
                position: [116.379028, 39.865042],
                icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
                offset: new AMap.Pixel(-13, -26),
            });
            marker.moveAlong(path, {
                // 每一段的时长
                duration: 150,//可根据实际采集时间间隔设置
                // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
                autoRotation: true,
            })
            var passedPolyline = new AMap.Polyline({
                map: that.map,
                strokeColor: "#AF5",  //线颜色
                strokeWeight: 6,      //线宽
            });

            marker.on('moving', function (e) {
                passedPolyline.setPath(e.passedPath);
                // 判断行车数量
                if (path.length == e.passedPath.length & flag) {
                    that.$store.commit("mapMessage/CarNumber")
                    flag = false
                }
                // 判断派送订单数量
                if (flag2) {
                    if (Math.abs(e.passedPath[e.passedPath.length - 1].lng - allpoints[serialNumber][i].lng) < 0.0003 & Math.abs(e.passedPath[e.passedPath.length - 1].lat - allpoints[serialNumber][i].lat) < 0.0003) {
                        console.log('你好呀');
                        that.$store.commit("mapMessage/Delivery")
                        i = i + 1
                        if (i == allpoints[serialNumber].length) {
                            flag2 = false
                        }
                    }
                }
                // 判断派送订单数量
                if (UavLine[serialNumber].length) {
                    if (Math.abs(e.passedPath[e.passedPath.length - 1].lng - UavLine[serialNumber][0][0]) < 0.0003 & Math.abs(e.passedPath[e.passedPath.length - 1].lat - UavLine[serialNumber][0][1]) < 0.0003 & flag3) {
                        that.UavAnimation(that.UavLine[serialNumber])
                        flag3 = false
                    }
                }
            });
        },
        // 设置无人机动画
        UavAnimation(path) {
            // 创建 AMap.Icon 实例：
            var that = this
            var icon = new AMap.Icon({
                size: new AMap.Size(48, 30),    // 图标尺寸
                image: 'uav.png',  // Icon的图像
                // imageOffset: new AMap.Pixel(-24, -5),  // 图像相对展示区域的偏移量，适于雪碧图等
                imageSize: new AMap.Size(48, 30)   // 根据所设置的大小拉伸或压缩图片
            });
            var marker = new AMap.Marker({
                map: this.map,
                position: [116.379028, 39.865042],
                icon: icon,
                offset: new AMap.Pixel(-24, -15),
            });
            marker.moveAlong(path, {
                // 每一段的时长
                duration: 2000,//可根据实际采集时间间隔设置
                // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
                autoRotation: true,
            })

            var passedPolyline = new AMap.Polyline({
                map: that.map,
                strokeColor: "#AF5",  //线颜色
                strokeWeight: 6,      //线宽
            });
            marker.on('moving', function (e) {
                passedPolyline.setPath(e.passedPath);
                if (e.passedPath[e.passedPath.length - 1].lat == path[path.length - 1][1] & e.passedPath[e.passedPath.length - 1].lng == path[path.length - 1][0]) {
                    marker.hide()
                }
                if (e.passedPath[e.passedPath.length - 1].lat == path[path.length - 2][1] & e.passedPath[e.passedPath.length - 1].lng == path[path.length - 2][0]) {
                    that.$store.commit("mapMessage/Delivery")
                }
            });
        }
    }
};
</script>
<style scoped>
.amap-page-container {
    /* display: flex; */
    /* flex-direction:column; */
    flex-wrap: wrap;
    background: #dcdee0;
    /* text-align: center; */
    width: 100%;
}

.amap-page-container-card {
    width: 800px;
    /* display: flex; */
    width: 100%;
    text-align: center;
    /* justify-content: center; */
}

.amap-demo {
    margin-top: 20px;
    /* width: 100%; */
    height: 1000px;
    /* margin: auto; */
    
}


</style>
