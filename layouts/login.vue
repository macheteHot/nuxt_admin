<template>
  <div
    class="layout-login"
  >
    <div class="login-form">
      <h1 class="title">
        WIFI安全答题系统
      </h1>
      <nuxt></nuxt>
    </div>
    <div class="buttom-wrapper">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {}
    },
    methods: {}
  }
</script>
<style lang="scss">
  @import "../assets/scss/variables";

  .layout-login {
    position: absolute;
    padding: 8% 0 0;
    width: 100%;
    min-height: 100%;
    background-color: #f0f2f5;
    background-image: url('~assets/img/loginBg.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .logo-login {
      width: 260px;
      vertical-align: middle;
    }

    .title {
      position: relative;
      height: 34px;
      line-height: 34px;
      margin: 0 auto 45px;
      text-align: center;
      font-size: 38px;
      font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
      font-weight: 600;
      color: #5d81f9;
    }

    .login-form {
      width: 450px;
      margin: 0 auto 100px;
      padding: 50px 0 20px;
      background: map-get($colors,'grey-1');
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    }

    .buttom-wrapper {
      width: 100%;
      position: absolute;
      bottom: 41px;

      .buttom-link {
        height: 17px;
        line-height: 17px;
        margin-bottom: 11px;

        a {
          color: rgba(255, 255, 255, 1);
        }

        .service-item {
          margin: 0 24px;
          cursor: pointer;
        }
      }

      .copyright {
        height: 17px;
        line-height: 17px;
        font-size: 12px;
        color: #606266;
      }
    }

    .main {
      width: 300px;
      margin: auto;
    }

    .el-form {
      width: 100%;
      margin: auto;
    }

    .el-button {
      width: 300px;
      margin: auto;
      display: block;
      height: 40px;
      border-radius: 35px;
    }
  }
</style>
