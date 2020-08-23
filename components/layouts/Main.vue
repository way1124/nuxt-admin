<template>
  <a-layout-content>
		<div class="main">
			<slot></slot>
		</div>
	</a-layout-content>
</template>

<style lang="less" scoped>
.main {
	margin: 24px 24px 0;
	padding: 24px;
	min-height: "280px";
	background: #fff;
}
</style>
