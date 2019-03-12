module.exports = {
  staticFileGlobs: [
    'manifest.json',
    'images/*',
    'src/**/*',
    'fonts/*.css',
    'fonts/woff2/*',
  ],
  runtimeCaching: [
    {
      urlPattern: /\/@webcomponents\/webcomponentsjs\//,
      handler: 'fastest'
    },
    {
      urlPattern: /^https:\/\/account.modir.app\//,
      handler: 'fastest'
    }
  ]
};
