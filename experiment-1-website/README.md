# NextJS Experiment 1 Website

This is the first NextJS experiment I developed. I analyzed the starter code provided by NextJS when creating a NextJS project, so I can understand exactly what each file and component does for the NextJS project!

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Selected Features for this Project 
* TypeScript used? - No
* ESLint used? - Yes
* Tailwind CSS? - No 
* Code inside src directory? - Yes
* App Router used? - Yes 
* Turbopack for 'next dev' used? - No 

## Installation Instructions Used to Setup the First NextJS Project 

1) Install the create-next-app package version 15.1.3 using and create a new NextJS project with the command: 
```bash
    npx create-next-app@latest
```

2) Answered the following prompts to include or exclude specific features
* TypeScript used? `No`
* ESLint used? `Yes`
* Tailwind CSS used? `No`
* Place code inside the src/ directory? `Yes`
* App Router used? `Yes`
* Turbopack for `next dev` used? `No`

3) Run the command below to run the NextJS project: 
```bash
    npm run dev
```

4) Click the Local URL to see the NextJS project's front-end side!

## My Findings 

Apparently, the src/app/page.js is the landing page for the NextJS project! 

It appears that NextJS follows the Components architecture and styling similar to React's Components!

The components in NextJS are still exported as modules similar to with React

The `page.modules.css` file is responsible for styling this landing page's appearance!</p>

The application of the class selectors from the page.modules.css file on the NextJS components is the same method of applying class selectors with CSS Modules files on React components! 

### Root Directory 

The `package.json` file contains project metadata, dependencies, and scripts which help me run the development server to see the final result of my changes to the NextJS project! 

```bash
npm run dev
```

The `next.config.mjs` is the Configuration file for Next.js and is used to customize build behavior and add environment variables! 

The `.eslintrc.json` is the ESLint Configuration file
* Defines coding style rules and detects potential errors 

The `.gitignore` specifies fiels and directories Git should ignore
* Commonly used to ignore the next_modules directory to prevent GitHub repo from taking up too much memory because of how many packages are in the next_modules directory

## Getting Started (Provided NextJS instructions)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.