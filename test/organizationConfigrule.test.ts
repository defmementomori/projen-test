import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AwsCdkOrganizationConfigrule } from '../src/index';

test('configrule created', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  // WHEN
  new AwsCdkOrganizationConfigrule(stack, 'MyTestConstruct', {
    configRulesAll: [
      { ruleIdentifier: 'DYNAMODB_TABLE_ENCRYPTED_KMS' },
      {
        ruleIdentifier: 'CW_LOGGROUP_RETENTION_PERIOD_CHECK',
        inputParameters: '{"MinRetentionTime":"1827"}',
      },
    ],
  });
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Config::OrganizationConfigRule', {
    OrganizationConfigRuleName: 'DYNAMODB_TABLE_ENCRYPTED_KMS',
  });
});
