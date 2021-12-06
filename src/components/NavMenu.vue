<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active=""
        class="el-menu-vertical-demo"
        :router='true'
        :unique-opened='false'
        @open="handleOpen"
        @close="handleClose"
        background-color="#28333E"
        text-color="#fff"
        active-text-color="#40aaf1"
        >

        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
          <template slot="title">
            <span v-text="item.name"></span>
          </template>
          <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
            <el-menu-item :index="sub.componentName" v-text="sub.name">
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
</el-row>
</template>

<style scoped>
/* 二级菜单加上了over-hide类，二级菜单在展开时，有点溢出父元素 */
  .over-hide{
    overflow: hidden;
  }
  .el-menu{
      border: none;
  }
  .el-submenu {
    background-color: #28333E;
  }
</style>

<script>
  import menu from '@/config/menu-config'

  export default {
    name:'NavMenu',
    data () {
      return {
        menu
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        
      },
      handleClose (key, keyPath) {
        
      }
    }
  }
</script>