<template>
  <div class="chart-container">
    <el-row :span="24">
      <el-col :span="16">
        <chart height="450px" width="100%" />
      </el-col>
      <el-col :span="8">
        <carousel-chart style="height: 450px;"/>
      </el-col>
    </el-row>
    
    
  </div>
</template>

<script>
import Chart from '@/components/Charts/MixChart.vue'
import CarouselChart from'@/components/Charts/CarouselChart.vue'

export default {
  name: 'MixChart',
  components: { Chart, CarouselChart }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: 500px;
}
</style>

