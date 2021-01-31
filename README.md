# About Components

A comprehensive overview of component driven design as it relates to UI
architecture.

## Project Overview

Project languages include HTML, CSS, and
[TypeScript](https://www.typescriptlang.org/).
[LitElement](https://lit-element.polymer-project.org/) is used for
componentization and [Vue3](https://v3.vuejs.org/) is used primarily for state
management.  Bundling is done with [Snowpack](https://www.snowpack.dev/).

## Running the project

```
npm install
```

Run the development server.
```
npm run start
```

Build the project for production.
```
npm run build
```

## Directory Overview

- **build**: The compiled project.
- **src**: Source files.
- **types**: Static type settings, at the time of this writing, it contains a
file declaring modules that allow TypeScript to import other file types.