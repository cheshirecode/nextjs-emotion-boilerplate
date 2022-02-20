module.exports = {
  root: ['./'],
  alias: {
    '~': './client',
    '^@cnbu/(.+)': './client/\\1',
    '@cnbu-components': './client/components',
    '@cnbu-containers': './client/containers',
    '@cnbu-hocs': './client/hocs',
    '@cnbu-services': './client/services',
    '@cnbu-static': './static'
  },
  extensions: ['.js', '.mjs', '.json']
};
