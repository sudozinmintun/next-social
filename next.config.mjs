/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "st.depositphotos.com",
            }
        ]
    }
};

export default nextConfig;
