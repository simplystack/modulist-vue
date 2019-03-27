# Radio Group
Set of radio's components

## Example
<div class="p-3 border rounded-2 my-3">
  <v-radio-group
    class="mb-3"
    label="Favorite color"
    name="group1"
    v-model="group1"
    :options="['White', 'Red', 'Blue']"
  />

  <v-radio-group
    label="Favorite color"
    name="group2"
    v-model="group2"
    :options="[
      { id: 1, label: 'White', value: 'white', disabled: false },
      { id: 2, label: 'Red', value: 'red', disabled: true },
      { id: 3, label: 'Blue', value: 'blue', disabled: false },
    ]"
  />
</div>

```html
<!-- Array of strings -->
<v-radio-group
  label="Favorite color"
  name="group1"
  v-model="group1"
  :options="['White', 'Red', 'Blue']"
/>

<!-- Array of objects -->
<v-radio-group
  label="Favorite color"
  name="group2"
  v-model="group2"
  :options="[
    { id: 1, label: 'White', value: 'white', disabled: false },
    { id: 2, label: 'Red', value: 'red', disabled: true },
    { id: 3, label: 'Blue', value: 'blue', disabled: false },
  ]"
/>
```

## Props
Name       | Type     | Description | Default | Required
---------- | -------- | ----------- | ------- | --------
name       | String   | The name of the radio group. Applied as the `name` attribute on each input element in the radio group | false   | true
label      | String   | The radio group label | None | false
value, v-model | [String, Number] | The model that the selected value in the radio group syncs to. Can be set initially for a default selection. If you are not using `v-model`, you should listen for the `input` event and update `value` | None | true
options    | Array    | An array of options to show to the user as radio buttons. The array can either be of strings or objects (but not both). | None | true
keys       | Object   | Allows for redefining the option keys. The id, class, checked, and disabled keys are optional. Pass an object with custom keys if your data does not match the default keys. Note that if you redefine one key, you have to define all the others as well.| `{id: 'id',label: 'label',value: 'value',checked: 'checked',disabled: 'disabled' }` | false
tabindex | [String, Number] | The radio group tabindex | None | false
disabled   | Boolean  | Whether or not the radio group is disabled | false | false

## Events
Name       | Description
---------- | -----------
@focus     | Emitted when a radio button in the group is focused
@blur      | Emitted when a radio button in the group loses focus
@input     | Emitted when the radio group value is changed. The handler is called with the new value
@change    | Emitted when the value of the radio group is changed. The handler is called with the new value

## Methods
Name       | Description
---------- | ----------
reset()    | Call this method to reset the radio group's `value` to its initial `value`.

<script>
export default {
  data() {
    return { group1: '', group2: '' };
  },
};
</script>
