<template>
<div>
  <backgroundImage></backgroundImage>
  <BreadCrumb></BreadCrumb>
  <div class="container ">
  <div class="row">
    <div class="col-sm-12 col-md-8 textContent">
          <div class="col-md-2" >
              <div class="dateContont">
                <h1 class="day">{{ updateTime.substr(8,2)}}</h1>
                <p>{{ updateTime.substr(5,2) }}</p>
                <p>{{updateTime.substr(0, 4)}}</p>
              </div>
          </div>
          <div class="col-md-10">
              <div class="summary">
                <h1>{{ name }}</h1>
                <!-- <h3>发布者: 万科集团&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浏览次数: 4514</h3> -->
                <p><a href="news.aspx?type=8&amp;id=6434">{{ content }} 12月22日，国务院发布个人所得税专项附加扣除暂行办法。摆在一众企业面前的问题是：开发出能够采集所有员工信息的系统，确保2019年1月初发放工资时释放政策红利，需要多长时间？万科的答案是：3天！12月25日，万科集团开发的“e-HR个税专项扣除管理系统”实现上线试运行。这就意味着，如该系统正式启用，万科将成为国内首个可享受新政并取得实质性进展的企业。12月27日下午，国家税务总局深圳市盐田区税务局...</a></p>
              </div>
          </div>
    </div>
  </div>  
</div>
</div>
</template>

<script>
import BreadCrumb from "./BreadCrumb.vue"
import backgroundImage from "./backgroundImage.vue"

export default {
  name: 'AbstractEssay',
  components: {BreadCrumb,backgroundImage},
  data() {
    return {
      id: '',
      name: 'Test',
      createTime: '2018-07-29 23:01:27',
      updateTime: '2018-07-29 23:01:27',
      typeId: '',
      imgUrl:'',
      content: ''
    }
  }
}

</script>


<style scoped>
.textContent{
  padding-bottom: 15px;
  border-bottom: 1px #746969 dotted;
}
.dateContont{
  background-color: #e1e1e1;
  padding: 0 10px;
  height: 100px;
}
.dateContont h1{
  font: bold 36px/36px;
  padding: 5px 0 3px 0;
  color:#e62b1e;
}
.dateContont p{
  padding: 0px;
  margin: 0px;
  line-height: 18px;
}
.summary{
  height: 100px;
}
.summary h1{
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  color: #474545;
}
.summary p{
  font-size: 12px;
  line-height: 18px;
  height: 85px;
  overflow: hidden;
  color:#746969;
}
 a {
    display: block;

    color: inherit;

    text-decoration: none;

        cursor: pointer;
}
/*
.date-block {
    float: left;
    padding: 0 10px;
    width: 68px;
    height: 88px;
    font: 14px/15px "Segoe UI","wf_segoe-ui_normal","Arial",sans-serif;
    color: #444;
    background-color: #e1e1e1;
}

.link-block a .summary {
    float: left;
    margin-left: 18px;
    width: 640px;
    height: 100%;
    line-height: 18px;
    color: #746969;
}

.link-block a h3 {
    margin: -4px 0;
    color: #746969;
}

h3 {
    font-weight: normal;
    font-size: 12px;
    color: #746969;
} */
</style>
