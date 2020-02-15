<template>
   <div>
       <h1>我是Exam03组件</h1>
       <!--表单输入框 用户名 密码 年龄 提交按钮-->
       <mt-field label="用户名" placeholder="请输入用户名" 
       :attr="{maxlength:10}" v-model="uname"></mt-field>

       <mt-field label="密码" placeholder="请输入密码"
        type="password" v-model="upwd"></mt-field>

       <mt-field label="年龄" placeholder="请输入年龄"
       v-model="uage">
       </mt-field>
       
       <mt-button size="large" @click="reg">提交按钮</mt-button>
   </div>
</template>
<script>
   export default{
       data(){
           return {
               uname:"",
               upwd:"",
               uage:""
           }
       },
        methods:{
            reg(){
              //功能  验证用户输入表单
              //1.创建正则表达式一  用户名和密码
               var regu = /^[a-z0-9]{3,12}$/i;
               var regp = /^[a-z0-9]{3,12}$/i;
                
              //3-12 字母或者数字
              //创建正则表达式二 验证年龄 两位数的年龄
              var rega=/^[0-9]{2}$/;
              //获取用户输入的姓名 密码 年龄
              var u =this.uname;
              var p =this.upwd;
              var a =this.uage;
              console.log(u,p,a);
              //验证用户名 如果不符合正则表达式要求

              //提示用户输入出错提示框
              //停止当前函数执行
                 if(!regu.test(u)){
                   this.$messagebox("消息","用户名格式不正确");
                   return;
                 }
              //验证密码 如果不符合要求的话
              if(!regp.test(p)){
              //提示用户密码格式不正确
                  this.$messagebox("消息","密码格式不正确")
                  return;
              }
              //验证年龄是否符合要求
              if(!rega.test(a)){
                  this.$messagebox("消息","年龄格式不正确");
                  return;
             }
             //把符合要求的数据 通过ajax发给服务器
             //插入语句 进行注册
          }  
        }
   }
</script>