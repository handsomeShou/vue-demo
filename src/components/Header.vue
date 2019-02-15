<template>
<nav class="navbar navbar-default" id="navbar-header">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand glyphicon glyphicon-th-list" href="#" id="font-list"></a>
    </div>  

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active nav-li" @click="getAjax" @mouseenter="change($event)" @mouseleave="move($event)"><a  class="nav-a">首页<span class="sr-only">(current)</span></a></li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">关于我们<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">企业文化</a></li>
            <li><a href="#">公司简介</a></li>
            <li><a href="#">领导致辞</a></li>
          </ul>
        </li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">站容站貌<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">公司环境</a></li>
            <li><a href="#">设备展示</a></li>
          </ul>
        </li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">新闻中心<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">新闻来源</a></li>
            <li><a href="#">新闻内容</a></li>
          </ul>
        </li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">工程展示<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">工程标准</a></li>
            <li><a href="#">优秀工程</a></li>
          </ul>
        </li>
        <li class="dropdown nav-li" @mouseenter="change($event)" @mouseleave="move($event)">
          <a href="#" class="dropdown-toggle nav-a" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">人力资源<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">人才策略</a></li>
            <li><a href="#">职位招聘</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      change:function ($event){
        var that = $($event.target);
        that.find(".dropdown-menu[data-v-61dd7a3d]").css({
          "position":"absolute",
          "width":(window.outerWidth - that.offset().left)+"px"
          });
        that.addClass("open");
      },
      move:function($event){
        $($event.target).removeClass("open");
      },
      getAjax:function(){
        $.ajax({
          url:"http://localhost:8080/api/admin/type/findSon",
          type:"post",
          data:{
            "parentId":"32a25f7f02664bacad850783c217c2fc"
          },
          success:function(data){
            alert(data.data);
          }
        });
      }
  }
} 
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 500px){
#navbar-header{
    border-radius: 0%;
    padding-left: 5%; 
    height:100px;
    background-color:#fff;
    margin-bottom: 0px;
}
#navbar-header ul li{
  position: relative;
}
#navbar-header ul li .dropdown-menu{
  background: #333;
  opacity: .4;
  line-height: 60px;
  z-index: 999;
}
#navbar-header ul li .dropdown-menu li{
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  float: left;
}
#navbar-header ul li .dropdown-menu li a{
  height:60px;
  line-height: 60px;
  color: #fff;
  font-weight: bold;
}
#navbar-header ul li .dropdown-menu li a:hover{
  background: #333;
  opacity: .4;
  color: #7dbd35
}
#navbar-header ul li .nav-a{
    padding:15px 0px;
    font-size:14px;
    color:#596066;
    font-weight:bold;
    text-align:center;
    width:85px;
    height:100px;
    line-height:70px;
}
#navbar-header ul {
      position: relative; 
}
#navbar-header ul li .nav-a:hover{
  color: #fff;
  background-color: #82e70f;
  transition: 0.5s;
  -webkit-transition: 0.5s;
}
#font-list{
    font-size:24px;
    line-height:70px;
    color: #000;
}
}
</style>