<template>
  <div id="doing">
    <el-card>
      <img src="../assets/img1/014.png">
        <div class="form">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="实验名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="实验区域">
              <el-select v-model="form.region" placeholder="请选择实验区域">
                <el-option label="区域一" value="shiyan1"></el-option>
                <el-option label="区域二" value="shiyan2"></el-option>
              </el-select>
            </el-form-item>
            

            <el-form-item label="实验准备">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="实验目的与方法" name="type"></el-checkbox>
                <el-checkbox label="实验器材" name="type"></el-checkbox>
                <el-checkbox label="实验理论分析" name="type"></el-checkbox>
                <el-checkbox label="探讨与交流" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="实验形式">
              <el-radio-group v-model="form.resource">
                <el-radio label="师生互助"></el-radio>
                <el-radio label="学生主导"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="实验报告">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建实验</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
    </el-card>
    
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style>
#doing {
  height: 100%;
  overflow: hidden;
}
#doing img{
  width: 100%;
  display: block;
}
.el-form .el-select{
  margin: 0;
}
.el-form{
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 25%;
  
}
</style>