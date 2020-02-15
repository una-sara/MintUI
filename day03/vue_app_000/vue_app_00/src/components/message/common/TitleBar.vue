<template>
   <div class="page-head">
     <!--左侧文字-->
     <span>{{leftTitle}}</span>
     <!--右侧两张图片-->
     <div class="right-head">
         <div @click="mysearch" class="right-img" 
             style="margin-right:15px;">
             <img :src="rightFirstImg" 
             style="width:25px;"/>
         </div>
         <div @click="myadd" class="right-img">
             <img :src="rightSecondImg"
              style="width:25px;margin-right:15px;"
              />
         </div>
     </div>
   </div>
</template>
<script>
   export default {
       data(){
           return {}
       },
       props:{
           leftTitle:{default:""},//左侧文字
           rightFirstImg:{default:""},//右侧第一张图片
           rightSecondImg:{default:""},//右侧第二张图片
           mysearch:{type:Function},
           myadd:{type:Function}
       }
   }
</script>
<style scoped>
   .page-head{
    display: flex;/**当前父元素设置弹性布局 */
    position:fixed;
    z-index:999;/**永远浮动在所有元素上方 */
    width:100%;
    justify-content: space-between;/**两端对齐 */
    align-items:center;/**垂直对齐方式 */
    background-color:#393a3e;/**背景颜色 */
    padding-left: 7px;/**左右内边距*/
    padding-right:7px;
    height:48px;/**高度 */
    color:#fff;
    font-size:18px;
      
   }
   .right-head{
    display: flex;
   }
   .right-img{
    display: flex;
    align-items: center;
    height:48px;
   }
</style>