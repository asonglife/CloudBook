<template>
  <div>
    <el-form :model="user" :rules="regisrules" status-icon ref="registerForm">
      <el-form-item label="用户名" prop="userid" required="true">
        <el-input 
        placeholder="手机号码" 
        v-model="user.userid" 
        autocomplete="off"
        :validate-event="false"/>
      </el-form-item>
      <el-form-item label="密码" prop="pass" required="true">
        <el-input 
        type="password" 
        placeholder="6-16位密码"  
        v-model="user.pass" 
        autocomplete="off"
        :validate-event="false"/>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkpass" required="true">
        <el-input 
        type="password" 
        placeholder="确认密码"  
        v-model="user.checkpass" 
        autocomplete="off"
        :validate-event="false"/>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" @click="submitForm('registerForm')" >注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import {debounce} from '@/assets/js/debounce.js'
export default {
  data(){
    let checkId = (rule, value, callback) => {

      const reg = new RegExp("^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$")

     
      if(!value){
        callback(new Error('用户名不能为空!'))
      }else if(!reg.test(value)){
          console.log(reg.test(value))
          return callback(new Error('请输入正确的手机号码!'))
        }else{
            callback()
         }
      
    }


    let pass = (rule, value, callback) => {

      if(!value){
        return callback(new Error('密码不能为空!'))
      }else{
        if(this.user.checkpass!==''){
          this.$refs.registerForm.validateField('checkpass');
        }
      }
      callback()
    }

    let checkpass = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {      
            callback();
            
        }
    }
    return{
      user:{
        userid:'',
        pass:'',
        checkpass:''
      },
      regisrules:{
        userid:[{ validator: checkId }],
        pass:[
          { min: 6, max: 16, message: '长度在 6 到 16 个字符' },
        { validator: pass }],
        checkpass:[{validator:checkpass}]
      }
    }
  },
  methods:{
    submitForm: function(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('OK')
          } else {
            return false;
          }
        });
    }
  }
}
</script>

<style scoped lang="scss">
   /deep/.el-form{
      .el-form-item__content{
        display: inline-block;
      }

      .el-input{
        width:230px;
        .el-input__inner{
          height: 40px;
          line-height: 40px;
        }
      }

    .el-form-item__label{
        width: 100px;
      }

    .el-form-item__content:nth-child(1){
      width: 100%;
      .el-button--warning{
          position: absolute;
          right: 0;
          left: 0;
          margin: auto;
          width: 111px
      }
    }
  
  }
</style>