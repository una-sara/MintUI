<template>
    <div>
        <h2>我是Exam05</h2>
        <!--父面板-->
        <mt-tab-container  v-model="active">
            <!--子面板-->
          <mt-tab-container-item id="tab1"> 
               面板一
          </mt-tab-container-item>
          <mt-tab-container-item id="tab2"> 
               面板二
          </mt-tab-container-item>
          <mt-tab-container-item id="tab3"> 
               面板三
          </mt-tab-container-item>
     </mt-tab-container>
    </div>
</template>
<script>
   export default{
       data(){
           return {active:"tab2"}
       }
   }
</script>