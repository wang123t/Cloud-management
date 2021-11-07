<template>
  <el-row>
    <el-col :span="24">
      <div class="head-wrap">
        <div class="top">
            <div class="logo">
                <a href="">
                    <img src="..\assets\Cloud.png">
                    <h2>iCLOUD COURSE</h2>
                </a>
            </div>
            <div class="header">
                <ul class="link1">
                    <li><a href="">主页</a></li>
                    <li><a href="">管理</a></li>
                    <li><a href="">设置</a></li>
                    <li><a href="">收藏</a></li>
                </ul>
                <div class="icon">
                    <a href=""><i class="el-icon-refresh"><span></span></i></a>
                    <a href=""><i class="el-icon-search"><span>搜索</span></i></a>
                    <a href=""><i class="el-icon-user"><span>已登录</span></i></a>
                    <button @click="Exit">退出</button>
                </div> 
            </div> 
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name:"Header",
  data(){
    return
  },
  
  methods:{
    Exit(){
      this.$router.push('/Main');
      /* this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
            
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        if(this.$confirm ==="confirmButtonText: '确定'"){
          return{}
          
        } */
    }
  }
}
</script>
<style>
.head-wrap{
height: 60px;
}
.logo {
  width: 200px;
  height: 60px;
  background-color: black;
  margin: 0;
}
.logo img {
  width: 50px;
  padding: 10px;
  float: left;
  margin: 5px 0;
}

.logo h2 {
  font-size: 16px;
  color: #f1f1f1;
  float: left;
  line-height: 60px;
  margin: 0;
  
}
.header {
  height: 60px;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 200px;
  width: 100%;
}
.link1 li{
  float: left;
  margin: 0;
  padding: 0;
  list-style: none;
}
.header ul{
  height: 60px;
  width: calc(100% - 200px);
  padding: 0;
  margin: 0;
  position: relative;
}
 .icon{
  position: absolute;
  left: 70%;
  top: 50%;
  height: 60px;
  transform: translate(-50%,-50%);
  text-align: center;
  display: flex;
  justify-content: center; 
  align-items: center;
}
.icon a{
  color: #000;
}
.icon span{
  padding: 0 30px 0 10px;
}
.el-header li a {
  text-decoration: none;
  display: block;
  height: 60px;
  color: #000;
  font-size: 16px;
  padding: 20px 30px; 
}
.header li a:hover {
  color: #40aaf1;
  background-color: #d3d3d3;
}
.icon button{
  width: 60px;
  height: 25px;
  border: none;
  background-color: #40aaf1;
  border-radius: 5px;
  color: white;
}
</style>