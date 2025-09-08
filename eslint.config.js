const { ESLint } = require("eslint");

// Create an instance of ESLint with the configuration passed to the function
function createESLintInstance(overrideConfig) {
  return new ESLint({
    overrideConfigFile: true,
    overrideConfig,
    fix: true,
  });
}
