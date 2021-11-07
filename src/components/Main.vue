<template>
    <div id="Main">
        <el-card>
            <div class="login">
                <div class="logoLogin">
                    <a href="">
                        <img src="..\assets\Cloud.png">
                        <h1>iCLOUD COURSE<span>云课堂管理系统</span></h1>
                    </a>
                </div>
                <div class="loginform">
                    <vlogin></vlogin>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>

import Login from '@/components/Login'

export default {
  name: 'Main',
   components: {
    'vlogin':Login

  }
  
}

</script>
<style>
#Main .el-card{
    margin: 100px;
    display: flex;
    justify-content: center;
}
#Main .login{
    background-color: #1296db;
    border-radius: 50px;
    width: 900px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

}
#Main .logoLogin img{
    width: 80px;
    float: left;
    background-color: white;
    padding: 6px;
    border-radius: 50%;
}
#Main h1{
    float: left;
    color:white;
    margin: 20px 0 20px 50px;
    line-height: 40px;
}
.login span {
    padding: 0 0 0 50px;
    margin: 0;
    display: inline-block;
    line-height: 40px;
}
.logoLogin{
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: row;
    min-width: 700px;
    padding-top: 50px;
}
.loginform{
    width: 400px;
    height: 350px;
    background-color: #ffffff;
    border-radius: 20px;
    margin: 50px 0;
}
</style>
