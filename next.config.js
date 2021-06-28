module.exports = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  webpack: (config, { dev }) => { 
    config.module.rules.push( 
      { test: /\.test.js$/, loader: 'ignore-loader' }
    ); 
    return config; 
  }
}
