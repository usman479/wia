/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['cdn.sanity.io','img.clerk.com']
    },
    someWebpackConfig : { ignoreWarnings: [/Serializing big strings/] }
}

module.exports = nextConfig
