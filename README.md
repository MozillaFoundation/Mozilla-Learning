[![Build Status](https://travis-ci.org/mozilla/teach.webmaker.org.svg)](https://travis-ci.org/mozilla/teach.webmaker.org)

This is an initial attempt at implementing the Webmaker Learning
website.

# Overview

This software consists of two major parts:

* A **static site generator** that creates a number of
  `index.html` files in various directories which can be viewed
  in any browser, including ones that don't support JavaScript.
* Client-side JavaScript code that **progressively enhances**
  the user experience based on browser capabilities.

It should be noted that, based on the
[product roadmap][roadmap], the static site generator
may eventually evolve into becoming a dynamic server.

# Get started

### Dependencies

To get a local version of teach.webmaker.org running, you'll need to have [git](http://git-scm.com/) and [node](http://nodejs.org/) installed on your local machine.

### Clone

In order to contribute to this project, you'll need to **create your own fork** of it and make pull-requests against our master branch.

Clone from your own fork or from the original:

```
git clone git@github.com:mozilla/teach.webmaker.org.git
cd teach.webmaker.org
```

### Build and Develop

To start developing, all you need to do is run the following in the `teach.webmaker.org` directory you just created:

```bash
npm install
npm start
```

This will start a webserver for you at `http://localhost:8008`, and run a `watch` process so that your front-end assets will be regenerated as you make changes.

#### Adding New Components

To add a new component just run `npm run addtest`, which will prompt you for a component name (please use **hyphen-case** for naming). This will add a new component in the `/components` directory, which includes a scaffolded `test` subdirectory.

### Directory and naming conventions

JS
* `lib/`: Non-react modules, as well as entry-point modules like `main.jsx` and `routes.jsx`
* `components/`: Re-usable react components that can be used throughout the site
* `pages/`: React "page" components, i.e. top-level pages required by `lib/router`
* `mixins/`: React mixins

Less
* `less/`: This is where you should add styles. `common.less` is the entry-point.

Other
* `test/`: For js tests, manual tests
* `img/`: For images
* `dist/`: Generated site assets goes here. **This folder is gitignored, do not edit files here.**

### Test

Fully testing the code is accomplished by running `npm test`,
which exercises a number of different aspects of the
codebase described below.

#### Static Site Generation (Smoke Test)

This generates a full static site and
ensures that **no React warnings are raised**.
[react-a11y][] is used to ensure that no accessibility
issues are present.

Individually running *only* the smoke test can be accomplished
via `npm run smoketest`.

#### Unit Tests

Unit tests are spread across two different testing
environments.

Both environments use the [mocha][] test runner and [should][]
for assertions.

##### Node Tests

These tests generally exercise the code of the static site generator
and are located in the `test` directory.

Each test file should end with `.test.js` and will be automatically
discovered by the test runner.

Individually running *only* the node unit tests can be accomplished
via `node_modules/.bin/mocha test/*.test.js`. For more options,
see the documentation for [mocha (1)][].

##### Browser Tests

These tests exercise the code that runs in the user's browser. They're
located in the `test/browser` directory.

Browser test files are *not* automatically discovered and should
be explicitly `require`'d in `test/browser/main.js`.

Individually running *only* the browser unit tests can be accomplished
by first running `npm start` and then visiting http://localhost:8008/test/
in your browser.

## Generating A Static Site

Run `npm run build` to generate a static site in `dist/` that
doesn't *require* any client-side JavaScript. This static
site also uses `history.pushState` for navigation if the browser
supports it.

For reference, a recent static build of the site can be found at
[teach.mofostaging.net][].

The static site can also be deployed to S3 via `npm run s3`, but
this requires setting at least a few environment variables. See
the **Environment Variables** section below for more details.

## Environment Variables

The following environment variables can be used to modify how the
software works.

**Note:** When an environment variable is described as representing a
boolean value, if the variable exists with *any* value (even the empty
string), the boolean is true; otherwise, it's false.

   Name | Description
------------------|---------------------------------------------
`WEBPACK_DEVTOOL` | determines the setting for the [`devtool`][] Webpack option. It defaults to `source-map`; if you're on Firefox, though, you may want to set it to `eval` so that console logging statements originate from useful line numbers. For re details on the trade-offs between different options for development, see our [conversation on sourcemaps][sourcemaps-wtf].
`AWS_ACCESS_KEY` | is the Amazon Web Services access key used when uploading to s3 via `npm run s3`.
`AWS_SECRET_KEY` | is the Amazon Web Services secret key used when uploading to s3 via `npm run s3`.
`AWS_BUCKET` | is the S3 bucket to upload to when using `npm run s3`. It defaults to `teach.mofostaging.net`.
`AWS_REGION` | is the S3 region to upload to when using `npm run s3`. It defaults to `us-east-1`.
`ORIGIN` | is the domain name of which the site is hosted. It defaults to `https://teach.webmaker.org`. This is used in situations where absolute URLs are required, such as generating a `sitemap.xml` file.
`MAPBOX_ACCESS_TOKEN` | is the [Mapbox][] access token to use for embedded maps in the website. Optional.
`MAPBOX_MAP_ID` | is the Mapbox map ID to use for embedded maps in the website. Optional.
`TEACH_API_URL` | is the origin of the [Teach API][] server. Defaults to `https://teach-api.herokuapp.com`.

## References

* [Cassie's original PSD files][psd]
* [Cassie's Teach Website mockups on Red Pen][redpen_teach]
* [Cassie's Club Page mockups on Red Pen][redpen_club]

<!-- links -->

  [psd]: https://www.dropbox.com/sh/2kbwq2cl9x6q0r8/AAA2Io_uv8sW0MVqyZr4H8Tca?dl=0#/
  [redpen_teach]: https://redpen.io/p/tv97d65122e4dcb2ab
  [redpen_club]: https://redpen.io/p/jza7e4f541a24313ff
  [`devtool`]: http://webpack.github.io/docs/configuration.html#devtool
  [sourcemaps-wtf]: https://github.com/mozilla/teach.webmaker.org/pull/147#discussion-diff-25879885
  [react-a11y]: https://github.com/rackt/react-a11y#readme
  [roadmap]: https://wiki.mozilla.org/Learning/Networks/Product-Roadmap
  [mocha]: http://mochajs.org/
  [mocha (1)]: http://mochajs.org/#usage
  [should]: https://www.npmjs.com/package/should
  [teach.mofostaging.net]: http://teach.mofostaging.net/
  [Mapbox]: http://mapbox.com/
  [Teach API]: https://github.com/mozilla/teach-api
