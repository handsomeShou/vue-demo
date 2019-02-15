<template>
<div class="main">
    <div class="container">
    <div >
        <div class="span6">
            <ul class="breadcrumb">
                <li>
                    <a href="" class="glyphicon glyphicon-home"></a>
                </li>
                <li>
                    <a href="#">关于我们</a> <span class="divider">></span>
                </li>
                <li class="active">
                    <a href="#" >最新公告</a> <span class="divider">></span>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .main{
        border-bottom: 1px solid rgba(210, 210, 210, 0.48);
    }
    .container{
        color: #4d4852;
        background-color: #ffffff;
        /* line-height: 56px; */
    }
    .container *{
        margin: 0px;
        padding: 0px;
    }
    .span6 ul{
        font-size: 12px;
        padding: 0px 15px;
         height: 78px;  
          background-color: #ffffff;
          /* background-color: rgba(210, 210, 210, 0.48); */
          line-height: 78px;
    }
    .span6 ul a{
        font-weight: bold;
        color: #4d4852;
    }
    /* .breadcrumb li{
        height: 56px;
    } */
</style>


