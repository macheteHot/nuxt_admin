<template>
  <div class='bg-dark d-flex ai-center header-nav'>
    <div @click="toggle" class="flex-1 cur-point d-flex ai-center">
      <div
           class="logo ml-2 mt-1"></div>
      <div class="text-white fs-lmg pt-4 mx-1">
       公司名称
      </div>
    </div>
    <el-dropdown class="mr-2"
                 placement="bottom"
                 @command="handleCommand">
      <el-button type="text"
                 class="text-grey-1 mr-2 mt-3 fs-lmg">欢迎您:{{name}}</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginOut">登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      name: ''
    }
  },
  beforeMount () {
    let name = localStorage.getItem('userName') 
    if (name) {
      this.name = name
    } else {
      // this.$router.push('/login')
    }
  },
  methods: {
    ...mapMutations(['toggle']),
    async handleCommand (command) {
      if (command === 'loginOut') {
        let { isOK } = await $apis.loginOut()
        if (isOK) {
          window.location.href = '/login'
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
.header-nav {
  height: 3.333333rem;
}

.icon-menu1 {
  font-size: 2.222rem;
}
.logo {
  background-image: url("../assets/img/logo.png");
  background-size: contain;
  width: 40px;
  height: 40px;
}
* {
  user-select: none;
}
</style>
