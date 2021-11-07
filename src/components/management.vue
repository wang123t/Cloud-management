<template>
  <div id="management">
    <!-- 云管理 -->
    <el-card class="box-card">
      <el-row :gutter="15">
        <el-col>
          <el-card shadow="always">
            <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入科目名"
                  @select="handleSelect">
            </el-autocomplete>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-divider></el-divider><!-- 分隔线 -->
            <el-table
              :data="tableData"
              style="width: 100%"
              >
              <el-table-column
                prop="hot"
                label="热门"
                width="180">
              </el-table-column>
              <el-table-column
                prop="subject"
                label="科目"
                width="180">
              </el-table-column>
              <el-table-column
                prop="history"
                label="历史学习记录">
              </el-table-column>
            </el-table>
            <div class="boxsave">
              <div class="save">
                <el-divider></el-divider><!-- 分隔线 -->
              <span>热门课程</span>
              <ul>
                <li class="imgs" v-for="img in imgs" :key='img.id'><img :src="img.photo" style="width:250px" height="135px"><span>{{img.text}}</span></li>
              </ul>
              </div>
              <div class="save">
                <el-divider></el-divider><!-- 分隔线 -->
              <span>收藏课程</span>
              <ul>
                <li class="imgs" v-for="img in imgs" :key='img.id'><img :src="img.photo" style="width:250px" height="135px"><span>{{img.text}}</span></li>
              </ul>
              </div>
            </div>

            
            
          </el-card>
        </el-col>
        
      </el-row>
    </el-card>
  </div>
</template>
<style>
body{
  box-sizing: border-box;
}
.el-button {
  margin: 0 50px;
}
#management {
  height: 100%;
  margin: 0 0 100px 0;
  overflow: hidden;
}
.el-page-header {
float: right;
}
#management li > span {
  display: block;
  padding: 0;
  margin: 0;
}
#management li > img {
  display: block;
  padding: 0;
  margin: 0;
}
#management li{
  text-align: center;
  float: left;
}
 .boxsave {
  display: flex;
  flex-direction: row;
  justify-content: center;
   
}
</style>
<script>
  export default {
    data() {
      return {
        course: [],
        state1: '',
        state2: '',
        tableData: [{
          hot: '500',
          subject: '数学',
          history: '高一（函数定义域）',
        }, {
          hot: '400',
          subject: '英语',
          history: '虚拟语气的用法'
        }, {
          hot: '200',
          subject: '物理',
          history: '动量定理以及动量守恒定律',
        }, {
          hot: '200',
          subject: '地理',
          history: '亚热带季风气候的特点'
        }],
        imgs:[
          {photo:require("../assets/9.png"),
          text:'高一数学'
          },
          {photo:require("../assets/10.png"),
          text:'高二语文'
          },{photo:require("../assets/11.png"),
          text:'高三历史'
          },{photo:require("../assets/12.png"),
          text:'高中英语'
          },
        ]
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var course = this.course;
        var results = queryString ? course.filter(this.createFilter(queryString)) : course;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (course) => {
          return (course.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "物理", },
          { "value": "化学", },
          { "value": "数学", },
          { "value": "英语", },
          { "value": "生物", },
          { "value": "地理", },
          { "value": "语文", },
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.course = this.loadAll();
    },
    
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>