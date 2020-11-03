const { setHeadlessWhen } = require(`@codeceptjs/configure`);

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  timeout: 10000,
  tests: `./tests/*.test.ts`,
  output: `./output`,
  helpers: {
    Puppeteer: {
      url: `http://localhost:4200`,
      show: true,
    },
  },
  include: {
    I: `./steps_file.js`,
  },
  bootstrap: null,
  mocha: {},
  name: `monorepo-reference`,
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
