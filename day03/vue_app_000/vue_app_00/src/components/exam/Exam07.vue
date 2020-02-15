<template>
    <div>
        <h2>我是Exam07</h2>  
        <!--面板组件-->
        <!--父元素-->
        <mt-tab-container v-model="active">
            <!--子元素-->
            <mt-tab-container-item id="tab1">
                聊天页面
            </mt-tab-container-item>    
            <mt-tab-container-item id="tab2">
                好友页面
            </mt-tab-container-item>    
            <mt-tab-container-item id="tab3">
                朋友圈页面
            </mt-tab-container-item>    
            <mt-tab-container-item id="tab4">
                我的页面
            </mt-tab-container-item>    
        </mt-tab-container>     
        <!--底部导航栏-->
        <mt-tabbar fixed v-model="active">
            <!--按钮-->
            <mt-tab-item id="tab1">
                <img slot="icon" src="../../assets/购物车.png"/>
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <img slot="icon" src="../../assets/首页.png"/>
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <img slot="icon" src="../../assets/购物车.png"/>
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <img slot="icon" src="../../assets/购物车.png"/>
            </mt-tab-item>
        </mt-tabbar>
     </div>
</template>
<script>
   export default{
       data(){
           return {
               active:'tab1'
           }
       }
   }
</script>