<template>
    <div class="amap-page-container">
        <!-- <message-card class="amap-page-container-card"></message-card> -->
        <el-row :gutter="20"> 
            <el-col :span="9">
                <mymap class="amap-demo" ref="mymap"/>
            </el-col>
            <el-col :span="9">
                <other-map class="amap-demo" ref="OtherMap"/>
            </el-col>
            <el-col :span="6">
                <bar-labeltime />
                <bar-labeldis/> 
            </el-col>
        </el-row>

        <div class="input-card">
            <h4 style="color:black;">轨迹回放控制</h4>
            <div class="input-item">
                <input type="button" class="btn" value="开始动画" id="start" @click="go"/>
                <input type="button" class="btn" value="暂停动画" id="pause" @click="to"/>
            </div>
            <div class="input-item">
                <input type="button" class="btn" value="继续动画" id="resume" />
                <input type="button" class="btn" value="停止动画" id="stop"  />
            </div>
        </div>
        <!-- <button @click="button(allpoint)">123</button> -->
    </div>
</template>
<script>
import messageCard from './card/messageCard.vue';
import mymap from './mymap/mymap.vue';
import OtherMap from './mymap/OtherMap.vue';
import BarChart from '../dashboard/admin/components/BarChart.vue';
import BarLabeldis from './echarts/BarLabeldis.vue';
import BarLabeltime from './echarts/BarLabeltime.vue';
import BarLabelmoney  from './echarts/BarLabelmoney.vue';
export default {
    components: { messageCard, mymap, OtherMap, BarChart, BarLabeldis, BarLabeltime, BarLabelmoney },
    data() {
        return {

        };
    },
    methods: {
        go(){
            this.$refs.mymap.Go();
            this.$refs.OtherMap.Go();
        },
        to(){
            this.$refs.OtherMap.button();
            this.$refs.OtherMap.button()
        },
    }
};
</script>
<style scoped>
.amap-page-container{
    padding: 20px;
    /* display: flex; */
    /* flex-direction:column; */
    flex-wrap: wrap;
    background: #dcdee0;
    /* background-image: url(../../assets/可视化背景.png); */
    /* text-align: center; */
    width: 100%;
    height: 1100px;
}
.amap-page-container-card{
    width: 800px;
    /* display: flex; */
    width:100%;
    text-align: center;
    /* justify-content: center; */
}
.amap-demo {
    /* margin-top: 20px; */
    /* width: 100%; */
    height: 900px;
    /* margin: 20px; */
}
.input-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color:rgba(169, 203, 223, 0.5);
    background-clip: border-box;
    border-radius: .25rem;
    width: 22rem;
    border-width: 0;
    border-radius: 0.4rem;
    box-shadow: 0 2px 6px 0 rgba(114, 124, 245, .5);
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 0.75rem 1.25rem;
}
.input-item {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 3rem;
}

.input-item-text {
    width: 6rem;
    text-align: justify;
    padding: 0.4rem 0.7rem;
    display: inline-block;
    text-justify: distribute-all-lines;
    /*ie6-8*/
    text-align-last: justify;
    /* ie9*/
    -moz-text-align-last: justify;
    /*ff*/
    -webkit-text-align-last: justify;
    /*chrome 20+*/
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}

.btn {
    position: relative;
    margin: auto;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    background-color: transparent;
    background-image: none;
    color: #25A5F7;
    border-color: #25A5F7;
    padding: .25rem .5rem;
    line-height: 1.5;
    border-radius: 1rem;
    cursor: pointer;

}

.btn:hover {
    color: #fff;
    background-color: #25A5F7;
    border-color: #25A5F7
}
</style>
