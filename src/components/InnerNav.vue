<template>
  <!-- <div class="nav"> -->
  <div class="g-wrap">
    <div class="crumbs">
      <a href="news.aspx">新闻中心</a>
      <a class="on">集团新闻</a>
    </div>
    <div class="columns">
      <a id="li8" href="news.aspx?type=8" class="on">集团新闻
        <span></span>
      </a>
      <a id="li9" href="news.aspx?type=9" class>地方动态
        <span></span>
      </a>
      <a id="li31" href="news.aspx?type=31" class>媒体报道
        <span></span>
      </a>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
        sonType: [
            {
            id: '',
            name: '',
            code: '',
            lev: 0,
            parentId: ''
        }
        ]
    };
  }
};
</script>

<style>
</style>
