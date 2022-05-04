module.exports = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/work",
                permanent: true,
            },
        ];
    },
    reactStrictMode: true,
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
};
