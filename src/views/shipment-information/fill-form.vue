<template>
  
   

    <div class="form-style">
      <dv-border-box-8  style="padding:10px ;height: 100%;">
        
          <dv-decoration-6 style="width:300px;height:30px; margin: auto;" />
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="128px" class="demo-ruleForm" style="width:  95%; margin-top: 20px;" >
              <el-row :span=24>
                  <el-col :span="10" >
                      <el-form-item label="收货客户"  prop="acceptGoodCustom">
                          <el-input  placeholder="请输入用户姓名" v-model="ruleForm.acceptGoodCustom"> </el-input>
                      </el-form-item>
                  </el-col>

                  <el-col :span="10" :offset="4">
                      <el-form-item label="收货客户电话"  prop="acceptGoodCustomTel">
                          <el-input type="text" placeholder="请输入用户电话" v-model="ruleForm.acceptGoodCustomTel"> </el-input>
                      </el-form-item>
                  </el-col>
              </el-row>
              <el-form-item label="收货地址" prop="acceptAddress">
                  <el-input v-model="ruleForm.acceptAddress" placeholder="请输入收货地址"></el-input>
              </el-form-item>
              <el-row :span=24>
                  <el-col :span="10" >
                      <el-form-item label="发货客户"  prop="sendGoodCustom">
                          <el-input  placeholder="请输入用户姓名" v-model="ruleForm.sendGoodCustom"> </el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="10" :offset="4">
                      <el-form-item label="发货客户电话"  prop="sendGoodCustomTel">
                          <el-input type="text" placeholder="请输入用户电话" v-model="ruleForm.sendGoodCustomTel"> </el-input>
                      </el-form-item>
                  </el-col>
              </el-row>
              
              <el-form-item label="发货地址" prop="sendAddress">
                  <el-input v-model="ruleForm.sendAddress" placeholder="请输入发货地址"></el-input>
              </el-form-item>

              <el-row :span=24>
                <el-col :span=10>
                  <el-form-item  label="发货日期" prop="delivery">
                      <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.delivertDate" style="width: 320px;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span=10 :offset="4">
                  <el-form-item  label="物资重量" prop="weight" >
                      <el-input v-model="ruleForm.weight" placeholder="请输入物资重量"></el-input>
                  </el-form-item>
                </el-col>  
              </el-row>
              
              <el-form-item>
                  <el-button type="primary" @click="submitForm(ruleForm)">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
          </el-form>
   
        
      </dv-border-box-8>
    </div>
  
</template>
<script>
  import {fetchSubmit} from '@/api/form'
    export default{
        name:'FillForm',
        data() {
      return {
        ruleForm: {
          "acceptAddress": "", //收货地址
          "acceptGoodCustom": "",//收货客户
          "acceptGoodCustomTel": "",//收货客户电话
          "delivertDate": "", //发货日期
          "sendAddress": "",  //发货地址
          "sendGoodCustom": "", //发货客户
          "sendGoodCustomTel": "",//发货客户电话
          "weight":""
        },
        rules: {
          actualDelivertData: [
            { required: false, message: '请输入发货地址', trigger: 'blur' },
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {

        fetchSubmit(formName).then(response=>{
          console.log(123);
          if(response){
            this.$message({
              message:response.data,
              type:'success'
          })
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
.form-style{
    height: 500px;
    width: 1000px;
    margin: auto;
    padding: 20px;
}
</style>