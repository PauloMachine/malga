// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/checkout",
        permanent: true,
      },
    ];
  },
};
