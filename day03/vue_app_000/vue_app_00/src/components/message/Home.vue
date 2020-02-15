<template>
     <div>
        <!--调用子组件-->
        <titleBar leftTitle="微信(99)"
        :rightFirstImg="require('../../assets/ic_search.png')" 
        :rightSecondImg="require('../../assets/ic_add.png')"
        :mysearch="search"
        :myadd="add"></titleBar>
     </div>
</template>
<script>
//1.引入子组件
import TitleBar from "./common/TitleBar"
export default {
    data(){
        return {}
    },
    //2.注册组件
    components:{
        "titleBar":TitleBar
    },methods:{
        search(){
            console.log('搜索');//搜索的事件处理函数
        },
        add(){
            console.log('添加');//添加的事件处理函数
        }
    }
 }
</script>