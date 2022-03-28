module.exports = {
  root: ['./'],
  alias: {
    '~': './',
    '^@cnbu/(.+)': './\\1',
    '@cnbu-components': './components',
    '@cnbu-containers': './containers',
    '@cnbu-hocs': './hocs',
    '@cnbu-services': './services',
    '@cnbu-public': './public',
    '@cnbu-styles': './styles'
  },
  extensions: ['.js', '.mjs', '.json']
};
