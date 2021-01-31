/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  "mount": {
    "src/document": { url: '/', static: true },
    "src/assets": { url: '/assets' },
  },
  "buildOptions": {
    "out": "dist",
  },
  "plugins": [
    '@snowpack/plugin-typescript',
    "@snowpack/plugin-postcss"
  ],
  "routes": [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  "optimize": {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  "packageOptions": {
    /* ... */
  },
  "devOptions": {
    /* ... */
  },
  "buildOptions": {
    /* ... */
  },
};