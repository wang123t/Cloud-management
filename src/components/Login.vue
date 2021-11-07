<template>
    <div id="Login">
       <el-form :model="loginForm"  :rules="loginFormRul" ref="loginForm" >
           <!-- 给表单添加ref属性，可重置表单，值为"xxxForm"类型，否则重置不成功 -->
                    <el-form-item  prop="username">
                        <el-input type="name" prefix-icon="el-icon-user" v-model="loginForm.username" placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" prefix-icon="el-icon-lock" v-model="loginForm.password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item class="but">
                        <el-button class="span" type="primary" @click="loginGo('loginForm')">登录</el-button>
                        <el-button class="span" @click="resetForm('loginForm')">重置</el-button>
                    </el-form-item>
                </el-form>  
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
       return {
           loginForm:{
               username:'',
               password:'',
           },
           loginFormRul: {
               username:[
                   {required: true, message: '请输入账号'},
                   {min :3,max :8, message: '长度在3-8个字母或数字', trigger: 'blur'}
               ],
               password:[
                   {required: true, message: '请输入登录密码'},
                   {min :6,max :10, message: '长度在6-10个字母或数字', trigger: 'blur'}
               ]
           }
       }
        
   }, 
   methods:{
       loginGo(){
           //登录校验，校验成功才能登录
           /* this.$refs.loginFormRel.validata */
        let{username,password} = this.loginForm;
        if(username == 'wangt' && password == '123456'){
            this.$router.push('/course');
           console.log('登录成功')
        }   
       },
       /* 重置账号密码 */
       resetForm(formName) {
        this.$refs[formName].resetFields();
      }
   }
   
}
</script> 
<style>
.el-form{
    padding: 50px 20px;
}
.el-form-item{
    padding: 10px;
}
#Login .el-form-item__error {
    font-size: 14px;
}
#Login .el-button{
    height: 40px;
    width: 90px;
    margin: 0;
    
}
#Login .el-form-item__content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
#Login span{
    display: block;
    padding: 0;
    line-height: 0;
}
</style>