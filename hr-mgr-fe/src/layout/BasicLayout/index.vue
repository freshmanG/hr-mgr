<template>
  <div class="basic-layout">
    <div class="app-header">
      <div class="left">
        <img src="../../../../下载.jpg" alt="" />
        <div class="title">图书管理系统</div>
      </div>
      <div class="right">
        <div class="helle-msg">你好 xxx</div>
        <div class="logout">退出</div>
      </div>
    </div>
    <div class="app-header-placeholder"></div>
    <div class="app-content">
      <div class="left">
        <app-nav />
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script src='./index.js'>
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>