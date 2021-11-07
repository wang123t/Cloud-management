<template>
  <div id="share">
    
    <el-card>
      <div class="outside">
        <p>分享主题</p>
        <el-tag
          v-for="tag in tags"
          :key="tag.name"
          :closable="true"
          :disable-transitions="false"
          :type="tag.type"
          @close="handleClose(tag)">
          {{tag.name}}
        </el-tag>
        <div class="share">
          <p>坚持是一种习惯，每天坚持进步一点点，最后你会发现你会越来越好。</p>
          <p>用科学的眼光看待事物的两面性，可以帮助你面对抉择。</p>
          <p>分享是一件快乐又有趣的事情。</p>
          <p>云课堂的学习可以随时随地，实现了优质教育资源的共享，科学仿真实验室更是绿色实验室的代表，开放的平台给每一个学生创造了良好的学习氛围，促进学生的独立思考，实践操作的能力。</p>
        </div>
        <el-divider></el-divider><!-- 分隔线 -->
        <div class="study">
          <p>课程分享</p>
          <ul>
            <li v-for="img in list" :key="img.id">
              <a href=""><img :src="img.url" ><span>{{img.title}}</span></a>
            </li>
          </ul>
        </div>
        <div class="exchange">
            <p>互动交流</p>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tags: [
          { name: '坚持', type: '' },
          { name: '科学实践', type: 'success' },
          { name: '分享', type: 'info' },
          { name: '智慧课堂', type: 'warning' },
          { name: '积极乐观', type: 'danger' }
        ],
        list:[
          {url:require('../assets/img1/Y.png'),
           title:'语文教学论'},
          {url:require('../assets/img1/EN.png'),
           title:'英语口语趣谈'},
          {url:require('../assets/img1/W.png'),
           title:'物理磁场'},
          {url:require('../assets/img1/F.png'),
           title:'无机化学（一）'},
          {url:require('../assets/img1/S.png'),
           title:'生物基因工程'},
          {url:require('../assets/img1/F1.png'),
           title:'化学概论'},
        ]
      };
    },
    methods:{
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      },
    }
  }
</script>
<style>

#share{
  width: 100%;
  height: 100%;
}
.el-tag{
  padding: 0 10px;
  margin: 10px 20px;
  font-size: 16px;
}
 #share p{
  text-align: left;
}
#share img {
  width: 350px;
  height: 200px;
  display: block;
}
#share ul li span {
  display: block;
  text-align: center;
}
#share ul li a{
  padding: 0;
}
#share ul li{
  padding: 20px;
}
#share ul{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
}


</style>