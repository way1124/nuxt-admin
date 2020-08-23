
import { message, Modal } from 'ant-design-vue';


export default function ({ $axios, store }, inject) {
	console.log(store)
  // Create a custom axios instance
  const service = $axios.create({
		baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
		timeout: 5000
		// withCredentials: true
	})
	
	// Request interceptors
	service.interceptors.request.use(
		(config) => {
			// Add X-Access-Token header to every request, you can add other custom headers here
			// if (store.getters.token) {
			// 	config.headers['X-Access-Token'] = store.getters.token
			// }
			return config
		},
		(error) => {
			Promise.reject(error)
		}
	)
	
	// Response interceptors
	service.interceptors.response.use(
		(response) => {
			// Some example codes here:
			// code == 20000: success
			// code == 50001: invalid access token
			// code == 50002: already login in other place
			// code == 50003: access token expired
			// code == 50004: invalid user (user not exist)
			// code == 50005: username or password is incorrect
			// You can change this part for your own usage.
			const res = response.data
			if (res.code !== 0) {

				message.error(res.message || 'Error')
				if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
					Modal.confirm({
						title: '你已被登出，可以取消继续留在该页面，或者重新登录?',
						content: '请确定是否登出',
						onOk() {
							return new Promise((resolve, reject) => {
								setTimeout(Math.random() > 0.5 ? (location.reload() & resolve) : reject, 1000);
							}).catch(() => console.log('Oops errors!'));
						},
						onCancel() {},
					})
				}
				return Promise.reject(new Error(res.message || 'Error'))
			} else {
				return response.data
			}
		},
		(error) => {
			message.error(error.message)
			return Promise.reject(error)
		}
	)

  // Inject to context as $service
  inject('service', service)
}