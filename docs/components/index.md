# Button

## Example

<div class="p-3 border rounded-2 my-3">
  <v-button appearance="default">Default</v-button>
  <v-button appearance="primary">Primary</v-button>
  <v-button appearance="alternative">Alternative</v-button>
  <v-button appearance="subtle">Alternative</v-button>
  <v-button appearance="success">Success</v-button>
  <v-button appearance="danger">Danger</v-button>
</div>

``` html
<v-button appearance="default">Default</v-button>
<v-button appearance="primary">Primary</v-button>
<v-button appearance="alternative">Alternative</v-button>
<v-button appearance="subtle">Subtle</v-button>
<v-button appearance="success">Success</v-button>
<v-button appearance="danger">Danger</v-button>
```

## Props
Name       | Type     | Description | Default
---------- | -------- | ----------- | -----
type       | String   | Button type, 'button' or 'submit' | button
appearance | String   | There are 6 options: ['default', 'primary', 'alternative', 'subtle', 'success', 'danger'] | <code>default</code>
disabled   | Boolean  | Whether button disabled or not | false
loading   | Boolean  | Whether button in loading state or not | false

## Slots
Name     | Slot props       | Description
-------- | -----------      | -----
default  | None             | Button content
icon     | None             | For icon
