# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### AwsCdkOrganizationConfigrule <a name="@defmementomori/projen-test.AwsCdkOrganizationConfigrule" id="defmementomoriprojentestawscdkorganizationconfigrule"></a>

#### Initializers <a name="@defmementomori/projen-test.AwsCdkOrganizationConfigrule.Initializer" id="defmementomoriprojentestawscdkorganizationconfigruleinitializer"></a>

```typescript
import { AwsCdkOrganizationConfigrule } from '@defmementomori/projen-test'

new AwsCdkOrganizationConfigrule(scope: Construct, id: string, props: IAwsCdkOrganizationConfigruleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#defmementomoriprojentestawscdkorganizationconfigruleparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#defmementomoriprojentestawscdkorganizationconfigruleparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#defmementomoriprojentestawscdkorganizationconfigruleparameterprops)<span title="Required">*</span> | [`@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps`](#@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@defmementomori/projen-test.AwsCdkOrganizationConfigrule.parameter.scope" id="defmementomoriprojentestawscdkorganizationconfigruleparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@defmementomori/projen-test.AwsCdkOrganizationConfigrule.parameter.id" id="defmementomoriprojentestawscdkorganizationconfigruleparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@defmementomori/projen-test.AwsCdkOrganizationConfigrule.parameter.props" id="defmementomoriprojentestawscdkorganizationconfigruleparameterprops"></a>

- *Type:* [`@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps`](#@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps)

---







## Protocols <a name="Protocols" id="protocols"></a>

### IAwsCdkOrganizationConfigruleProps <a name="@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps" id="defmementomoriprojentestiawscdkorganizationconfigruleprops"></a>

- *Implemented By:* [`@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps`](#@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`configRulesAll`](#defmementomoriprojentestiawscdkorganizationconfigrulepropspropertyconfigrulesall)<span title="Required">*</span> | `any`[] | *No description.* |
| [`configExcludedAccounts`](#defmementomoriprojentestiawscdkorganizationconfigrulepropspropertyconfigexcludedaccounts) | `string`[] | *No description.* |
| [`configRulesOnlyUsEast1`](#defmementomoriprojentestiawscdkorganizationconfigrulepropspropertyconfigrulesonlyuseast1) | `any`[] | *No description.* |

---

##### `configRulesAll`<sup>Required</sup> <a name="@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps.property.configRulesAll" id="defmementomoriprojentestiawscdkorganizationconfigrulepropspropertyconfigrulesall"></a>

```typescript
public readonly configRulesAll: any[];
```

- *Type:* `any`[]

---

##### `configExcludedAccounts`<sup>Optional</sup> <a name="@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps.property.configExcludedAccounts" id="defmementomoriprojentestiawscdkorganizationconfigrulepropspropertyconfigexcludedaccounts"></a>

```typescript
public readonly configExcludedAccounts: string[];
```

- *Type:* `string`[]

---

##### `configRulesOnlyUsEast1`<sup>Optional</sup> <a name="@defmementomori/projen-test.IAwsCdkOrganizationConfigruleProps.property.configRulesOnlyUsEast1" id="defmementomoriprojentestiawscdkorganizationconfigrulepropspropertyconfigrulesonlyuseast1"></a>

```typescript
public readonly configRulesOnlyUsEast1: any[];
```

- *Type:* `any`[]

---

