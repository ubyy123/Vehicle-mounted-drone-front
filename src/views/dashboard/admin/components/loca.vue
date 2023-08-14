<!-- <template>
    <div id="map"></div>
</template>
<script>
export default {
    data(){
        map:null
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            var map = new AMap.Map('map', {
                zoom: 11.7,
                center: [113.97199630737305, 22.5807295363949],
                pitch: 40,
                showLabel: false,
                mapStyle: 'amap://styles/blue',
                viewMode: '3D',
            });
            var loca = new Loca.Container({
                map,
            });
            // 蓝色普通点
            var geo = new Loca.GeoJSONSource({
                url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road.json',
            });
            var scatter = new Loca.ScatterLayer({
                zIndex: 111,
                opacity: 1,
                visible: true,
                zooms: [2, 22],
            });
            scatter.setSource(geo);
            scatter.setStyle({
                color: 'rgba(43,156,75,1)',
                unit: 'meter',
                size: [150, 150],
                borderWidth: 0,
            });
            loca.add(scatter);
            // 红色呼吸点
            var geoLevelF = new Loca.GeoJSONSource({
                // data: [],
                url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_F.json',
            });
            var breathRed = new Loca.ScatterLayer({
                loca,
                zIndex: 113,
                opacity: 1,
                visible: true,
                zooms: [2, 22],
            });
            breathRed.setSource(geoLevelF);
            breathRed.setStyle({
                unit: 'meter',
                size: [2600, 2600],
                borderWidth: 0,
                texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
                duration: 500,
                animate: true,
            });
            // 黄色呼吸点
            var geoLevelE = new Loca.GeoJSONSource({
                // data: [],
                url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_E.json',
            });
            var breathYellow = new Loca.ScatterLayer({
                loca,
                zIndex: 112,
                opacity: 1,
                visible: true,
                zooms: [2, 22],
            });
            breathYellow.setSource(geoLevelE);
            breathYellow.setStyle({
                unit: 'meter',
                size: [1000, 1000],
                borderWidth: 0,
                texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_yellow.png',
                duration: 1000,
                animate: true,
            });
            // 启动渲染动画
            loca.animate.start();
        }
    }
}
</script>
<style>
#map{
    height: 500px;
    width: 50%;
}
</style> -->

<template>
    <div >
        <el-amap :zoom="zoom" :center="center" :show-label="false" class="amap-demo" mapStyle="amap://styles/darkblue">
            <el-amap-loca @init="initLoca">
                <el-amap-loca-scatter :visible="visible" :source-url="redSourceUrl" :layer-style="redLayerStyle" @click="showDetails" :zIndex="113">
                </el-amap-loca-scatter>
                <el-amap-loca-scatter :visible="visible" :source-url="greenSourceUrl" :layer-style="greenLayerStyle" :zIndex="111">
                </el-amap-loca-scatter>
                <el-amap-loca-scatter :visible="visible" :source-url="yellowSourceUrl" :layer-style="yellowLayerStyle" :zIndex="112">
                </el-amap-loca-scatter>
            </el-amap-loca>
        </el-amap>
        <!-- <div class="toolbar">
            <button type="button" name="button" @click="toggleVisible">{{visible ? '隐藏标记' : '显示标记'}}</button>
        </div> -->
    </div>
</template>

<style scoped>
.amap-demo {
    height: 500px;
    /* width: 300px; */
}
</style>

<script>
module.exports = {
    name: 'amap-page',
    data() {
        return {
            zoom: 11,
            center: [113.97199630737305, 22.5807295363949],
            visible: true,
            redSourceUrl: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_F.json',
            greenSourceUrl: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road.json',
            yellowSourceUrl: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_E.json',
            redLayerStyle: {
                unit: 'meter',
                size: [400, 400],
                borderWidth: 0,
                texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
                duration: 500,
                animate: true,
            },
            greenLayerStyle: {
                unit: 'meter',
                size: [50, 50],
                borderWidth: 0,
                color: 'rgba(43,156,75,0.8)',
                duration: 800,
                animate: true,
            },
            yellowLayerStyle:{
                unit: 'meter',
                size: [200, 200],
                borderWidth: 0,
                texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_yellow.png',
                duration: 1000,
                animate: true,
            }



 

            // color: 'rgba(43,156,75,1)',
            // unit: 'meter',
            // size: [150, 150],
            // borderWidth: 0,

        };
    },
    methods: {
        toggleVisible() {
            this.visible = !this.visible;
        },
        initLoca(loca) {
            loca.animate.start();
        },
        showDetails(feature) {
            console.log(feature);
            if (feature) {
            //     this.position = feature.coordinates
            //     this.infoVisible = true
            //     console.log(this.position)
                let prop = feature.properties
                let message = '物资地点：' + prop.name + ', 送达时间：' + prop.month
                this.$notify({
                    title: '物资信息    ',
                    message: message,
                    offset: 200
                });
            //     console.log(feature)
            }
        },
    }
};
</script>