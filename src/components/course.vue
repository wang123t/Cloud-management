<template>
    <div id="course">
      <el-card>
        <div class="img">
              <img src="..\assets\01.png" style="width:250px">
              <img src="..\assets\02.png" style="width:250px">
              <img src="..\assets\03.png" style="width:250px">
              <img src="..\assets\04.png" style="width:250px">
          </div>
          <div class="item">
              <div class="files">
                <h2>课程学习</h2>
                <div class="grade">
                    <ul>
                      <li><h3>小学：</h3></li>
                      <li><a href="">一年级</a></li>
                      <li><a href="">二年级</a></li>
                      <li><a href="">三年级</a></li>
                      <li><a href="">四年级</a></li>
                      <li><a href="">五年级</a></li>
                      <li><a href="">六年级</a></li>
                    </ul>
                    <ul>
                      <li><h3>初中：</h3></li>
                      <li><a href="">七年级</a></li>
                      <li><a href="">八年级</a></li>
                      <li><a href="">九年级</a></li>
                    </ul>
                    <ul>
                      <li><h3>高中：</h3></li>
                      <li><a href="">高一</a></li>
                      <li><a href="">高二</a></li>
                      <li><a href="">高三</a></li>
                    </ul>
                </div>
                <div class="more">
                    <ul>
                        <li v-for="group in options" :key="group.id">
                            <div class="box1">
                              <a href=""><img :src= "group.url" style="width:120px"></a>
                              <h4>{{group.title}}</h4>
                            </div>
                            <ul class="box2">
                                <li v-for="item in group.option" :key="item.id"><a href="">{{item.link}}</a>|</li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
              </div>
          </div>
      </el-card>
         
    </div>
</template>

<script>
export default {
  name: 'course',
  data (){
    return{
      options:[
        {
          title:'研习教育',
          id: 0,
          url:require('../assets/05.png'),
          option:[{
            link:'实践基地',
          },{
            link:'实践活动',
          },{
            link:'更多',
          },
          ]
        },
         {
          title:'家庭教育',
          id: 1,
          url:require('../assets/06.png'),
          option:[{
            link:'亲子沟通',
          },{
            link:'家校协同',
          },{
            link:'习惯养成',
          },{
            link:'更多',
          }
          ]
        }, {
          title:'生命安全教育',
          id: 2,
          url:require('../assets/07.png'),
          option:[{
            link:'生命教育',
          },{
            link:'社会安全',
          },{
            link:'公共卫生',
          },{
            link:'网络安全',
          },{
            link:'更多',
          },
          ]
        }, {
          title:'经典阅读',
          id: 3,
          url:require('../assets/08.png'),
          option:[{
            link:'主题阅读',
          },{
            link:'中华经典',
          },{
            link:'电子书籍',
          },{
            link:'推荐目录',
          },{
            link:'更多',
          },
          ]
        },
        
      ]
    }
  }
}
</script>
 


<style>
#course {
    height: 100%;
}
.box1 {
  overflow: hidden;
}
.more ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    
}
.more li ul {
    
    margin: -10px 20px;
    padding: 0;
    height: 30px;
    
}
.more li ul a {
    display: inline-block;
    padding: 0 10px;
    line-height: 30px;
}
.more li ul li {
   line-height: 30px;
   
}
.more li h4{
    margin: 0;
    line-height: 80px;
    padding: 0 10px;
}
.more li {
    height: 180px;
      
}
.more a {
    padding: 0;
    margin: 0;
    float: left;
}
 .more ul li a:hover {
    color: rgb(61, 158, 236);
    background-color: hidden;;
}
.more img {
    
    float: left;
}
.img {
  display: flex;
  justify-content: space-around;
}
.item {
  width: 100%;
  height: 100%;
  
  overflow: hidden;
}
.files {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.grade {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}
.grade ul {
  height: 100px;
  width: 750px;
  background-color: #40aaf1;
  border-radius: 10px;
  
}
.grade li a{
  padding: 10px 30px;
  float: left;
}

 .grade li a:hover {
  color: #40aaf1;
  background-color: #ffffff;
  border-radius: 20px;
  
}
.files h2 {
  font-size: 20px;
  color: #000;
  
}
.files h3 {
  text-align: center;
  margin: 0 0 10px;
  padding: 5px 0 0;

}
</style>