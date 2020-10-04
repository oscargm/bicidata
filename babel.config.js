module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
  //   plugins: [
  //     "@babel/proposal-class-properties",
  //     "@babel/proposal-object-rest-spread",
  //   ],
};
