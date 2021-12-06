<template>
    <el-tabs 
    v-model="activeIndex" 
    type="card" 
    closable 
    v-if='openTab.length' 
    @tab-remove="removeTab"  
    @tab-click="tabClick" 
    >
        <el-tab-pane 
        v-for="item in openTab"  
        :key="item.name"   
        :name="item.route"
        :label="item.name" 
        >      
        </el-tab-pane>
    </el-tabs>
</template>
<script>
export default {
    name:'Tabs',
    data(){
        return{
            activeIndex:'',
            openTab:[
                
            ]
        }
    },
    methods:{
        //tab标签点击时，切换相应的路由
            tabClick(tab){
                console.log("tab",tab);
                console.log('active',this.activeIndex);
                this.$router.push({path: this.activeIndex});
            },
            //移除tab标签
            removeTab(targetName){
                console.log("removeTab",targetName);
                //首页不删
                if(targetName == '/course'){
                    return
                }
                this.$store.commit('DeleteTabs', targetName);
                if (this.activeIndex === targetName) {
                    // 设置当前激活的路由
                    if (this.openTab && this.openTab.length >= 1) {
                    console.log('=============',this.openTab[this.openTab.length-1].route)
                    this.$store.commit('SetActiveTabs', this.openTab[this.openTab.length-1].route);
                    this.$router.push({path: this.activeIndex});
                    } else {
                    this.$router.push({path: '/course'});
                    }
                }
            }
    },
    mounted () {
    
    },
}
</script>