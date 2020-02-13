<template>
   <div>
       <h1>我是第二个组件Exam02.vue</h1>
       <h3>
           <button @click="del">点击按钮</button>
       </h3>
   </div>
</template>
<script>
  export default{
       methods:{
          del(){
              this.$toast({
                  message:"删除成功",
                  position:"middle"
              })
          }
       }
  }
</script>