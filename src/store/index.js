import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openTab:[],//所有打开的路由
    activeIndex:'/course'//初始激活的状态
  },
  mutations: {
    //添加tabs
    AddTabs(state,data){
      this.state.openTab.push(data)
    },
    //删除tabs
    DeleteTabs (state, route) {
      let index = 0;
      for (let option of state.openTab) {
        if (option.route === route) {
          break;
        }
        index++;
      }
      this.state.openTab.splice(index, 1);
    },
    // 设置当前激活的tab
    SetActiveTabs (state, index) {
      this.state.activeIndex = index;
    },
  },
  actions: {},
  modules: {},
});
