<template>
     <div>
         <h1>我是子组件</h1>
         <h2 @click="add2">{{msg}}</h2>
         <img :src="img"/>
     </div>
</template>
<script>
  export default {
      //声明接收父组件的数据
       props:{
           msg:{default:""}, //显示文字
           add2:{type:Function}, //type 接收类型
           img:{default:""}
       }
  }
</script>