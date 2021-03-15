module.exports = (config, options) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ],
      'plugins': [
        'babel-plugin-transform-typescript-metadata',
        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
        ['@babel/plugin-proposal-class-properties', { 'loose': true }]
      ]
    }
  });
  return config;
};


// see
// https://github.com/nrwl/nx/issues/3260
// https://github.com/nrwl/nx/pull/4826
