<template>

  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img src="" alt="">
      <div class="title">图书管理系统 后台</div>
    </div>
    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登入">
         <div class="item">
          <a-input size="large" placeholder="账户">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
         </div>
          <div class="item">
            <a-input size="large" placeholder="密码">
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a href="#">忘记密码</a>
          </div>

          <div class="item">
            <a-button size="large" type="primary">login</a-button>
          </div>
        </a-tab-pane>


        <a-tab-pane key="2" tab="注册">
          <div class="item">
          <a-input size="large" placeholder="账户">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
         </div>
          <div class="item">
            <a-input size="large" placeholder="密码">
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input size="large" placeholder="邀请码">
              <template #prefix>
                <MailOutlined />
              </template>
              
            </a-input>
          </div>

          <div class="item">
            <a-button size="large" type="primary">register</a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
  
</template>

<script src="./index.js"></script>

<style lang="scss" scpoed>
  @import './index.scss';
</style>