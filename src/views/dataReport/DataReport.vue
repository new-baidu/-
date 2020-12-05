<template>
  <div class="">
    <div id="main" ref="main" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
// var myChart = echarts.init(document.getElementById("main"));
export default {
  name: "",
  components: {},
  data() {
    return {
      myChart: null,
      option: {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        legend: {
          data: ["销量"]
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  created() {
    this.$nextTick(() => {
      this.myChart = echarts.init(this.$refs.main);
    //   echarts.init(this.myChart)
      this.init()
    });
    //   myChart.setOption(option)
  },
  computed: {},
  methods: {
    init() {
      this.myChart.setOption(this.option);
    }
  },
  mounted() {},
  activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" src="" scoped></style>
