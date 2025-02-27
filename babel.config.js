module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          utils: './src/utils',
          constants: './src/constants',
          src: './src',
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
};
