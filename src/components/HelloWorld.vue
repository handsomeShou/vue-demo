<template>
  <div>
    <Carousel></Carousel>
    <div class="container">
      <div class="row">
          <div class="col-md-6 leftContent">
            <h1>{{title}}</h1>
            <p><a href="#">{{content}}</a></p>
          </div>
          <div class="col-md-6 rightContent">
            <h1>相关新闻</h1>
            <div>
               <ul style="margin-top:0!important">
                <li>
                   <a href="#">英雄联盟</a>
                </li>
                <li>
                   <a href="#">穿越火线</a>
                </li>
                <li>
                   <a href="#">地下城与勇士</a>
                </li>
                <li>
                   <a href="#">魔兽世界</a>
                </li>
            </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  name: 'HelloWorld',
  components:{Carousel},
  data(){
    return{
      title:"西安市委书记王永康到曲江创意谷调研",
      content:"1月5日下午，陕西省委常委、西安市委书记王永康一行来到曲江创意谷考察调研。西安市副市长王勇、曲江新区管委会主任姚立军、西安曲江文化产业投资（集团）有限公司党委书记、董事长李铁军一行陪同。西安万科总经理郭继勋全程陪同讲解。..."
    }
  },
  methods:{
    change(){
       $(".rightContent").find('ul').animate({
         marginTop: '-22px'
      },1000,function(){
         $(this).css({marginTop : "0px"});
         var li  =$(".rightContent ul").children().first().clone()
         $(".rightContent ul li:last").after(li);
         $(".rightContent ul li:first").remove();
      })
    }
  },
  mounted(){
    setInterval(this.change,1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
/* a {
  color: #42b983;
} */
.leftContent h1{
  height: 43px;
  color: #505960;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0px;
  line-height: 22px;
}
.rightContent h1{
  color: #747474;
  font-size: 13px;
  font-weight: bold;
  line-height: 22px;
  padding-bottom: 15px;
  border-bottom: 2px solid #dedfe2;
  margin-bottom: 0px;
}
.rightContent div{
  height: 66px;
  overflow: hidden;
}
.rightContent ul li{
  line-height: 22px;
  height: 22px;
}
.leftContent p{
  height: 66px;
  color: #858585;
  font-size: 13px;
  line-height: 22px;
  margin: 0px;
  overflow: hidden;
}
.leftContent  a{
  text-decoration: none;
}
</style>
