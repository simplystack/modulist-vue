# Checkbox <badge text="stable" />
The custom checkbox and it's states.

## Example

<div class="p-3 border rounded-2 my-3">
  <v-checkbox id="checkbox1" label="Check me" v-model="checked" />
</div>

```html
 <v-checkbox id="checkbox1" label="Check me" v-model="checked" />
```

## Props
Name       | Type     | Description | Default | Required
---------- | -------- | ----------- | ------- | --------
id         | [String, Number]   | Unique identifier |    | false
Name       | String             | Name of input element |    | false
label      | [String, Number]   | Label text        |    | true
value, v-model      | any      | The model that the checkbox value syncs to. **If you are not using `v-model`, you should listen for the `input` event and update value.**        |    | true
checked    | Boolean  | Whether or not the checkbox is checked by default. | false | false
trueValue	 | any	    | The value that will be written to the model when the checkbox is checked | true | false
falseValue | any	    | The value that will be written to the model when the checkbox is unchecked | false | false
tabindex	 | [Number, String]   | The checkbox input tabindex | None | false
submittedValue | any  | The value that will be submitted for the checkbox when it is checked. Applied as the value attribute of the checkbox input element. | 'on' | false
disabled	 | Boolean  | Whether or not the checkbox is disabled | false | false


## Events
Name     | Params   | Description
---------| ---------| -------------------
@focus   | event    | Emitted when the checkbox is focused
@blur    | event    | Emitted when the checkbox loses focus
@input   | event    | Emitted when the checkbox value is changed. The handler is called with the new value
@change  | event    | Emitted when a change in the checkbox value is committed. The handler is called with the new value

## Methods
Name       | Description
---------- | -----------
focus()    | Call this method to programmatically focus the checkbox

<script>
export default {
  data() {
    return { checked: false };
  },
};
</script>
