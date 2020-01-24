const moduleResolverConfig = require('./moduleResolverConfig');

module.exports = api => {
  api.cache(true);
  const commonConfig = {
    presets: [],
    plugins: [
      ['inline-dotenv'],
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
    plugins: [
      [
        "emotion",
        {
          // sourceMap is on by default but source maps are dead code eliminated in production
          "sourceMap": true,
          "autoLabel": process.env.NODE_ENV !== 'production',
          "labelFormat": "[local]",
          "cssPropOptimization": true
        }
      ],
      ...commonConfig.plugins
    ],
    ignore: ['**/*.css']
  };
};
