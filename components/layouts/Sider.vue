<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <!-- <a-menu theme="dark" :default-selected-keys="['1']" mode="inline" class="menu">
      <a-menu-item key="1">
        <nuxt-link to="/">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <nuxt-link to="/text">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </nuxt-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="user" />
          <span>User</span>
        </span>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="team" />
          <span>Team</span>
        </span>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <a-icon type="file" />
        <span>File</span>
      </a-menu-item>
    </a-menu> -->
    <SiderItem :menus="menus" :collapsed='collapsed' theme="dark" mode="inline" :default-selected-keys="defaultSelectedKeys" />
  </a-layout-sider>
</template>

<script>
import { SiderProps } from '@/utils/props';

export default {
  props: SiderProps,
};
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-layout-sider {
  -webkit-box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
</style>
