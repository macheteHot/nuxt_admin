<template>
  <div class="login">
    <!--样式在layout/login-->
    <div class="main">
      <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="loginForm"
        class=""
      >
        <el-form-item label="" prop="username">
          <el-input placeholder="账号" v-model.trim="form.username"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            placeholder="密码"
            type="password"
            v-model.trim="form.password"
            auto-complete="off"
            @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="login"
            :loading="loading"
            size="medium"
          >登录
          </el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

  export default {
    layout: 'login',
    name: 'login',
    components: {},
    data() {
      return {
        loading: false,
        form: {
          username: 'admin',
          password: '123'
        },
        rules: {
          username: [{required: true, message: '请输入账号', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        }
      }
    },
    methods: {
      login() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            // this.$apis.doLogin(this.form).then(res => {
            //   if (res.username !== undefined) {
            //     this.$store.commit('setUserName',res.username)
            //     this.$router.push({name: 'index'})
            //   }
            // })
          } else {
            return false
          }
        })
      }
    }
  }
</script>
<style>

</style>
