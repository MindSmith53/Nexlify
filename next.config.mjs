/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me",
            },
        ],
    },
    output: 'standalone',
};

export default nextConfig;
