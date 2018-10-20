const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const path = require('path');

const nextConfig = ({ defaultConfig }) => ({
  ...defaultConfig,
  encoding: 'utf-8',
  webpack: config => ({ ...config, node: { ...config.node, fs: 'empty' } })
});

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    //this doesn't go through Babel so we need to
    //manually call dotenv to unpack environments variables into process.env
    require('dotenv').config();
    const withCSS = require('@zeit/next-css');
    const withOptimizedImages = require('next-optimized-images');
    const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
    const compose = require('ramda/src/compose.js');
    const fullConfig = compose(
      withBundleAnalyzer,
      config => ({
        ...config,
        //withBundleAnalyzer
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../../bundles/server.html'
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html'
          }
        }
      }),
      withOptimizedImages,
      config => ({
        ...config,
        // withOptimizedImages
        // handle but don't process, Webp generation is here too
        optipng: false,
        pngquant: null //change to {} to process
      }),
      withCSS,
      config => ({
        ...config,
        webpack: (config, { dev, isServer }) => {
          config.module.rules.push({
            test: /.(woff|woff2|ttf|eot)$/,
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/',
              outputPath: 'static/',
              name: '[name]-[hash].[ext]',
              limit: 10000,
              fallback: 'file-loader'
            }
          });
          config.module.rules.map(rule => {
            if (rule.loader === 'babel-loader') {
              rule.options.cacheDirectory = false;
            }
            return rule;
          });
          if (!dev) {
            if (isServer) {
              config.externals = ['react', 'react-dom', ...config.externals];
            }

            config.resolve.alias = {
              ...config.resolve.alias,
              react: path.join(__dirname, 'preact-compat'),
              react$: path.join(__dirname, 'preact-compat'),
              'react-dom': 'preact-compat',
              'react-dom$': 'preact-compat',
              'react-emotion': 'preact-emotion'
            };
          }

          return config;
        },
        serverRuntimeConfig: {
          // Will only be available on the server side
          mySecret: 'secret'
        },
        publicRuntimeConfig: {
          // Will be available on both server and client
          publicConfig: 'public'
        }
      })
    )(nextConfig);

    return fullConfig;
  }
  return nextConfig;
};
