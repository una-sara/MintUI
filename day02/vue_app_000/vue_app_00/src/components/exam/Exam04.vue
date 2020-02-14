<template>
     <div>
         <h1>我是Exam04.vue</h1>
         <!--1.开关组件-->
         <mt-switch v-model="val1" 
         @change="handle1"></mt-switch>
         <!--2.单选列表-->
         <mt-radio title="性别" :options="['男','女']" 
         v-model="val2">
         </mt-radio>
        <mt-button @click="handle2">提交</mt-button>
        <!--3.复选框列表-->
        <mt-checklist title="爱好" v-model="val3"
        :options="['唱歌','打游戏','喝酒']">
        </mt-checklist>
        <!--button按钮 绑定单击事件 获取爱好的取值-->
        <mt-button @click="handle3">提交</mt-button>

        <!--单选按钮   取值 口红 项链 红包 获取到送了什么礼物-->
        <mt-radio title="情人节礼物" :options="['口红','项链','红包','达内前端开发工程师课程']" 
        v-model="val4"></mt-radio>
        <mt-button @click="handle4">情人节礼物提交</mt-button>

        <!--复选框列表   取值 口红 项链 红包 获取到送了什么礼物-->
        <!-- <mt-checklist title="情人节礼物" :options="['口红','项链','红包','达内前端开发工程师课程']" 
        v-model="val4"></mt-checklist>
        <mt-button @click="handle4">情人节礼物提交</mt-button> -->
    </div> 
     
</template>
<script>
    export default {
           data(){
               return {
                   val1:true,
                   val2:"" ,
                   val3:[],
                //    val4:[],
                   val4:""
               }
           },
           methods:{
               handle1(){
                   console.log(this.val1);
               },
               handle2(){
                   console.log(this.val2);
               },
               handle3(){
                   console.log(this.val3);
               },
               handle4(){
                   console.log(this.val4);
               }
           }
    }
</script>