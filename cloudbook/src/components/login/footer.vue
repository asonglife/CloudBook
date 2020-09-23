<template>
  <footer>
    <div class="l-footer">
      <a href="https://github.com/asonglife/CloudBook.git">GitHub</a> |
      <a href="https://github.com/asonglife/CloudBook.git">联系我们</a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  footer{
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      text-decoration: none;
    }

  .l-footer{
    color: #898989;
    font-size: 12px;

    &>a{
      
      color: #898989;
      padding-left: 6px;
      padding-right: 6px;

    }
  }

  }
</style>