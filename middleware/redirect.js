import { redirectList, Token } from '@/utils/redirectLogin';
export default function ({ route, redirect }) {
	if (process.client) {
		// const token = sessionStorage.getItem('token');
		// if (!token && route.path !== '/user/login') {
		// 	redirect('/user/login');
		// }

		const token = Token.get();
		if (!token) {
			if (redirectList.includes(route.path)) {
				redirect();
				return
			}
			redirect('/user/login');
		}
	}
}