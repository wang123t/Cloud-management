<template>
    <el-tabs v-model="tabsValue" type="card" closable  @tab-remove="removeTab"  @tab-click="handleClick" >
          <el-tab-pane v-for="item in levelList"  :key="item.id"   :name="item.componentName" >
            <span slot="label" >{{item.name}}</span>      
          </el-tab-pane>
     </el-tabs>
</template>
<script>
export default {
    data(){
        return{
            levelList:[
                {name:'云课堂',path:'/management',componentName:'/management'},
                {name:'云实践',path:'/management',componentName:'/management'},
                {name:'云记录',path:'/management',componentName:'/management'},
                {name:'云分享',path:'/management',componentName:'/management'},
                {name:'课堂管理',path:'/management',componentName:'/management'},
                {name:'课堂实战',path:'/management',componentName:'/management'},
                {name:'实训实践',path:'/management',componentName:'/management'},
            ]
        }
    }
}
</script>