# Checkbox Group <badge text="stable" />
Set of checkbox's components

## Example
<div class="p-3 border rounded-2 my-3">
  <v-checkbox-group
    class="mb-3"
    label="Favorites color"
    name="colors"
    :options="['White', 'Blue', 'Red']"
    v-model="group1"
  />
  <v-checkbox-group
    label="Favorites color"
    name="colors-objects"
    :options="[
      { id: 1, label: 'White', value: 'white' },
      { id: 2, label: 'Blue', value: 'blue', disabled: true },
      { id: 3, label: 'Red', value: 'red' },
    ]"
    v-model="group2"
  />
</div>


```html
<!-- Array of string -->
<v-checkbox-group
  label="Favorites color"
  name="colors-strings"
  :options="['White', 'Blue', 'Red']"
  v-model="group1"
/>

<!-- Array of objects -->
<v-checkbox-group
  label="Favorites color"
  name="colors-objects"
  :options="[
    { id: 1, label: 'White', value: 'white' },
    { id: 2, label: 'Blue', value: 'blue', disabled: true },
    { id: 3, label: 'Red', value: 'red' },
  ]"
  v-model="group1"
/>
```

## Props
Name       | Type     | Description | Default | Required
---------- | -------- | ----------- | ------- | --------
name       | String   | The `name` attribute of each checkbox's input element. | false   | false
label      | String   | The checkbox group label. | None   | false
value, v-model | Array | The model that holds the checked option values. Can be set initially for default values. | None | true
options    | Array | An array of options to show to the user as checkboxes. The array can either be of strings or objects (but not both). | None | true
keys       | Object | Allows for redefining the option keys. The id, name, class and disabled keys are optional. Pass an object with custom keys if your data does not match the default keys. Note that if you redefine one key, you have to define all the others as well. | `{id: 'id',label: 'label',value: 'value',checked: 'checked',disabled: 'disabled' }` | false

<script>
export default {
  data() {
    return { group1: [], group2: [] };
  },
};
</script>
