const moduleResolverConfig = require('./moduleResolverConfig');

module.exports = api => {
  api.cache(true);
  const commonConfig = {
    presets: [],
    plugins: [
      ['inline-dotenv'],
      ['module:@emotion/core', { inline: true }],
      [
        'import',
        {
          libraryName: 'ramda',
          libraryDirectory: 'src',
          camel2DashComponentName: false
        },
        'import-ramda'
      ],
      [
        'module-resolver',
        {
          ...moduleResolverConfig
        }
      ]
    ]
  };
  return {
    presets: [
      [
        'next/babel',
        {
          'preset-env': {
            modules: false
          }
        }
      ]
    ],
    plugins: [...commonConfig.plugins],
    ignore: ['**/*.css']
  };
};
