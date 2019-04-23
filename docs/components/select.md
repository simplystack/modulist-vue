# Select <badge text="development" type="warn" />
The custom select and it's states.

## Example
<div class="p-3 border rounded-2 my-3">
  <v-select
    name="single-select" 
    v-model="select1" 
    label="Select"
    placeholder="Select option" 
    :options="options" 
  />
  <div class="mt-3">Selected option: {{ select1 }}</div>
</div>

```html
<!--single select-->
<v-select
  name="single-select" 
  v-model="select1" 
  label="Select"
  placeholder="Select option" 
  :options="options" 
/>
```

<div class="p-3 border rounded-2 my-3">
  <v-select 
    name="multiple-select" 
    v-model="select2" 
    multiple 
    label="Multiple select"
    placeholder="Select options" 
    :options="options" 
  />
  <div class="mt-3">Selected option: {{ select2 }}</div>
</div>

```html
<!--multiple select-->
<v-select 
  name="multiple-select" 
  v-model="select2" 
  multiple 
  label="Multiple select"
  placeholder="Select options" 
  :options="options" 
/>
```

<div class="p-3 border rounded-2 my-3">
  <v-select 
    name="filterable-select" 
    v-model="select3"
    label="Filterable select"
    placeholder="Select option"
    filterable
    :options="options" 
  />
  <div class="mt-3">Selected option: {{ select3 }}</div>
</div>

```html
<!--filterable select-->
<v-select 
  name="filterable-select" 
  v-model="select3"
  label="Filterable select"
  placeholder="Select option"
  filterable
  :options="options" 
/>
```

<div class="p-3 border rounded-2 my-3">
  <v-select 
    name="clearable-select" 
    v-model="select4"
    label="Filterable select"
    placeholder="Select option"
    clearable
    :options="options" 
  />
  <div class="mt-3">Selected option: {{ select4 }}</div>
</div>

```html
<!--clearable select-->
<v-select 
  name="clearable-select" 
  v-model="select4"
  label="Filterable select"
  placeholder="Select option"
  clearable
  multiple
  :options="options" 
/>
```

<div class="p-3 border rounded-2 my-3">
  <v-select 
    name="custom-option-select" 
    v-model="select5"
    label="Custom option select"
    placeholder="Select option"
    :options="options" 
  >
    <template v-slot:option="props">
      <div class="flex flex-column">
        <div class="text-bold">{{ props.option.label }}</div>
        <div class="text-emphasized f5">id: {{ props.option.id }} value: {{ props.option.id }}</div>
      </div>
    </template>
  </v-select>
  <div class="mt-3">Selected option: {{ select4 }}</div>
</div>

```html
<!--custom option template-->
<v-select 
  name="custom-option-select" 
  v-model="select5"
  label="Custom option select"
  placeholder="Select option"
  :options="options" 
>
  <div class="" slot-scope="props" slot="option">
    <div class="text-bold">{{ props.option.label }}</div>
    <div class="text-emphasized f5">id: {{ props.option.id }} value: {{ props.option.id }}</div>
  </div>
</v-select>
```

<script>
export default {
  data() {
    return { 
      select1: {},
      select2: [],
      select3: {},
      select4: {},
      select5: {},
      options: [
        { id: 1, value: 'value1', label: 'Option 1' },
        { id: 2, value: 'value2', label: 'Option 2' },
        { id: 3, value: 'value3', label: 'Option 3', disabled: true },
        { id: 4, value: 'value4', label: 'Option 4' },
        { id: 5, value: 'value5', label: 'Option 5' },
        { id: 6, value: 'value6', label: 'Option 6' },
        { id: 7, value: 'value7', label: 'Option 7' },
        { id: 8, value: 'value8', label: 'Option 8' },
        { id: 9, value: 'value9', label: 'Option 9' },
        { id: 10, value: 'value10', label: 'Option 10' },
        { id: 11, value: 'value11', label: 'Option 11' },
        { id: 12, value: 'value12', label: 'Option 12' },
        { id: 13, value: 'value13', label: 'Option 13' },
        { id: 14, value: 'value14', label: 'Option 14' },
        { id: 15, value: 'value15', label: 'Option 15' },
        { id: 16, value: 'value16', label: 'Option 16' },
        { id: 17, value: 'value17', label: 'Option 17' },
        { id: 18, value: 'value18', label: 'Option 18' },
        { id: 19, value: 'value19', label: 'Option 19' },
      ],
    };
  },
};
</script>

## Props
Name       | Type              | Description       | Default | Required
---------- | ----------------- | ----------------- | ------- | --------
id         | [String, Number]  | Unique identifier | None    | false
name       | String            | Select name       | None    | false
label      | String            | Select label      | 'Label' | false
tabindex   | [String, Number]  | Select tabindex   | None    | false
value, v-model | [Array, Object] | The model that the select value syncs to. If you are not using `v-model`, you should listen for the `input` event and update `value`.   | None    | true
placeholder| String         | Select placeholder | 'Placeholder'    | false
showLabel   | Boolean           | Show label or not | false | false
multiple   | Boolean           | Allows to select multiple options | false | false
filterable | Boolean           | Allows to filter options | false | false
clearable  | Boolean           | Allows to clear selected option | false | false
loading    | Boolean           | Indicates loading state | false | false
options    | Array             | List of options | [] | true
keys       | Object            | Allows for redefining each option object's keys | `{label: 'label',value: 'value',image: 'image',disabled: 'disabled'}` | false

## Events
Name       | Description
---------- | ----------------------------------------------------------------------------------
@input     | Emitted when the select value is changed. The handler is called with the new value
@change    | Emitted when the select value changes
@select    | Emitted when the select value was selected. The handler is called with the selected option
@clear     | Emitted when the select value was cleared
@focus     | Emitted when the select value was focused
@blur      | Emitted when the select value was blurred

## Methods
Name       | Description
---------- | -----------------
reset()    | Call this method to reset the select value

## Slots
Name       | Description
---------- | -----------------
option     | This slot can be used to render a custom template for each option in select
