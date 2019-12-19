module.exports = {
  pathPrefix: "/dsc-website-template",
  siteMetadata: {
    title: `Developer Student Club`,
    description: `Developer Student Clubs(DSC) is a Google Developers program for university students to acquire technical skills and solve problems`,
    university: `UniversityName`,
    lang: `en`,
    register: `https://www.google.it/intl/it/forms/about/`,
    mail: `example@example.com`,
    social: {
      youtube: `https://youtube.com`,
      github: `https://github.com`,
      twitter: `https://twitter.com`,
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dsc-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
