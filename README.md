# NextJS Backend Tutorial #

Hi! This is a repository that's dedicated for a NextJS backend tutorial that I'm following. 
This is the link to the video I'm referencing 
https://www.youtube.com/watch?v=rOpEN1JDaD0

## Third-Party Services ##
- Hostinger VPS Hosting (I didn't use this because I couldn't justify spending $100+ each year for a tutorial, but if you want to, use the code JAVASCRIPTMASTERY for 10% off)
- Arcjet (I'm using the free tier, just create a new project/site)
- HTTPie (An alternative to Postman)
- Upstash

## Setup Process ##
Initialize ExpressJS with this command \
`npx express-generator --no-view --git ./`

Install a package called nodemon, that hot-refreshes the server each time a change is made \
`npm i --save-dev nodemon`

In the package.json file, make some changes: 
- Add this under private: true \
  `"type": "module",`

- Add these two scripts: \
`"start": "node app.js",`
`"dev": "nodemon app.js"`

Lastly (and optionally), add ESLint using this command and with these settings: \
`npx eslint --init` 

<img width="516" height="195" alt="image" src="https://github.com/user-attachments/assets/1c0ca254-d5af-4e67-ad7e-eb587708bbee" />
