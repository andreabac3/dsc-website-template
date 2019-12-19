# Google Developer Student Club Website Template

> A refactor of the [EKSU DSC](https://github.com/DSCEksu/dsceksu-laravel) website as a [gatsby](https://www.gatsbyjs.org/) template. You can generate a site for your DSC in 5 minutes, with **no knowledge required**.

## 🚀 Quick Start

To install you first need [node.js](https://nodejs.org/en/) on your machine

```bash
# Clone the repo
$ git clone https://github.com/andreabac3/dsc-website-template.git
$ cd dsc-website-template

# Install the gatbsy CLI
$ npm i -g gatsby-cli

# Install local dependencies
$ npm i

# Run on localhost:8000 (by default)
$ npm start

# Deploy
$ npm run deploy
```

## Edit

You can edit the website content in the `./content` directory as yaml file, and metadata (title, meta description, ...) in the siteMetadata field of `./gatbsy-config.js`

#### Site metadata
| name | usage |
|---|---|
| title |  Value of site `<title>` tag |
| description | Meta description  |
| header | Website header |
| lang | lang property |
| register | used in "become a member" buttons. |
| mail | used in footer |
| social | social links used in footer |

Please note that the both the `mail` and the `register` fields are optional (if undefined, they won't be shown on the website)

### Add a social link to teams.yaml

(for twitter, youtube, github, linkedin, you only need step 1)

Let's say I want to add the `telegram.org` as telegram link in the John Doe card.

Step 0: Check [here](https://fontawesome.com/icons?d=gallery&s=brands) if the icon is present

Step 1: Add a `telegram: telegram.org` entry in the John Doe social yaml field

Step 2: Add the following export in `./src/icons.js`:
```js
faTelegram as telegram
```

Step 3: In `./src/components/index/Teams.js`, add telegram:
```graphql
social {
	twitter
	github
	linkedin
	telegram
}
```

### Add a social link to website footer

(for twitter, youtube, github, linkedin, you only need step 1)

Let's say I want to add the `telegram.org` as telegram link in the website footer.

Step 0: Check [here](https://fontawesome.com/icons?d=gallery&s=brands) if the icon is present

Step 1: Add a `telegram: telegram.org` entry in the siteMetadata.social field in `./gatsby-config.js`

Step 2: Add the following export in `./src/icons.js`:
```js
faTelegram as telegram
```

Step 3: In `./src/components/Footer.js`, add telegram:
```graphql
social {
	youtube
	github
	twitter
	telegram
}
```

# Authors

* **Alessandro Scandone**  (Frontend developer) - [Github profile](https://github.com/ascandone)
* **Andrea Bacciu**  (Software Engineer) [Github profile](https://github.com/andreabac3)
