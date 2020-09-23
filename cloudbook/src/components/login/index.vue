<template>
  <el-container>
  <el-header>
    <login-header/>
  </el-header>
  <el-main>
    <login-main/>
  </el-main>
  <el-footer>
    <login-footer/>
  </el-footer>
</el-container>
</template>

<script>
import LoginHeader from './header'
import LoginFooter from './footer'
import LoginMain from './main'
export default {
  components:{
    LoginHeader,
    LoginFooter,
    LoginMain
  }
}
</script>

<style lang="scss" scoped>

 .el-header, .el-main, .el-footer{
   padding: 0;
 }
 .el-main{
   height: 550px;
   overflow: visible;
 }

</style>