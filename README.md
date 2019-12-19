# Google Developer Student Club Template Website
The commitment of this repository is to allow all the Developer Student Clubs to **generate a site** for their club in **less than 3 minutes**, performing a few simple steps.<br> <br>
**The management of this site does not require any kind of web development and backend competence.**

## How can I change the content of the site without knowing web languages?
To change the content of the site, go to the 'content' folder located in the root of the project. In this folder there are several .yaml files in which you can modify the contents.
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

## Prerequisites
Nodejs >= 8.x 
### Installation
```sh
git clone https://github.com/andreabac3/dsc-website-template.git
cd dsc-website-template
npm install gatsby-cli -g
npm install 
```
# Deplot
## Deploy on github pages
```sh
npm run deploy
```
## Deploy on your machine 
```sh
gatsby develop --host 0.0.0.0
```
# Authors
* **Andrea Bacciu**  (**DSC LEAD** - Software Engineer) [Github profile](https://github.com/andreabac3)
* **Alessandro Scandone**  (**Core Team** - Frontend developer) - [Github profile](https://github.com/ascandone)
### Special thanks to the EKSU DSC teams:
This is a refactor of the [EKSU DSC](https://github.com/DSCEksu/dsceksu-laravel) website as a [gatsby](https://www.gatsbyjs.org/) template.

