<template>
   <div>
       <h1>我是第二个组件Exam02.vue</h1>
       <button @click="del">删除</button> 
       <button @click="handle1">显示交互式提示框</button>
       <button @click="handle2">显示确认框</button>
       <button @click="handle3">输入框</button>
   </div>
</template>
<script>
  export default{
       methods:{
          handle3(){
             this.$messagebox.prompt("请输入卡号密码")
             .then((value)=>{//输入成功
                console.log(value);
             })
             .catch(err=>{//取消回调函数
                 console.log(err);
             })
           },
          handle2(){
           //确认提示框  确认按钮 取消按钮
           this.$messagebox.confirm("是否删除指定数据")//确认内容
           .then(res=>{//确认执行成功以后会调用
               console.log(res);
           }).catch(err=>{//取消后调用函数
               console.log(err);
           })
           },
          del(){
              this.$toast({
                  message:"删除成功",//消息内容
                  position:"middle",//消息位置
                  iconClass:"iconfont icon-xin"//显示图标
              })
          },
          handle1(){
              this.$messagebox('消息','数据加载成功');
          }
       }
  }
</script>