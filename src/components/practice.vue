<template>
  <div id="practice">
    <!-- 云实践 -->
    <el-card class="box-card">
      <el-row :gutter="15">
            <el-card shadow="always">
              <ul>
                <li><a href="">全部课程</a></li>
                <li><a href="">科学实验室</a></li>
                <li><a href="">设计与制作</a></li>
                <li><a href="">仿真实验</a></li>
              </ul>
              <el-divider></el-divider><!-- 分隔线 -->
              <div class="select">
                <el-select v-model="value" placeholder="请选择学段科目">
                  <el-option
                    v-for="item in subjects"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-dropdown size="medium" split-button type="primary">
                  实验编号
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>A01</el-dropdown-item>
                    <el-dropdown-item>A02</el-dropdown-item>
                    <el-dropdown-item>B01</el-dropdown-item>
                    <el-dropdown-item>B02</el-dropdown-item>
                    <el-dropdown-item>E01</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown size="medium" split-button type="primary">
                  实验课程项目
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>摩擦力实验</el-dropdown-item>
                    <el-dropdown-item>实验室制备乙酸乙酯</el-dropdown-item>
                    <el-dropdown-item>光合作用</el-dropdown-item>
                    <el-dropdown-item>数形结合</el-dropdown-item>
                    <el-dropdown-item>英语口语一问一答</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                
                
              </div>
              <p>科学实验室</p>
              <div class="practice">
                <img src="../assets/img1/010.png">
                <img src="../assets/img1/011.png">
                <img src="../assets/img1/012.png">
                <img src="../assets/img1/013.png">
              </div>
              <el-divider></el-divider><!-- 分隔线 -->
              <p>设计与制作</p>
              <div class="practice">
                <img src="../assets/img1/010.png">
                <img src="../assets/img1/011.png">
                <img src="../assets/img1/012.png">
                <img src="../assets/img1/013.png">
              </div>
              <el-divider></el-divider><!-- 分隔线 -->
            </el-card>
      </el-row>
    </el-card>
  </div>
</template>
<style>
#practice {
  height: 100%;
  margin: 0 0 100px 0;
  overflow: hidden;
}
 #practice ul{
   display: flex;
   justify-content: center;
   padding: 0 20px;
 }
 #practice li{
   padding: 0 20px;
 }
 .el-select{
   margin: 20px 50px;
   
 }
 .el-dropdown{
   margin: 20px 50px;
 }
  p{
   text-align: center;
   margin: 20px ;
 }
 .practice img{
   display: block;
   width: 300px;
   height: 210px;  
 }
 .practice{
   height: 100%;
   margin: 20px 0;
   overflow: hidden;
   display: flex;
   justify-content: space-around;
 }
</style>

<script>
  export default {
    data() {
      return {
        subjects: [{
          value: '01',
          label: '化学'
        }, {
          value: '02',
          label: '物理'
        }, {
          value: '03',
          label: '生物'
        }, {
          value: '04',
          label: '英语'
        }, {
          value: '05',
          label: '数学'
        }],
        value: ''
      }
    }
  }
</script>