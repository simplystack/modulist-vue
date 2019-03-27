# Radio
The custom radio and it's states.

## Example
<div class="p-3 border rounded-2 my-3 flex">
  <v-radio :checked="true" id="radio1" label="Radio 1" name="radio-group1" v-model="radio1" true-value="radio1-value" />
</div>

```html
<v-radio
  id="radio1"
  label="Radio 1"
  name="radio-group1"
  v-model="radio1"
  true-value="radio1-value"
/>
```


## Props
Name       | Type              | Description       | Default | Required
---------- | ----------------- | ----------------- | ------- | --------
id         | [String, Number]  | Unique identifier | None    | true
Name       | [String, Number]  | The name attribute of the radio input element | None    | true
Label      | [String, Number]  | The radio label   | None    | true

## Events

## Methods

<script>
export default {
  data() {
    return { radio1: '' };
  },
};
</script>
