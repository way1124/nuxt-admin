

class Storage {
	constructor(path) {
		this.path = path
	}

	get() {
		return sessionStorage.getItem(this.path)
	}

	set(item) {
		return sessionStorage.setItem(this.path, item)
	}

	remove() {
		return sessionStorage.removeItem(this.path)
	}
}

export const Token = new Storage('token');
export const RouteList = new Storage('route-list');


export const redirectList = ['/user/Register', '/user/login', '/user/RegisterResult'];

