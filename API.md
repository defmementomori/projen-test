# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### OrgConfigRules <a name="projen-test.OrgConfigRules" id="projentestorgconfigrules"></a>

#### Initializers <a name="projen-test.OrgConfigRules.Initializer" id="projentestorgconfigrulesinitializer"></a>

```typescript
import { OrgConfigRules } from 'projen-test'

new OrgConfigRules(scope: Construct, id: string, props: OrgConfigRulesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#projentestorgconfigrulesparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#projentestorgconfigrulesparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#projentestorgconfigrulesparameterprops)<span title="Required">*</span> | [`projen-test.OrgConfigRulesProps`](#projen-test.OrgConfigRulesProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="projen-test.OrgConfigRules.parameter.scope" id="projentestorgconfigrulesparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="projen-test.OrgConfigRules.parameter.id" id="projentestorgconfigrulesparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="projen-test.OrgConfigRules.parameter.props" id="projentestorgconfigrulesparameterprops"></a>

- *Type:* [`projen-test.OrgConfigRulesProps`](#projen-test.OrgConfigRulesProps)

---





### OrgConfigToSecurityhub <a name="projen-test.OrgConfigToSecurityhub" id="projentestorgconfigtosecurityhub"></a>

#### Initializers <a name="projen-test.OrgConfigToSecurityhub.Initializer" id="projentestorgconfigtosecurityhubinitializer"></a>

```typescript
import { OrgConfigToSecurityhub } from 'projen-test'

