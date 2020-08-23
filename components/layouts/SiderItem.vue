<script>

import 'ant-design-vue/es/menu/style'
import Menu from 'ant-design-vue/es/menu'
import 'ant-design-vue/es/icon/style'
import Icon from 'ant-design-vue/es/icon'

import { SiderItemProps } from '@/utils/props';

const {
	Item: MenuItem,
	SubMenu
} = Menu

const renderMenu = (h, item) => {
	if (item && !item.hidden) {
		const bool = item.children && !item.hideChildrenInMenu
		return bool ? renderSubMenu(h, item) : renderMenuItem(h, item)
	}
	return null
}

const renderSubMenu = (h, item) => {
	return (
		<SubMenu key={item.path} title={(
			<span>
				{renderIcon(h, item.meta.icon)}
				<span>{renderTitle(h, item.meta.title)}</span>
			</span>
		)}>
			{!item.hideChildrenInMenu && item.children.map(cd => renderMenu(h, cd))}
		</SubMenu>
	)
}

const renderMenuItem = (h, item) => {
	const meta = Object.assign({}, item.meta)
	const target = meta.target || null
	const CustomTag = target && 'a' || 'nuxt-link'
	// const props = { to: { name: item.name } }
	const props = { to: item.path }
	const attrs = { href: item.path, target: target, name: item.name }
	if (item.children && item.hideChildrenInMenu) {
		// 把有子菜单的 并且 父菜单是要隐藏子菜单的
		// 都给子菜单增加一个 hidden 属性
		// 用来给刷新页面时， selectedKeys 做控制用
		item.children.forEach(cd => {
			cd.meta = Object.assign(cd.meta || {}, { hidden: true })
		})
	}
	return (
		<MenuItem key={item.path}>
			<CustomTag {...{ props, attrs }}>
				{meta.icon && renderIcon(h, meta.icon)}
				{renderTitle(h, meta.title)}
			</CustomTag>
		</MenuItem>
	)
}

const renderIcon = (h, icon) => {
	if (icon === undefined || icon === 'none' || icon === null) {
		return null
	}
	const props = {}
	typeof (icon) === 'object' ? (props.component = icon) : (props.type = icon)
	return <Icon {...{ props }} />
}

const renderTitle = (h, title) => {
	return <span>{title}</span>
}

const SiderItem = {
	name: 'SiderItem',
	props: SiderItemProps,
	data() {
		return {
			openKeys: [],
			selectedKeys: [],
			cachedOpenKeys: []
		}
	},
	render(h) {
		const { mode, theme, menus } = this
		const handleOpenChange = (openKeys) => {
			// 在水平模式下时，不再执行后续
			if (mode === 'horizontal') {
				this.openKeys = openKeys
				return
			}
			const latestOpenKey = openKeys.find(key => !this.openKeys.includes(key))
			if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
				this.openKeys = openKeys
			} else {
				this.openKeys = latestOpenKey ? [latestOpenKey] : []
			}
		}

		const dynamicProps = {
			props: {
				mode,
				theme,
				openKeys: this.openKeys,
				selectedKeys: this.selectedKeys
			},
			on: {
				select: menu => {
					console.log(menu)
					this.selectedKeys = menu.selectedKeys
					this.$emit('select', menu)
				},
				openChange: handleOpenChange
			},
		}

		const menuItems = menus.map(item => {
			if (item.hidden) {
				return null
			}
			return renderMenu(h, item)
		})
		return <Menu {...dynamicProps}>{menuItems}</Menu>
	},
	methods: {
		updateMenu() {
			const routes = this.$route.matched.concat()
			const { hidden } = this.$route.meta
			if (routes.length >= 3 && hidden) {
				routes.pop()
				this.selectedKeys = [routes[routes.length - 1].path]
			} else {
				if (routes.pop()) {
					// console.log(routes.pop())
					this.selectedKeys = [routes.pop() ? routes.pop().path : this.defaultSelectedKeys[0]]
				} else {
					this.selectedKeys = this.defaultSelectedKeys
				}
			}
			const openKeys = []
			if (this.mode === 'inline') {
				routes.forEach(item => {
					item.path && openKeys.push(item.path)
				})
			}

			this.collapsed ? (this.cachedOpenKeys = openKeys) : (this.openKeys = openKeys)
		}
	},
	computed: {
		rootSubmenuKeys: vm => {
			const keys = []
			vm.menus.forEach(item => keys.push(item.path))
			return keys
		}
	},
	created() {
		this.$watch('$route', () => {
			this.updateMenu()
		})
		this.$watch('collapsed', val => {
			if (val) {
				this.cachedOpenKeys = this.openKeys.concat()
				this.openKeys = []
			} else {
				this.openKeys = this.cachedOpenKeys
			}
		})
	},
	mounted() {
		this.updateMenu()
	}
}

export default SiderItem
</script>

