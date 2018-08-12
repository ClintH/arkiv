module.exports = {
  siteMetadata: {
    title: 'Arkixd',
    shortName: 'Arkixd'
  },
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
              maxWidth: 760,
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Arkixd',
        short_name: 'Arkixd',
        start_url: '/',
        background_color: '#e4022d',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/images/icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
