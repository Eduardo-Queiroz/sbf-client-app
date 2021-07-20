// eslint-disable-next-line no-undef
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'transform-inline-environment-variables',
      {
        include: ['NODE_ENV'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.ios.js',
          '.android.js',
          '.ts',
          '.ios.ts',
          '.android.ts',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
        ],
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            extensions: [
              '.js',
              '.ios.js',
              '.android.js',
              '.ts',
              '.ios.ts',
              '.android.ts',
              '.tsx',
              '.ios.tsx',
              '.android.tsx',
            ],
          },
        ],
      ],
    },
  },
};
