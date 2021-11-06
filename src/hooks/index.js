const extractCookieByName = (name, cookieString) => {
	const nameEQ = name + '=';
	const ca = cookieString.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({request, resolve}) {
	request.locals.username = request.headers.cookie ? extractCookieByName('kit_username', request.headers.cookie) : ''

	console.log('>> handle - request.headers:', request.headers);
	const response = await resolve(request);

	return response;
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
	console.log('>> getSession - request.headers:', request.headers);
	return {
		username: request.headers.cookie ? extractCookieByName('kit_username', request.headers.cookie) : ''
	};
}
