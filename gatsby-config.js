module.exports = {
  siteMetadata: {
    title: 'Arkixd',
    shortName: 'Arkixd'
  },
  flags: {PRESERVE_WEBPACK_CACHE: true},
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify-cms-paths',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images/uploads`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/icons`,
        name: 'icons'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-plugin-netlify-cms-paths'
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 520,
              showCaptions: true,
              withWebp: true
            }
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true
            }
          },
          'gatsby-remark-smartypants',
          'gatsby-remark-widows'
        ]
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Arkixd',
        short_name: 'Arkixd',
        start_url: '/',
        background_color: '#e4022d',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
