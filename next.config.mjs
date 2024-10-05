/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    transpilePackages: ['lucide-react']
};

export default nextConfig;
