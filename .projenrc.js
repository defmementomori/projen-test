const { awscdk, NpmAccess } = require("projen");
const project = new awscdk.AwsCdkConstructLibrary({
  author: "defmementomori",
  authorAddress: "defmementomori@gmail.com",
  cdkVersion: "2.0.0",
  defaultReleaseBranch: "main",
  name: "projen-test",
  keywords: ["aws", "cdk"],
  majorVersion: 2,
  workflowNodeVersion: "^14.17.0",
  defaultReleaseBranch: "main",
  repositoryUrl: "https://github.com/defmementomori/projen-test.git",
  devDeps: [
    "@types/jest",
    "@types/node",
    "aws-cdk-lib",
    "constructs",
    "jest",
    "ts-jest",
    "typescript",
  ],
  packageName: "@defmementomori/projen-test",
  npmAccess: NpmAccess.PUBLIC,
});

project.synth();
