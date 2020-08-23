<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-admin</h1>
      <div class="links">
        <a-button @click="primary" type="primary">Primary</a-button>
      </div>
      <a href="/text">text</a>
      <div>{{project}}</div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login";
export default {
  data() {
    return {
      project: "1111",
    };
  },
  asyncData(context) {
    return { project: "nuxt" };
  },
  methods: {
    async primary() {
      login({
        username: "",
        password: "",
        remember_me: true,
        captcha: "12345",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
}
</style>
