
/** @type {import('next').NextConfig} */
const nextConfig = {
    
    webpack: (config, {isServer}) => {
        config.module.rules.push({test: /\.node$/, use: 'raw-loader'})

        if(!isServer) config.externals.push('canvas');
        return config;
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ]
    }
};

export default nextConfig;
