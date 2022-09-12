# Getting Started with Paver

## Creating a Component

### `npx generate-react-cli component componentname`

Replace componentname in the above command to quickly generate a new component
and all starter files for said component.

After the component has been generated, add it to `components/index.ts`.

`export { default as componentname } from './componentname'`

This will ensure it is included with the final library package.

## Available Scripts

First, run:

### `npm install`

In the project directory, you can run:

### `npm run dev`

Runs the component documentation in storybook.\
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

The page will reload when you make changes.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run deploy`

This will build out the storybook documentation and deploy it to github pages.
You can see the storybook app at https://hrallo.github.io/paver/.

### `npm run build-storybook`

This will build out the storybook app into storybook-static. It is not a
necessary to run this step individually unless you want a local copy of
storybook and you are not running `npm run dev `

## Creating a Release

- Go to Paver in Github and go to Releases
- Select 'Draft a new Release'
- Increment the release number by creating a new Tag in the 'Choose a Tag'
  dropdown
- Select 'Auto-generate release notes'
- Publish release

### ``