new OrgConfigToSecurityhub(scope: Construct, id: string, props: Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#projentestorgconfigtosecurityhubparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#projentestorgconfigtosecurityhubparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#projentestorgconfigtosecurityhubparameterprops)<span title="Required">*</span> | [`projen-test.Props`](#projen-test.Props) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="projen-test.OrgConfigToSecurityhub.parameter.scope" id="projentestorgconfigtosecurityhubparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="projen-test.OrgConfigToSecurityhub.parameter.id" id="projentestorgconfigtosecurityhubparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="projen-test.OrgConfigToSecurityhub.parameter.props" id="projentestorgconfigtosecurityhubparameterprops"></a>

- *Type:* [`projen-test.Props`](#projen-test.Props)

---





### OrgEventStack <a name="projen-test.OrgEventStack" id="projentestorgeventstack"></a>

#### Initializers <a name="projen-test.OrgEventStack.Initializer" id="projentestorgeventstackinitializer"></a>

```typescript
import { OrgEventStack } from 'projen-test'

new OrgEventStack(scope: Construct, id: string, props: EventSnsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#projentestorgeventstackparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#projentestorgeventstackparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#projentestorgeventstackparameterprops)<span title="Required">*</span> | [`projen-test.EventSnsProps`](#projen-test.EventSnsProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="projen-test.OrgEventStack.parameter.scope" id="projentestorgeventstackparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="projen-test.OrgEventStack.parameter.id" id="projentestorgeventstackparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="projen-test.OrgEventStack.parameter.props" id="projentestorgeventstackparameterprops"></a>

- *Type:* [`projen-test.EventSnsProps`](#projen-test.EventSnsProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`topic`](#projentestorgeventstackpropertytopic)<span title="Required">*</span> | [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic) | *No description.* |

---

##### `topic`<sup>Required</sup> <a name="projen-test.OrgEventStack.property.topic" id="projentestorgeventstackpropertytopic"></a>

```typescript
public readonly topic: Topic;
```

- *Type:* [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic)

---


### OrgSlackStack <a name="projen-test.OrgSlackStack" id="projentestorgslackstack"></a>

#### Initializers <a name="projen-test.OrgSlackStack.Initializer" id="projentestorgslackstackinitializer"></a>

```typescript
import { OrgSlackStack } from 'projen-test'

new OrgSlackStack(scope: Construct, id: string, props: OrgSlackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#projentestorgslackstackparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#projentestorgslackstackparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#projentestorgslackstackparameterprops)<span title="Required">*</span> | [`projen-test.OrgSlackProps`](#projen-test.OrgSlackProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="projen-test.OrgSlackStack.parameter.scope" id="projentestorgslackstackparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="projen-test.OrgSlackStack.parameter.id" id="projentestorgslackstackparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="projen-test.OrgSlackStack.parameter.props" id="projentestorgslackstackparameterprops"></a>

- *Type:* [`projen-test.OrgSlackProps`](#projen-test.OrgSlackProps)

---





## Structs <a name="Structs" id="structs"></a>

### EventSnsProps <a name="projen-test.EventSnsProps" id="projentesteventsnsprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EventSnsProps } from 'projen-test'

const eventSnsProps: EventSnsProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accountId`](#projentesteventsnspropspropertyaccountid)<span title="Required">*</span> | `string` | *No description.* |
| [`kmsAliasName`](#projentesteventsnspropspropertykmsaliasname)<span title="Required">*</span> | `string` | *No description.* |
| [`region`](#projentesteventsnspropspropertyregion)<span title="Required">*</span> | `string` | *No description.* |

---

##### `accountId`<sup>Required</sup> <a name="projen-test.EventSnsProps.property.accountId" id="projentesteventsnspropspropertyaccountid"></a>

```typescript
public readonly accountId: string;
```

- *Type:* `string`

---

##### `kmsAliasName`<sup>Required</sup> <a name="projen-test.EventSnsProps.property.kmsAliasName" id="projentesteventsnspropspropertykmsaliasname"></a>

```typescript
public readonly kmsAliasName: string;
```

- *Type:* `string`

---

##### `region`<sup>Required</sup> <a name="projen-test.EventSnsProps.property.region" id="projentesteventsnspropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

### OrgConfigRulesProps <a name="projen-test.OrgConfigRulesProps" id="projentestorgconfigrulesprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrgConfigRulesProps } from 'projen-test'

const orgConfigRulesProps: OrgConfigRulesProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`configRulesAll`](#projentestorgconfigrulespropspropertyconfigrulesall)<span title="Required">*</span> | `any`[] | *No description.* |
| [`region`](#projentestorgconfigrulespropspropertyregion)<span title="Required">*</span> | `string` | *No description.* |
| [`configExcludedAccounts`](#projentestorgconfigrulespropspropertyconfigexcludedaccounts) | `string`[] | *No description.* |
| [`configRulesOnlyUsEast1`](#projentestorgconfigrulespropspropertyconfigrulesonlyuseast1) | `any`[] | *No description.* |

---

##### `configRulesAll`<sup>Required</sup> <a name="projen-test.OrgConfigRulesProps.property.configRulesAll" id="projentestorgconfigrulespropspropertyconfigrulesall"></a>

```typescript
public readonly configRulesAll: any[];
```

- *Type:* `any`[]

---

##### `region`<sup>Required</sup> <a name="projen-test.OrgConfigRulesProps.property.region" id="projentestorgconfigrulespropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `configExcludedAccounts`<sup>Optional</sup> <a name="projen-test.OrgConfigRulesProps.property.configExcludedAccounts" id="projentestorgconfigrulespropspropertyconfigexcludedaccounts"></a>

```typescript
public readonly configExcludedAccounts: string[];
```

- *Type:* `string`[]

---

##### `configRulesOnlyUsEast1`<sup>Optional</sup> <a name="projen-test.OrgConfigRulesProps.property.configRulesOnlyUsEast1" id="projentestorgconfigrulespropspropertyconfigrulesonlyuseast1"></a>

```typescript
public readonly configRulesOnlyUsEast1: any[];
```

- *Type:* `any`[]

---

### OrgSlackProps <a name="projen-test.OrgSlackProps" id="projentestorgslackprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrgSlackProps } from 'projen-test'

const orgSlackProps: OrgSlackProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`channelId`](#projentestorgslackpropspropertychannelid)<span title="Required">*</span> | `string` | *No description.* |
| [`slackChannelConfigurationName`](#projentestorgslackpropspropertyslackchannelconfigurationname)<span title="Required">*</span> | `string` | *No description.* |
| [`snsTopic`](#projentestorgslackpropspropertysnstopic)<span title="Required">*</span> | [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic)[] | *No description.* |
| [`workspaceId`](#projentestorgslackpropspropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `channelId`<sup>Required</sup> <a name="projen-test.OrgSlackProps.property.channelId" id="projentestorgslackpropspropertychannelid"></a>

```typescript
public readonly channelId: string;
```

- *Type:* `string`

---

##### `slackChannelConfigurationName`<sup>Required</sup> <a name="projen-test.OrgSlackProps.property.slackChannelConfigurationName" id="projentestorgslackpropspropertyslackchannelconfigurationname"></a>

```typescript
public readonly slackChannelConfigurationName: string;
```

- *Type:* `string`

---

##### `snsTopic`<sup>Required</sup> <a name="projen-test.OrgSlackProps.property.snsTopic" id="projentestorgslackpropspropertysnstopic"></a>

```typescript
public readonly snsTopic: Topic[];
```

- *Type:* [`aws-cdk-lib.aws_sns.Topic`](#aws-cdk-lib.aws_sns.Topic)[]

---

##### `workspaceId`<sup>Required</sup> <a name="projen-test.OrgSlackProps.property.workspaceId" id="projentestorgslackpropspropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

### Props <a name="projen-test.Props" id="projentestprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Props } from 'projen-test'

const props: Props = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`auditAccountId`](#projentestpropspropertyauditaccountid)<span title="Required">*</span> | `string` | *No description.* |
| [`configurationAggregatorName`](#projentestpropspropertyconfigurationaggregatorname)<span title="Required">*</span> | `string` | *No description.* |
| [`controlTowerHomeRegion`](#projentestpropspropertycontroltowerhomeregion)<span title="Required">*</span> | `string` | *No description.* |
| [`snsTopicArn`](#projentestpropspropertysnstopicarn)<span title="Required">*</span> | `string` | *No description.* |

---

##### `auditAccountId`<sup>Required</sup> <a name="projen-test.Props.property.auditAccountId" id="projentestpropspropertyauditaccountid"></a>

```typescript
public readonly auditAccountId: string;
```

- *Type:* `string`

---

##### `configurationAggregatorName`<sup>Required</sup> <a name="projen-test.Props.property.configurationAggregatorName" id="projentestpropspropertyconfigurationaggregatorname"></a>

```typescript
public readonly configurationAggregatorName: string;
```

- *Type:* `string`

---

##### `controlTowerHomeRegion`<sup>Required</sup> <a name="projen-test.Props.property.controlTowerHomeRegion" id="projentestpropspropertycontroltowerhomeregion"></a>

```typescript
public readonly controlTowerHomeRegion: string;
```

- *Type:* `string`

---

##### `snsTopicArn`<sup>Required</sup> <a name="projen-test.Props.property.snsTopicArn" id="projentestpropspropertysnstopicarn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* `string`

---



