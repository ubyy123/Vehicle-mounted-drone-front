<!-- <template>
    <div class="amap-page-container">
        <el-amap :zoom="zoom" :center="position" :show-label="false" :zooms="[2, 30]" :show-building-block="false"
            view-mode="3D" :pitch="55" @init="initMap" class="amap-demo">
            <el-amap-control-control-bar :visible="true"></el-amap-control-control-bar>
            <el-amap-layer-buildings :visible="visible"></el-amap-layer-buildings>
            <el-amap-layer-three :lights="lights" :zooms="[2, 30]">
                
                <el-amap-three-gltf v-if="position" :visible="visible" url="/car4.gltf" :position="position" :scale="100"
                    :angle="angle" :rotation="rotation" :height="height1" @click="() => { click(position) }"
                    @mouseover="mouseover" @mouseout="mouseout" @init="initCar" >
                </el-amap-three-gltf>
                <el-amap-three-gltf v-if="position1" :visible="visible" url="/uav.gltf" :position="position1"
                    :scale="1" :angle="angle" :rotation="rotation" :height="height"
                    @click="() => { click(position1) }" @mouseover="mouseover" @mouseout="mouseout" @init="initCar">
                </el-amap-three-gltf>
            </el-amap-layer-three>
        </el-amap>
        <div class="toolbar">
            <button type="button" name="button" @click="toggleVisible">{{ visible ? '隐藏图层' : '显示图层' }}</button>
            <button type="button" name="button" @click="moveCar">移动车辆</button>
            <button type="button" name="button" @click="stopCar">停止移动</button>
            <button type="button" name="button" @click="changeAngle">旋转车辆角度</button>
            <button type="button" name="button" @click="disposeCar">{{ position ? '销毁车辆' : '生成车辆' }}</button>
        </div>
    </div>
</template> -->

<!-- <style>
.amap-demo {
    height: 800px;
}
</style>

<script>


module.exports = {
    name: 'amap-page',
    data() {
        return {
            i:0,
            zoom: 20,
            map:null,
            center: [116.478935, 39.997761],
            visible: true,
            position: [116.478935, 39.997761],
            position1: [116.478935, 39.997761],
            position2: [116.478912, 39.998549], 
            position3: [116.480151, 39.998453], 
            position4: [116.478012, 39.998549], 
            lineArr: [[116.478935, 39.997761], [116.478939, 39.997825], [116.478939, 39.997985], [116.478939, 39.998185],[116.478912, 39.998549],
             [116.478912, 39.998549], 
            [116.478998, 39.998555], [116.478998, 39.998555], 
            [116.479282, 39.99856], [116.479658, 39.998528], 
            [116.480151, 39.998453], [116.480784, 39.998302], 
            [116.480784, 39.998302], [116.481149, 39.998184], 
            [116.481573, 39.997997], [116.481863, 39.997846], 
            [116.482072, 39.997718], [116.482362, 39.997718], 
            [116.483633, 39.998935], [116.48367, 39.998968], 
            [116.484648, 39.999861]],
            angle: 90,
            rotation: { x: 90, y: 0, z: 0 },
            height: 30,
            height1: 0,
            timer: null,
            lights: [
                {
                    type: 'DirectionalLight', // 灯光类型， 可选值见下面的字典
                    args: [0xffffff, 1], // 灯光初始化时需要的参数，具体参数顺序可以查看threejs官网灯光的说明。 采用 ...args 的方式进行初始化
                    position: {
                        x: 1000,
                        y: -100,
                        z: 900
                    }, // 光源的位置
                },
                {
                    type: 'AmbientLight', // 灯光类型， 可选值见下面的字典
                    args: [0xffffff, 0.3], // 灯光初始化时需要的参数，具体参数顺序可以查看threejs官网灯光的说明。 采用 ...args 的方式进行初始化
                }
            ],
        };
    },
    mounted() {
    },
    methods: {
        toggleVisible() {
            this.visible = !this.visible;
        },
        initMap(map) {
            this.map=map
            // marker = new AMap.Marker({
            //     map: map,
            //     position: [116.478935, 39.997761],
            //     icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
            //     offset: new AMap.Pixel(-13, -26),
            // });

            // this.polyline = new AMap.Polyline({
            //     map: map,
            //     path: this.lineArr,
            //     showDir: true,
            //     strokeColor: '#77DDFF', // 线颜色--浅蓝色
            //     // strokeOpacity: 1,     //线透明度
            //     strokeWeight: 6, // 线宽
            //     // strokeStyle: "solid"  //线样式
            //     lineJoin: 'round' // 折线拐点的绘制样式
            // })
            // var passedPolyline = new AMap.Polyline({
            //     map: map,
            //     strokeColor: "#AF5",  //线颜色
            //     strokeWeight: 6,      //线宽
            // });
            // marker.on('moving',function(e){
            //     passedPolyline.setPath(e.passedPath);
            // })


        },
        initCar(car) {
            var map =this.map
            marker = new AMap.Marker({
                map: map,
                position: [116.478935, 39.997761],
                icon: 'car',
                offset: new AMap.Pixel(-13, -26),
            });
            
        },
        moveCar() {
          console.log(this.i);
          //   let position = this.position;
          if(this.i<this.lineArr.length){
              this.position = this.lineArr[this.i];
              this.i=this.i+1;
              this.timer = setTimeout(() => {
                  this.moveCar();
              }, 300)
          }     
        },
        stopCar() {
            clearTimeout(this.timer);
        },
        disposeCar() {
            if (this.position) {
                this.position = null;
            } else {
                this.position = [116.306206, 39.975468];
            }
        },
        click(e) { console.log('click: ', e) },
        mouseover(e) { console.log('mouseover: ', e) },
        mouseout(e) { console.log('mouseout: ', e) },
        init(object, $vue) {
            $vue.$$startAnimations();
        },
        changeAngle() {
            this.angle += 10;
        }
    }
};
</script> -->


<template>
    <div class="amap-page-container">
        <el-row :gutter="20">
            <el-col :span="8">
                <bar-labeltime />
            </el-col>
            <el-col :span="8">
                <bar-labeldis />
            </el-col>
            <el-col :span="6">
                <bar-labelmoney/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import BarLabeldis from './echarts/BarLabeldis.vue';
import BarLabeltime from './echarts/BarLabeltime.vue';
import BarLabelmoney from './echarts/BarLabelmoney.vue';
export default{
    components: { BarLabeldis, BarLabeltime, BarLabelmoney }
}
</script>
<style scoped>
.amap-page-container {
    padding: 20px;
    /* display: flex; */
    /* flex-direction:column; */
    flex-wrap: wrap;
    background: #dcdee0;
    /* background-image: url(../../assets/可视化背景.png); */
    /* text-align: center; */
    width: 100%;
    height: 1000px;
}
</style>