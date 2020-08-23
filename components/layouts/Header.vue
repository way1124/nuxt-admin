<template>
  <a-layout-header class="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="onCollapsed"
    />
  </a-layout-header>
</template>

<script>
export default {
	props: {
		collapsed: {
			type: Boolean,
			default() {
				return false;
			}
		}
	},
	methods: {
		onCollapsed() {
			this.$emit('onCollapsed')
		}
	}
}
</script>

<style lang="less" scoped>
.header {
  background: #fff;
  padding: 0;
  position: relative;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 9;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
