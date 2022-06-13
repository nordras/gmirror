# Front End Take Home

For the next interview step, you need to prepare a presentation around a project that you coded yourself. 

The project be a user interface that mimics a GitHub user profile using:
- React
- Typescript
- GraphQL
- Relay
- CSS/SCSS

The presentation will be 60 minutes: 
- in the first half, you will present your project and approach
- in the second half, the Simulmedia team will ask questions

Please submit your code and presentation either through a GitHub repository or over email.
## Set Up
1. make sure you have yarn installed.
  - if not, run `npm install --global yarn`.
2. create a new repo by clicking `use this template`.
3. `cd` into the cloned directory.
4. Run `yarn` to install dependencies.
5. Configure GitHub GraphQL Authentication:
   - Open github.com/settings/tokens.
   - Ensure that at least the repo scope is selected.
   - Generate a token.
   - Create a file in the root of this directory called `.env.local` and add the following contents, replacing <TOKEN> with your authentication token:
    ```
    REACT_APP_GITHUB_AUTH_TOKEN=<TOKEN>
    ```
6. Run `yarn start` to start the development server.

## Project MVPs
- Use the GitHub GraphQL API to build an simplified version of the GitHub profile page.
- The Project should default to showing your own profile data
- An input should allow the user to submit a github username (or `login` per the graphQL schema) to load any user's public data
- The interface should contain 2 sections:
  1. User details:
    - avatar
    - name
    - login (username)
    - status (if provided)
    - bio  (if provided)
    - location (if provided)
    - company (if provided)
    - websiteUrl (if provided)
    - twitterUsername (if provided)
    - total followers
    - total following
  2. Last 8 Repositories, including the following details:
    - name 
    - description (if provided)
    - primary language (if provided)
    - total stargazers
    - total forks
- The project should take advantage of `React.suspense` and provide fallbacks where you see fit.
- The project should take stylistic inspiration from the media in the design section below, but does not need to be a pixel perfect implementation.

## Design
  
<img src="https://github.com/mrcjbradley/playerwon-frontend-challenge/blob/main/final-preview.png?raw=true)"/>
<img src="https://github.com/mrcjbradley/playerwon-frontend-challenge/blob/main/final-video.gif?raw=true)"/>

  

## Helpful Resources
- [Online GitHub GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer)
- [Local GitHub GraphQL Explorer](https://docs.github.com/en/graphql/guides/using-the-explorer)
- [Relay getting started guide](https://relay.dev/docs/getting-started/step-by-step-guide/)
  - This repo was created following this guide with slight variations to accommodate typescript.
