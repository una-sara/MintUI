<template>
   <div>
      <h1>src/components/exam/Exam01.vue</h1>
      <h3>我是一个自定义组件</h3>
   </div>
</template>
<script>
  export default {
        created(){//当前组件创建成功
           //3s后toast提示框消失
           this.$toast({
             message:"组件创建成功"
           })
        }
  }
</script>