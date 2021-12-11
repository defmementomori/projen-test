import { aws_config as config } from 'aws-cdk-lib';
import { Construct } from 'constructs';

// to avoid jsii build error
// type ConfigRuleType = {
//   ruleIdentifier: string;
//   inputParameters?: string;
// };

export interface IAwsCdkOrganizationConfigruleProps {
  // to avoid jsii build error
  // configRulesAll: ConfigRuleType[];
  // configRulesOnlyUsEast1?: ConfigRuleType[];
  configRulesAll: any[];
  configRulesOnlyUsEast1?: any[];
  configExcludedAccounts?: string[];
}

export class AwsCdkOrganizationConfigrule extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: IAwsCdkOrganizationConfigruleProps,
  ) {
    super(scope, id);

    const { configRulesAll, configRulesOnlyUsEast1, configExcludedAccounts } =
      props;
    const region = process.env.region;
    const rules =
      region == 'us-east-1'
        ? configRulesAll.concat(configRulesOnlyUsEast1 || [])
        : configRulesAll;

    rules.map((rule) => {
      if (rule?.inputParameters) {
        new config.CfnOrganizationConfigRule(
          this,
          `configRule-${rule?.ruleIdentifier}`,
          {
            organizationConfigRuleName: `${rule?.ruleIdentifier}`,
            excludedAccounts: configExcludedAccounts,
            organizationManagedRuleMetadata: {
              ruleIdentifier: rule.ruleIdentifier,
              inputParameters: rule.inputParameters,
            },
          },
        );
      } else {
        new config.CfnOrganizationConfigRule(
          this,
          `configRule-${rule?.ruleIdentifier}`,
          {
            organizationConfigRuleName: `${rule?.ruleIdentifier}`,
            excludedAccounts: configExcludedAccounts,
            organizationManagedRuleMetadata: {
              ruleIdentifier: rule.ruleIdentifier,
            },
          },
        );
      }
    });
  }
}
