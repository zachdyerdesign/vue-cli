module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    public: '0.0.0.0',
    disableHostCheck: true,
    allowedHosts: [
      '.codeanyapp.com'
    ]
  },
  outputDir: "../vue-cli-build",
  publicPath: "/vue-cli-build/"
};
