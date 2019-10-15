<template>
  <div class="w-100 h-100">
    <Header />
    <div class="d-flex w-100 content">
      <SiderBar />
      <nuxt class="main-content" />
      <!-- <div class="w-100" style="background:red"></div> -->
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import SiderBar from '~/components/SiderBar'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['ossExpiration']),
  },
  mounted () {
    setInterval(() => {
      if (this.ossExpiration) {
        console.log('sts 过期了')
        localStorage.removeItem('sts') // 过期清除
        this.$store.dispatch('getSTS') // 重新获取
      }
    }, 30000) // 每隔30s 检查一次过期
  },
  components: {
    Header,
    SiderBar
  }
}
</script>
<style scoped lang="scss">
@import "../assets/scss/reset";
.content {
  height: calc(100vh - 3.333333rem);
}
.main-content {
  width: calc(100% - 10rem);
  overflow-y: auto;
}
</style>
