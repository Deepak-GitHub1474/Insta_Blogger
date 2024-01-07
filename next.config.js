/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'res.cloudinary.com',
            'avatars.githubusercontent.com', 
            'miro.medium.com',
            'imageio.forbes.com',
            's3.ap-south-1.amazonaws.com'
        ],
    },    
}

module.exports = nextConfig
