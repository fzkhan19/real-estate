/** @type {import('next').NextConfig} */
import {setupDevPlatform} from '@cloudflare/next-on-pages/next-dev';
const nextConfig = {
	images: {
		domains: [],
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "ALLOW",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), geolocation=(), microphone=()",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
				],
			},
		];
	},
};

if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
	await setupDevPlatform();
}

export default nextConfig;
// export default MillionLint.next({
// 	rsc: true,
// })(nextConfig);
