<template>
  <div class="data" style="width: 100%;height:700px;">
    <div id="main" ref="main" style="width: 100%;height:700px;"></div>
  </div>
</template>
<script>
import { reports } from "@/api/login";
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
          text: "名媛男团435"
        },
        tooltip: {
          show: true,
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          backgroundColor: "rgba(245, 245, 245, 0.8)",
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          textStyle: {
            color: "#000"
          }
        }
      }
    };
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        this.myChart.setOption(newVal, true);
      },
      deep: true
    }
  },
  created() {
    this.reports();
    this.$nextTick(() => {
      // console.log(100)
      // console.log(this.$refs.main);
      // this.myChart =
      this.myChart = echarts.init(this.$refs.main);
      // console.log(this.myChart)
      this.myChart.setOption(this.option);
    });

    //   myChart.setOption(option)
  },
  computed: {},
  methods: {
    reports() {
      reports()
        .then(res => {
          console.log(res);
          // this.option = res.data;
          // this.option.legend = res.data.legend;
          // this.option.series = res.data.series;
          // this.option.xAxis = res.data.xAxis[0];
          // this.option.yAxis = res.data.yAxis[0];
          let option = {
            legend: res.data.legend,
            series: res.data.series,
            xAxis: {boundaryGap: false, data: res.data.xAxis[0].data,areaStyle: {
            color:'red',
            opacity: 0.3,
            origin:"start"
        }},
            yAxis: res.data.yAxis[0],
            title: {
              text: "名媛男团435"
            },
            tooltip: {
              show: true,
              trigger: "axis",
              axisPointer: {
                type: "cross"
              },
              backgroundColor: "rgba(245, 245, 245, 0.8)",
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              textStyle: {
                color: "#000"
              }
            }
          }
          this.option = option
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeDestroy() {
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    // console.log(this.myChart)
    this.myChart = null;
    // this.myChart = null;
    // alert(this.myChart)
  }
};
</script>
<style lang="scss" src="" scoped></style>
