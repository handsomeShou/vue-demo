<template>
    <div>
        <backgroundImage></backgroundImage>
        <BreadCrumb></BreadCrumb>
        <div class="container">
            <div class="row">
                <div class="col-md-9 newsContent">
                    <div class="col-md-2 newsTitle" >
                        <div class="dateContont">
                            <h1 class="day">{{ updateTime.substr(8,2)}}</h1>
                            <p>{{ updateTime.substr(5,2) }}</p>
                            <p>{{updateTime.substr(0, 4)}}</p>
                        </div>
                    </div>
                    <div class="col-md-10 newsTitle newsInfo">
                        <h1>个税专项附加扣除新办法，万科饮头啖汤</h1>
                        <p>
                            12月22日，国务院发布个人所得税专项附加扣除暂行办法。摆在一众企业面前的问题是：开发出能够采集所有员工信息的系统，确保2019年1月初发放工资时释放政策红利，需要多长时间？

万科的答案是：3天！</p>

<p>12月25日，万科集团开发的“e-HR个税专项扣除管理系统”实现上线试运行。这就意味着，如该系统正式启用，万科将成为国内首个可享受新政并取得实质性进展的企业。</p>

<p>月27日下午，国家税务总局深圳市盐田区税务局与万科集团在深圳大梅沙共同举行了“万科e-HR个税专项扣除管理系统”正式上线启动会。盐田区税务局局长王媛、万科总部管理中心的中心合伙人卓立峰和人力薪酬合伙人黎平、万翼科技人力系统项目经理陈文问，共同开启了系统的正式启动按钮。
                        </p>
                    </div>
                </div>
                <div class="col-md-3">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from "./BreadCrumb.vue"
import backgroundImage from "./backgroundImage.vue"
export default {
    name: 'newsInfo',
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
.newsContent{
    border-right: 2px solid #e1e1e1;
}
.dateContont{
  background-color: #e1e1e1;
  padding: 0 10px;
  width: 80%;
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
.newsTitle{
    padding: 0px;
}
.newsInfo h1{
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #474545;
    margin-bottom: 30px;
}
.newsInfo p{
    margin-bottom: 15px;
    color: #746969;
    font-size: 13px;
}
</style>


