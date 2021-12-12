# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### AwsCdkOrganizationConfigrule <a name="projen-test.AwsCdkOrganizationConfigrule" id="projentestawscdkorganizationconfigrule"></a>

#### Initializers <a name="projen-test.AwsCdkOrganizationConfigrule.Initializer" id="projentestawscdkorganizationconfigruleinitializer"></a>

```typescript
import { AwsCdkOrganizationConfigrule } from 'projen-test'

new AwsCdkOrganizationConfigrule(scope: Construct, id: string, props: IAwsCdkOrganizationConfigruleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#projentestawscdkorganizationconfigruleparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#projentestawscdkorganizationconfigruleparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#projentestawscdkorganizationconfigruleparameterprops)<span title="Required">*</span> | [`projen-test.IAwsCdkOrganizationConfigruleProps`](#projen-test.IAwsCdkOrganizationConfigruleProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="projen-test.AwsCdkOrganizationConfigrule.parameter.scope" id="projentestawscdkorganizationconfigruleparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="projen-test.AwsCdkOrganizationConfigrule.parameter.id" id="projentestawscdkorganizationconfigruleparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="projen-test.AwsCdkOrganizationConfigrule.parameter.props" id="projentestawscdkorganizationconfigruleparameterprops"></a>

- *Type:* [`projen-test.IAwsCdkOrganizationConfigruleProps`](#projen-test.IAwsCdkOrganizationConfigruleProps)

---







## Protocols <a name="Protocols" id="protocols"></a>

### IAwsCdkOrganizationConfigruleProps <a name="projen-test.IAwsCdkOrganizationConfigruleProps" id="projentestiawscdkorganizationconfigruleprops"></a>

- *Implemented By:* [`projen-test.IAwsCdkOrganizationConfigruleProps`](#projen-test.IAwsCdkOrganizationConfigruleProps)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`configRulesAll`](#projentestiawscdkorganizationconfigrulepropspropertyconfigrulesall)<span title="Required">*</span> | `any`[] | *No description.* |
| [`configExcludedAccounts`](#projentestiawscdkorganizationconfigrulepropspropertyconfigexcludedaccounts) | `string`[] | *No description.* |
| [`configRulesOnlyUsEast1`](#projentestiawscdkorganizationconfigrulepropspropertyconfigrulesonlyuseast1) | `any`[] | *No description.* |

---

##### `configRulesAll`<sup>Required</sup> <a name="projen-test.IAwsCdkOrganizationConfigruleProps.property.configRulesAll" id="projentestiawscdkorganizationconfigrulepropspropertyconfigrulesall"></a>

```typescript
public readonly configRulesAll: any[];
```

- *Type:* `any`[]

---

##### `configExcludedAccounts`<sup>Optional</sup> <a name="projen-test.IAwsCdkOrganizationConfigruleProps.property.configExcludedAccounts" id="projentestiawscdkorganizationconfigrulepropspropertyconfigexcludedaccounts"></a>

```typescript
public readonly configExcludedAccounts: string[];
```

- *Type:* `string`[]

---

##### `configRulesOnlyUsEast1`<sup>Optional</sup> <a name="projen-test.IAwsCdkOrganizationConfigruleProps.property.configRulesOnlyUsEast1" id="projentestiawscdkorganizationconfigrulepropspropertyconfigrulesonlyuseast1"></a>

```typescript
public readonly configRulesOnlyUsEast1: any[];
```

- *Type:* `any`[]

---

