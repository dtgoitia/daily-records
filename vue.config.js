module.exports = {
  // Ensure the base URL is set correctly on build time
  publicPath: process.env.NODE_ENV === 'production'
    ? '/daily-records/'
    : '/',
}