<template>
   <div>
       <h1>我是父组件</h1>
       <!--3.调用子组件-->
       <sub08  msg="我是要传递给子组件的数值"
        :add2="add" :img="require('../../assets/a_7.png')"></sub08><!--我是子组件-->
   </div>
</template>
<script>
//1.import 引入子组件
import Sub08  from "./Sub08"
  export default {
    data(){return {}},
   //2.注册子组件
    components:{
        "sub08":Sub08
    },
    methods:{
        //创建函数 传递给子组件
        add(){
            console.log('我是来自父组件的函数');
        }
    }
  }
</script>