<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img src="../../../public/img/4.jpg" alt="" />
      <h2 class="title">招聘管理系统 后台</h2>
    </div>

    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <div class="item">
            <a-input
              size="large"
              placeholder="账户"
              v-model:value="loginForm.account"
            >
              <template #prefix> <UserOutlined /> </template>
            </a-input>
          </div>
          <div class="item">
            <a-input
              size="large"
              placeholder="密码"
              v-model:value="loginForm.password"
            >
              <template #prefix> <UnlockOutlined /> </template>
            </a-input>
          </div>
          <div class="item">
            <a href="">忘记密码</a>
          </div>

          <div class="item">
            <a-button type="primary" @click="login"> 登录 </a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input
              size="large"
              v-model:value="regForm.account"
              placeholder="账户"
            >
              <template #prefix> <UserOutlined /> </template>
            </a-input>
          </div>
          <div class="item">
            <a-input
              size="large"
              v-model:value="regForm.password"
              placeholder="密码"
            >
              <template #prefix> <UnlockOutlined /> </template>
            </a-input>
          </div>
          <div class="item">
            <a-input
              size="large"
              placeholder="邀请码"
              v-model:value="regForm.inviteCode"
            >
              <template #prefix> <QrcodeOutlined /> </template>
            </a-input>
          </div>
          <div class="item">
            <a-button @click="register" type="primary" size="large">
              注册
            </a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scpoed>
@import "./index.scss";
</style>