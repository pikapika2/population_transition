module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src/components/', 'src/lib/', 'src/pages/']
  },
  env: {
    X_API_KEY: process.env.X_API_KEY,
  },
}
