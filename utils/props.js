import PropTypes from 'ant-design-vue/es/_util/vue-types'

export const SiderProps = {
	menus: PropTypes.array,
	collapsed: PropTypes.bool.def(false),
	defaultSelectedKeys: PropTypes.array.def(['/'])
}

export const SiderItemProps = {
	theme: PropTypes.string.def('dark'),
	mode: PropTypes.string.def('inline'),
	...SiderProps,
}
