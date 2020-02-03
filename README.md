# Next.js Boilerplate for Firebase Cloud Functions and Hosting

Firebase hosting rewrites routes to Cloud Functions which we can use to serve a server-side rendered Next.js App.

Idea is to be able to use Next.js app on Firebase.

Included in boilerplate:

- TailwindCSS with PostCSS
- Emotion Styled Components

Todo: fix purgecss for production

## Usage

```
yarn install
# setup firebase config for deploying (connect with project on platform)
yarn setup

# run local environment for development (:client/:server abbreviations)
yarn watch

# build production version (:client/:server abbreviations)
yarn build
yarn serve

# deploy to firebase
yarn deploy
```

### Reference

Project is based on following [repo](https://github.com/jthegedus/firebase-gcp-examples/tree/master/functions-nextjs).
