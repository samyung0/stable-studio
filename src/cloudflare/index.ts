/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

interface Env {
	MailLiteApiKey: string;
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const headers = {
			"content-type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST,OPTIONS",
			"Access-Control-Max-Age": "86400",
		};
		async function handleOptions(request: Request) {
			if (
				request.headers.get("Origin") !== null &&
				request.headers.get("Access-Control-Request-Method") !== null &&
				request.headers.get("Access-Control-Request-Headers") !== null
			) {
				// Handle CORS preflight requests.
				return new Response(null, {
					headers: {
						...headers,
						"Access-Control-Allow-Headers": request.headers.get(
							"Access-Control-Request-Headers",
						)!,
					},
				});
			} else {
				// Handle standard OPTIONS request.
				return new Response(null, {
					headers: {
						Allow: "POST, OPTIONS",
					},
				});
			}
		}

		let response = {
			success: false,
			message: "Unknown error",
		};
		if (!env.MailLiteApiKey) {
			response.message = "Internal error";
			return new Response(JSON.stringify(response), {
				status: 500,
				headers,
			});
		}
		const method = request.method;
		const contentType = request.headers.get("content-type");
		const ua = request.headers.get("user-agent");
		const referrer = request.headers.get("Referrer");
		console.log({ ua, referrer });
		if (request.method === "OPTIONS") {
			// Handle CORS preflight requests
			return handleOptions(request);
		}
		if (method !== "POST") {
			response.message = "Invalid method";
			return new Response(JSON.stringify(response), {
				status: 400,
				headers,
			});
		}
		if (contentType !== "application/json") {
			response.message = "Invalid content type";
			return new Response(JSON.stringify(response), {
				status: 400,
				headers,
			});
		}
		if (!ua?.includes("Mozilla") || !referrer?.includes("stablestudio.org")) {
			response.message = "Invalid request";
			return new Response(JSON.stringify(response), {
				status: 403,
				headers,
			});
		}
		try {
			const body = (await request.json()) as {
				email: string;
				name: string;
				enquiry: string;
			};
			if (!body.email || !body.name || !body.enquiry) {
				response.message = "Invalid Data";
				return new Response(JSON.stringify(response), {
					status: 400,
					headers,
				});
			}
			const res = await fetch(
				"https://connect.mailerlite.com/api/subscribers",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						Authorization: `Bearer ${env.MailLiteApiKey}`,
					},
					body: JSON.stringify({
						email: body.email,
						fields: {
							name: body.name,
							enquirymessage: body.enquiry,
						},
						groups: ["135355636160399051"],
					}),
				},
			);
			return res;
		} catch (e) {
			response.message = "Internal error";
			return new Response(JSON.stringify(response), {
				status: 500,
				headers,
			});
		}
	},
} satisfies ExportedHandler<Env>;
