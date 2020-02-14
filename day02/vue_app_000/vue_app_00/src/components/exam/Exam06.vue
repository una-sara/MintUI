<template>
   <div>
     <h2>我是Exam06</h2>
     <!--三个按钮-->
     <mt-button @click="active='tab1'">微信</mt-button>
     <mt-button @click="active='tab2'">通讯录</mt-button>
     <mt-button @click="active='tab3'">我的</mt-button>
     <!--添加三个面板-->
     <mt-tab-container  v-model="active">
          <mt-tab-container-item id="tab1"> 
               聊天页面
          </mt-tab-container-item>
          <mt-tab-container-item id="tab2"> 
               好友页面
          </mt-tab-container-item>
          <mt-tab-container-item id="tab3"> 
               朋友圈
          </mt-tab-container-item>
     </mt-tab-container>
   </div>
</template>
<script>
  export default{
      data(){
          return {active:"tab1"}
      }
  }
</script>
