# 🚀 Google Developer Student Club Template Website

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b3c527e65df74e49865a48233731b49b)](https://www.codacy.com/manual/andreabac3/dsc-website-template?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=andreabac3/dsc-website-template&amp;utm_campaign=Badge_Grade) <img src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-built_white.svg" width="90"> <img src="https://github.com/favicon.ico" width="48">


The commitment of this repository is to allow all the Developer Student Clubs to **generate a site** for their club in **less than 3 minutes**, performing a few simple steps.<br> <br>
**The management of this site does not require any kind of web development and backend competence.**

## How can I change the content of the site without knowing web languages?

To change the content of the site, go to the `content` folder located in the root of the project. In this folder there are several .yaml files in which you can modify the contents.  <br> To modify the metadata (title, description, ...) in the site Metadata field of `./gatbsy-config.js`
#### Example of content/teams.yaml

```yaml
- name: John Doe
  role: Mentor
  img: images/teams/avatar.png
  descs:
    - Mobile and Web developer
    - Open source enthusiast
    - Community mentor
  social:
    twitter: https://www.example.com
    github: https://www.example.com
    linkedin: https://www.example.com
```


#### Site metadata

| name | usage |
|---|---|
| title |  Value of site `<title>` tag |
| description | Meta description  |
| header | Website header |
| lang | Lang property |
| register | Link for the "become a member" button. |
| mail | Used in footer |
| social | Social links used in footer |

Please note that the both the `mail` and the `register` fields are optional (if undefined, they won't be shown on the website)

## Prerequisites

To install you first need [node.js](https://nodejs.org/en/) on your machine.
NodeJS >= 8.x

## Quick Start

```sh
# Clone the repo
git clone https://github.com/andreabac3/dsc-website-template.git
cd dsc-website-template

# Install the gatbsy CLI
npm install gatsby-cli -g

# Install local dependencies
npm install 
```

# Deploy

## Deploy on github pages

Remember to fork the project to deploy on github pages

```sh
npm run deploy
```

## Deploy on your machine 

```sh
gatsby develop --host 0.0.0.0
```

## Deploy on Firebase Hosting 🔥

We suggest to read the [Firebase Hosting guide reference from Gatsby website](https://www.gatsbyjs.org/docs/deploying-to-firebase/)

Make sure you have:
- a Firebase Account
- created a Firebase Project
<details><summary>Click here to read more about Firebase Deploy</summary>
<p>




> You can skip the first two points of the guide if you have already installed and configured the following dependencies.



<br>

1. Install the Firebase CLI with npm by running the following command and sign into firebase account:
```sh
npm install -g firebase-tools
```
2. Sign into Firebase using your Google account by running the following command:
```sh
firebase login
```
3. Navigate into the root of the project and running the following command:
```sh
firebase init
```
then select **Firebase Hosting** and the firebase project you wish to use or creat a new one if you haven't done it previously.

4. Finally we can deploy our website
```sh
gatsby build && firebase deploy
```
All done! Once the deployment concludes, you can access your website using `firebaseProjectId.firebaseapp.com` or `firebaseProjectId.web.app`.

N.B: of course replace the keyword <firebaseProjectId> with the name of your project.
</p>
</details>


## Extra steps: How to add extra icons, links 
#### Add a social link to teams.yaml
<details><summary>Click here to read  How to add extra icons </summary>
<p>
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

#### Add a social link to website footer

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
</p>
</details>

# Authors

*   **Andrea Bacciu**  (**DSC LEAD** - Software Engineer) [Github profile](https://github.com/andreabac3)
*   **Alessandro Scandone**  (**Core Team** - Frontend developer) - [Github profile](https://github.com/ascandone)

### Special thanks to the EKSU DSC teams:

This is a refactor of the [EKSU DSC](https://github.com/DSCEksu/dsceksu-laravel) website as a [gatsby](https://www.gatsbyjs.org/) template.
