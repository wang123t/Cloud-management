<template>
  <div id="teaching">
    <el-card>
      <div class="idea">
        <div class="explain">
          <h4 class="el-icon-upload">基础课堂</h4>
          <p>主要针对农村山区学校和教学缺少师资力量的地区教育，采用网上专门开或同步上课，利用互联网实现云课堂教学，促进了教育的公平和均衡的发展。</p>
          <h4 class="el-icon-user-solid">名师课堂</h4>
          <p>主要针对教师力量不强的问题，通过组建网络研修共同体等方式，发挥名师名课示范效应，探索网络环境下的教研新形态，以优秀的教师带动普通教师水平，使名师教育资源得到更大范围的共享。</p>
          <h4 class="el-icon-s-platform">网络课堂</h4>
          <p>通过网络课程的形式，系统的全方位的推动优质的教育资源在更大范围下共享满足学生个性化的发展和国家教育的需求。</p>
        </div>
        <div class="mystudy">
          <p><span class="el-icon-edit">我的学习</span></p>
          <ul>
            <li><p>30分钟</p><span>今日学习</span></li>
            <li><p>6天</p><span>累计登录</span></li>
            <li><p>89.0小时</p><span>本周累计学习</span></li>
          </ul>
          <p><span class="el-icon-date">我的课程</span></p>
          <ul>
            <li><p>已完成</p><span>高二物理</span></li>
            <li><p>已完成50%</p><span>基础化学</span></li>
            <li><p>未开始</p><span>英语阅读</span></li>
          </ul>
          <p><span class="el-icon-edit-outline">我的作业</span></p>
          <ul>
            <li><p>已完成</p><span>高二物理</span></li>
            <li><p>已完成80%</p><span>基础化学</span></li>
            <li><p>未开始</p><span>英语阅读</span></li>
          </ul>
        </div>
      </div>
      <div class="test">
        <p>我的考试</p>
        <div class="but">
          <button class="but1">练习模式</button>
          <button class="but2">模拟考试</button>
        </div>
      </div>
      
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>
<style>
#teaching{
  height: 100%;
}
#teaching .explain {
  padding: 10px 20px;
  float: left;
  width: 50%;
  color: rgb(27, 128, 245);
  background-color: white;
  border-radius: 15px;
}
.explain p{
margin: 10px;
text-align: left;
}
.idea{
  background-color: rgb(92, 154, 235);
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.mystudy{
  float: left;
  color: rgb(27, 128, 245);
  background-color: white;
  border-radius: 15px;
}
.mystudy p{
  margin: 0;
  padding: 10px;
  text-align: center;
  color: rgb(241, 121, 22);
}
.mystudy ul{
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.mystudy ul li{
  line-height: 30px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  float: left;
}
.test {
  background-color: rgb(218, 221, 224);
  height: 200px;
  border-radius: 15px;
  margin: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.test p{
  text-align: center;
}

.test button {
  display: inline-block;
  width: 80px;
  height: 30px;
  margin: 20px;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 16px;
}
.but1{
  background-color: orange;
}
.but2{
  background-color: rgb(47, 81, 231);
}
</style>