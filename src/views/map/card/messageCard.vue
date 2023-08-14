<template>
    <div>
        <el-row :gutter="24" class="panel-group">
            <el-col :xs="12"  :lg="6" class="card-panel-col"  >
                <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
                    <div class="card-panel-icon-wrapper icon-people">
                        <svg-icon icon-class="送货单" class-name="card-panel-icon" />
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            当天已配送运单数
                        </div>
                        <count-to :start-val="0" :end-val="orders" :duration="1" class="card-panel-num" />
                    </div>
                </div>
            </el-col>
            <el-col :xs="12"  :lg="6" class="card-panel-col" >
                <div class="card-panel" @click="handleSetLineChartData('messages')">
                    <div class="card-panel-icon-wrapper icon-message">
                    <svg-icon icon-class="送货中" class-name="card-panel-icon" />
                    </div>
                    <div class="card-panel-description">
                        <div class="card-panel-text">
                            正在配送运单数
                        </div>
                        <count-to :start-val="0" :end-val="deliveryOrder" :duration="1" class="card-panel-num" />
                    </div>
                </div>
            </el-col>

            <el-col :xs="12"  :lg="6" class="card-panel-col" >
                    <div class="card-panel" @click="handleSetLineChartData('purchases')">
                        <div class="card-panel-icon-wrapper icon-money">
                            <svg-icon icon-class="货车" class-name="card-panel-icon" />
                        </div>
                        <div class="card-panel-description">
                            <div class="card-panel-text">
                                正在运行车数
                            </div>
                            <count-to :start-val="0" :end-val="carNumber" :duration="1" class="card-panel-num" />
                        </div>
                    </div>
            </el-col>
            <!-- <el-col :xs="12" :lg="6">
                <speed  style="margin: auto;"/>
            </el-col> -->
            <el-col :xs="12"  :lg="6" class="card-panel-col">
                <div class="card-panel" @click="handleSetLineChartData('shoppings')">
                    <div class="card-panel-icon-wrapper icon-shopping">
                        <svg-icon icon-class="shopping" class-name="card-panel-icon" />
                        </div>
                        <div class="card-panel-description">
                        <div class="card-panel-text">
                            派送总里程
                        </div>
                    <count-to :start-val="0" :end-val="13" :duration="1" class="card-panel-num" />
                    </div>
                </div>
            </el-col>

        </el-row>

    </div>
   
</template>

<script>
import CountTo from 'vue-count-to'
import { mapGetters } from 'vuex'
import Speed from '../echarts/speed.vue'
export default {
name: 'messageCard',
  components: {
    CountTo,
    Speed
},
  data(){
    return{
        n: 1,
    }
  },
  computed:{
      ...mapGetters([
          'sum',
          'deliveryOrder',
          'carNumber',
          'orders'
      ])
  },
  watch: {
      getWiFiList: function (li) { //li就是改变后的wifiList值
        console.log("改变", li);
        }
},
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    },
    jia() {
        this.$store.commit('mapMessage/JIA', this.n);

    },
  }
}
</script>
<style lang="scss" scoped>
body{
    path {
        fill: inherit !important
}
}
.panel-group {
    // margin-top: 18px;
    .card-panel-col {
        margin-bottom: 32px;
    }

    .card-panel {
        height: 108px;
        cursor: pointer;
        font-size: 12px;
        position: relative;
        overflow: hidden;
        color: #666;
        background: rgb(255, 255, 255);
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);

        &:hover {
            .card-panel-icon-wrapper {
                color: rgb(255, 255, 255);
            }

            .icon-people {
                background: #40c9c6;
            }

            .icon-message {
                background: #36a3f7;
            }

            .icon-money {
                background: #f4516c;
            }

            .icon-shopping {
                background: #34bfa3
            }
        }

        .icon-people {
            color: #40c9c6;
        }

        .icon-message {
            color: #36a3f7;
        }

        .icon-money {
            color: #f4516c;
        }

        .icon-shopping {
            color: #34bfa3
        }

        .card-panel-icon-wrapper {
            float: left;
            margin: 14px 0 0 14px;
            padding: 16px;
            transition: all 0.38s ease-out;
            border-radius: 6px;
        }

        .card-panel-icon {
            float: left;
            font-size: 48px;
        }

        .card-panel-description {
            float: right;
            font-weight: bold;
            margin: 26px;
            margin-left: 0px;

            .card-panel-text {
                line-height: 18px;
                color: rgba(0, 0, 0, 0.45);
                font-size: 16px;
                margin-bottom: 12px;
            }

            .card-panel-num {
                font-size: 20px;
            }
        }
    }
}

@media (max-width:550px) {
    .card-panel-description {
        display: none;
    }

    .card-panel-icon-wrapper {
        float: none !important;
        width: 100%;
        height: 100%;
        margin: 0 !important;

        .svg-icon {
            display: block;
            margin: 14px auto !important;
            float: none !important;
        }
    }
}
</style>
