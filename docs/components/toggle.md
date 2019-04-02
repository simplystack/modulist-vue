# Toggle 

## Example
<div class="p-3 border rounded-2 my-3 flex flex-column">
  <v-toggle class="mb-3" v-model="visible1" />
  <v-toggle class="mb-3" label="Visible" v-model="visible2" />
  <v-toggle class="mb-3" disabled label="Disabled" v-model="visible3" />
  <v-toggle vertical label="Visible" v-model="visible4" />
</div>

```html
<v-toggle v-model="visible" />
<!--with label-->
<v-toggle label="Visible" v-model="visible" />
<!--disabled-->
<v-toggle disabled label="Visible" v-model="visible" />
<!--vertical-->
<v-toggle vertical label="Visible" v-model="visible" />
```

## Props
Name       | Type     | Description | Default | Required
---------- | -------- | ----------- | ------- | --------
id         | [String, Number]   | Unique identifier |    | false
Name       | String             | Name of input element |    | false
label      | [String, Number]   | Label text        |    | true
value, v-model      | any      | The model that the checkbox value syncs to. **If you are not using `v-model`, you should listen for the `input` event and update value.**        |    | true
checked    | Boolean  | Whether or not the toggle is checked by default. | false | false
trueValue	 | any	    | The value that will be written to the model when the toggle is checked | true | false
falseValue | any	    | The value that will be written to the model when the toggle is unchecked | false | false
tabindex	 | [Number, String]   | The toggle input tabindex | None | false
submittedValue | any  | The value that will be submitted for the toggle when it is checked. Applied as the value attribute of the toggle input element. | 'on' | false
vertical	 | Boolean  | Whether or not the toggle in vertical mode | false | false
disabled	 | Boolean  | Whether or not the toggle is disabled | false | false


## Events
Name     | Params   | Description
---------| ---------| -------------------
@focus   | event    | Emitted when the toggle is focused
@blur    | event    | Emitted when the toggle loses focus
@input   | event    | Emitted when the toggle value is changed. The handler is called with the new value
@change  | event    | Emitted when a change in the toggle value is committed. The handler is called with the new value

## Methods
Name       | Description
---------- | -----------
focus()    | Call this method to programmatically focus the toggle

<script>
export default {
  data() {
    return { visible1: false, visible2: false, visible3: false, visible4: false };
  },
};
</script>
