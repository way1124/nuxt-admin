<template>
  <NuxtLayout :collapsed.sync="collapsed" :menus="menus" :default-selected-keys="defaultSelectedKeys">
    <Nuxt />
  </NuxtLayout>
</template>

<script>
import { RouteList } from '@/utils/redirectLogin';

export default {
  data() {
    return {
      collapsed: false,
      menus: [],
      defaultSelectedKeys: ['/']
    };
  },
  mounted() {
    new Promise((resolve, reject) => {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish() & resolve(), 1000)
      })
    }).then(() => this.menus = RouteList.get() ? JSON.parse(RouteList.get()) : [])
    // this.menus = RouteList.get() ? JSON.parse(RouteList.get()) : []
  },
  methods: {},
};
</script>

<style lang="less">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button {
  &--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    &:hover {
      color: #fff;
      background-color: #3b8070;
    }
  }
  &--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
    &:hover {
      color: #fff;
      background-color: #35495e;
    }
  }
}

.__nuxt-error-page {
  z-index: 9999;
}
</style>
