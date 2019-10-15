<template>
  <div class="d-flex">
    <el-menu router
             default-active="2"
             class="h-100 fs-lg sider-bar"
             :collapse="isCollapse"
             text-color="#fff"
             :default-openeds="openeds"
             active-text-color="#fb7323"
             background-color="#545c64">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>菜单1</span>
        </template>
        <el-menu-item index="路径">1-1</el-menu-item>
        <el-menu-item index="">1-2</el-menu-item>
        <el-menu-item index="">1-3</el-menu-item>
        <el-menu-item index="">1-4</el-menu-item>
        <el-menu-item index="">1-5</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SiderBar',
  data () {
    return {
      openeds: ['1', '2', '3']
    }
  },
  computed: {
    ...mapState({
      isCollapse: 'isCollapse'
    })
  }
}
</script>

<style scoped>
.sider-bar:not(.el-menu--collapse) {
  overflow-y: auto;
  overflow-x: hidden;
  width: 10rem;
}
* {
  user-select: none;
}
</style>
