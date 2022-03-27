module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'my-balance-mobile',
        moduleName: 'react-native-dotenv',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          api: ['./src/api'],
          components: ['./src/components'],
          constants: ['./src/constants'],
          hooks: ['./src/hooks'],
          interfaces: ['./src/interfaces'],
          navigation: ['./src/navigation'],
          services: ['./src/services'],
          store: ['./src/store'],
          theme: ['./src/theme'],
          utils: ['./src/utils'],
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
