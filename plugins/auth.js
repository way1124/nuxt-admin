import { redirectList, Token, RouteList } from '@/utils/redirectLogin';

const flattenNew = arr => arr.reduce((prev, next) => Object.prototype.toString.call(next.children) == '[object Array]' ? prev.concat(flattenNew(next.children)) : prev.concat(next), [])

export default ({ app }) => {
	app.router.beforeEach((to, from, next) => {
		// process.client 是否来自客户端渲染
		if (process.client) {

			const token = Token.get();
			// if (!token && to.path !== '/user/login') {
			// 	next('/user/login');
			// } else if (to.path !== '/user/login') {
			// 	next();
			// } else {
			// 	next();
			// }

			const list = RouteList.get() ? JSON.parse(RouteList.get()) : []
			if (!token && redirectList.includes(to.path)) {
				next();
				return
			}
			if (!token) {
				next('/user/login');
				return
			}

			if (token && redirectList.includes(to.path)) {
				next();
				Token.remove()
				return
			}

			const pathList = Array.from(flattenNew(list), r => r.path)
			if (pathList.includes(to.path)) {
				// console.log(flattenNew(list), to.path)
				next();
				return
			}
			console.log(app.$nuxt)
			// app.$nuxt.error({ message: 'xxxxxxx', statusCode: 404 })
		}
	});
};