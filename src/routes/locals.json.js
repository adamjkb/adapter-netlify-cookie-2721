/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export function get(request) {
    return {
        status: 200,
        body: JSON.stringify(request.locals),
    }
 }