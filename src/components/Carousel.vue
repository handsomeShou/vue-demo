<template>
  <div id="myCarousel" class="carousel slide">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
      <div class="item" :class="{active: index==0}" v-for="(item, index) in imgs">
        <img :src="item.isrc">
      </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      imgs: [
        { isrc: "/static/image/1.jpg", title: "test1" },
        { isrc: "/static/image/1.jpg", title: "test2" },
        { isrc: "/static/image/1.jpg", title: "test3" }
      ]
    };
  },
  methods: {}
};
</script>

<style>


</style>
