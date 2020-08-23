<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <Sider :collapsed.sync="collapsed" :menus="menus" :default-selected-keys="defaultSelectedKeys" />
    <a-layout>
      <Header :collapsed.sync="collapsed" @onCollapsed="onCollapsed" />
      <Main>
        <slot></slot>
      </Main>
    </a-layout>
  </a-layout>
</template>

<script>

export default {
  props: {
    collapsed: {
      type: Boolean,
      default() {
        return false;
      },
    },
    defaultSelectedKeys: {
      type: Array,
      default() {
        return ['/']
      }
    },
    menus: {
      type: Array,
      default() {
        return []
      }
    },
	},
	methods: {
		onCollapsed() {
			this.$emit('update:collapsed', !this.collapsed)
		}
	}
};
</script>

<style lang="stylus" scoped>

</style>
