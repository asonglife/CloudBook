<template>
  <div>
    <el-form :model="user" :rules="loginrules" status-icon ref="loginForm">
      <el-form-item label="用户名" prop="userid" >
        <el-input placeholder="电话号码" v-model="user.userid" autocomplete="off"/>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" placeholder="6-16位密码"  v-model="user.pass" autocomplete="off"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    let checkId = (rule, value, callback) => {

      const reg = new RegExp("^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$")

      if(!value){
        return callback(new Error('用户名不能为空!'))
      }

      setTimeout(()=>{
        
      },1000)
      if(!reg.test(value)){
        console.log(reg.test(value))
        return callback(new Error('请输入正确的手机号码!'))
      }else{
        callback()
      }

    }


    let checkPass = (rule, value, callback) => {

      if(!value){
        return callback(new Error('密码不能为空!'))
      }
      
      setTimeout(()=>{
        callback()
      }, 1000)
    }
    return{
      user:{
        userid:'',
        pass:''
      },
      loginrules:{
        userid:[{ validator: checkId, trigger: 'blur' }],
        pass:[
          { min: 3, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
        { validator: checkPass, trigger: 'blur' }]
      }
    }
  },
  methods:{
    submitForm: function(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('OK')
          } else {
            console.log('error submit!!');
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

    .el-form-item__label{
        width: 100px;
      }

    .el-form-item__content:nth-child(1){
      width: 100%;
      .el-button--primary{
          position: absolute;
          right: 0;
          left: 0;
          margin: auto;
          width: 111px
      }
    }
  
  }
</style>
