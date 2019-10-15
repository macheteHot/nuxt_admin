<template>
  <div>
    <p>通过后台初始化注入的:------------------{{info}}</p>
    <p>通过浏览器请求获取参数:-------------{{Binfo}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    async asyncData({app}){
      return {info:'注入的参数,会被编码到html中'}
    },
    head() {
      return {
        title: '首页'
      }
    },
    data(){
      return {
        Binfo:''
      }
    },
    mounted(){
      this.getInfo()
    },
    methods:{
      async getInfo(){
        const {info} = await this.$apis.test();
        this.Binfo = info
      }
    },
    computed: {
      ...mapState({
        list: state => state.menus.list
      })
    }
  }
</script>

<style scoped lang="scss">

</style>
