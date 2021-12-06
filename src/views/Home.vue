<template>
<div id="home">
  <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavMenu/>
        </el-aside>
        <el-main>
          <!-- <Tabs/> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</div>
  
</template>
<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'
// import Tabs from '@/components/Tabs'

export default {
  name: 'home',
  components: {
    NavMenu,
    Header,
    // Tabs
  }
  
}

</script>
<style>
* {
  box-sizing: border-box; 
}
html,body,#home {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
#home .el-header{
  margin: 0;
  padding: 0;
}
#home .el-container{
  height: 100%;
}
#home .el-aside{
  height: 100%;
  width: 200px;
  box-sizing: border-box;
  background-color: #28333E;
}
#home .el-menu-item {
  background-color: #28333E;
}
#home .el-main{
  background-color: #f1f1f1;
}
</style>
