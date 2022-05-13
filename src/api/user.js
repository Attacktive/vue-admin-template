export function login() {
	return new Promise(resolve => {
		resolve({
			code: 20000,
			data: { token: "admin-token" }
		});
	});
}

export function getInfo() {
	return new Promise(resolve => {
		resolve({
			code: 20000,
			data: {
				roles: ["admin"],
				introduction: "I am a super administrator",
				avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
				name: "Super Admin"
			}
		});
	});
}

export function logout() {
	return new Promise(resolve => {
		resolve({
			code: 20000,
			data: { token: "admin-token" }
		});
	});
}
