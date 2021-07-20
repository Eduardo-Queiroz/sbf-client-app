/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {getDefaultConfig} = require('metro-config');
const {
  extraNodeModules,
  watchFolders,
} = require('react-native-yarn-workspaces-v2')(__dirname);

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    watchFolders,
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      ...extraNodeModules,
    },
  };
})();
