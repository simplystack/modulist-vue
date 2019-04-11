# Menu <badge text="stable" />
Menu component is a list of options.

## Example
<div class="p-3 border rounded-2 my-3">
  <v-menu contain-focus :options="options"></v-menu>
</div>

```html
<v-menu contain-focus :options="options"></v-menu>
```
```javascript
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
};
```

## Props
Name               | Type      | Description     | Default | Required
------------------ | --------- | --------------- | ------- | --------
options            | Array     | List of options | []      | false
containFocus       | Boolean   | Should focus stay inside popover or not | false | false
keys               | Object    | Allows for redefining each option object's keys | `{type, label, secondaryText, disabled}` | false

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
