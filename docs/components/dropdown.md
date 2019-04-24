# Dropdown <badge text="stable" />
Dropdown component is a wrapper which contains Popover component and Menu.

## Example
<div class="p-3 border rounded-2 my-3">
  <v-dropdown contain-focus :options="options">
    <template v-slot:toggle>
      <v-button appearance="primary">Open dropdown</v-button>
    </template>
  </v-dropdown>
</div>

```html
<v-dropdown contain-focus :options="options">
  <template v-slot:toggle>
    <v-button appearance="primary">Open dropdown</v-button>
  </template>
</v-dropdown>
```

## Props
Name               | Type      | Description     | Default | Required
------------------ | --------- | --------------- | ------- | --------
placement          | String    | Placement of popover | 'bottom' | false
options            | Array     | List of options | []      | false
containFocus       | Boolean   | Should focus stay inside popover or not | true | false
disabled           | Boolean   | Disabled state | false | false

<script>
export default {
  data() {
    return {
      options: [
        { label: 'Option 1' },
        { label: 'Option 2' },
        { label: 'Option 3' },
        { type: 'divider' },
        { label: 'Option 4' },
      ]
    };
  },
}
</script>
