const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'defmementomori',
  authorAddress: 'defmementomori@gmail.com',
  cdkVersion: '2.0.0',
  defaultReleaseBranch: 'main',
  name: 'projen-test',
  repositoryUrl: 'https://github.com/defmementomori/projen-test.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();