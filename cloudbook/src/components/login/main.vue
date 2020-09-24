<template>
  <div class="l-main">
    <el-row>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="登录" name="login">
          <login/>
        </el-tab-pane>
        <el-tab-pane label="注册" name="register">
          <register/>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
import Login from './login'
import Register from './register'  
export default {

  data(){
    return {
       activeName: 'login'
    }
  },

  methods:{
    handleClick:function(){
      console.log(1)
    }
  },

  components:{
    Login,
    Register
  }
}
</script>

<style lang="scss" scoped>
 .l-main{
   width: 420px;
   height: 460px;
   background-color: #fff;
   border: 1px solid #f1f2f2;
   margin: 50px auto  30px;
   border-radius: 5px;

   /deep/.el-tabs{
      .el-tabs__nav{
         margin-left: 50%;
         left: -69.5px;
     }
     .el-tabs__content{
        margin-top: 73px
      }
      .el-form-item{
        margin-bottom: 37px;
      }
   }
 }
</style>