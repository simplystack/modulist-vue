# Badge <badge text="stable" />
Badges, our small count and labeling component.

## Example
<div class="p-3 border rounded-2 my-3 flex">
  <v-badge text="Default" class="mr-2" />
  <v-badge type="primary" text="Default" class="mr-2" />
  <v-badge type="alternative" text="Default" class="mr-2" />
  <v-badge type="success" text="Default" class="mr-2" />
  <v-badge type="warning" text="Default" class="mr-2" />
  <v-badge type="danger" text="Default" class="mr-2" />
</div>

```html
<v-badge text="Default" />
<v-badge type="primary" text="Default" />
<v-badge type="alternative" text="Default" />
<v-badge type="success" text="Default" />
<v-badge type="warning" text="Default" />
<v-badge type="danger" text="Default" />
```

<div class="p-3 border rounded-2 my-3">
  <h1 class="mb-3">Header <v-badge text="badge" type="primary" align="top" class="mr-2" /></h1>
  <h1 class="mb-3">Header <v-badge text="badge" type="primary" class="mr-2" /></h1>
  <h1>Header <v-badge text="badge" type="primary" align="bottom" class="mr-2" /></h1>
</div>

```html
<v-badge text="Default" />
<v-badge type="primary" text="Default" />
<v-badge type="alternative" text="Default" />
<v-badge type="success" text="Default" />
<v-badge type="warning" text="Default" />
<v-badge type="danger" text="Default" />
```

## Props
Name       | Type     | Description | Default | Required
---------- | -------- | ----------- | ------- | --------
type       | String   | Button type one of ['default', 'alternative', 'primary', 'warning', 'success', 'danger'] | 'default' | false
text       | String   | Badge's alignment | 'middle' | false
text       | [String, Number]   | Badge's text | None | true
