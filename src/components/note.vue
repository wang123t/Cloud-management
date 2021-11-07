<template>
  <div id="note">
    <el-card>
      <div id="mains" style="width:600px ;height:400px;">
      </div>
      <div class="plantime">
        <el-progress type="circle" :percentage="30"></el-progress>
        <p>本周学习完成进度</p>
      </div>
      <div class="plan">
        <span>学习计划</span>
        <ul>
          <li v-for="item in plans" :key="item.id">{{item.plan}}</li>
          <el-progress :percentage="50"></el-progress>计划1
          <el-progress :percentage="100" status="success"></el-progress>计划2
          <el-progress :percentage="60" :color="orange"></el-progress>计划3
          <el-progress :percentage="100" status="success"></el-progress>计划4
        </ul>
      </div>
    </el-card><!-- 学习记录 -->
    
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name:'note',
  data(){
    return{
      orange:'#ff8000',
      plans:[
        {plan:'1.每天阅读经典一小时'},
        {plan:'2.关注焦点时事'},
        {plan:'3.按时完成每天的基础课程的学习'},
        {plan:'4.记录并分享学习心得体会'},
      ]
    }
  },
  methods:{
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
      initecharts(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('mains'));
        // 绘制图表
        myChart.setOption({
        title: {
            text: '一周学习时间统计'
        },
        tooltip: {},
        xAxis: {
            data: ['经典阅读', '热点时事', '基础课程', '实践', '学习分享', '其他板块']
        },
        yAxis: {},
        series: [
            {
            name: '小时',
            type: 'bar',
            data: [10, 20, 40, 30, 20, 10]
            }
        ]
        });
     }
  },
  mounted(){
        this.initecharts();
    },
}
</script>
<style>
#note  {
  height: 100%;
  overflow: hidden;
}
.plantime{
  float: left;
  position: absolute;
  left: 70%;
  top: 40%;
  transform: translate(-50%,-50%);
}
.plan ul li {
  clear: both;
  line-height: 40px;
}
.el-progress {
  width: 80%;
  padding: 10px;
}
</style>