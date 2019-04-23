# Textbox <badge text="stable" />
Textbox is a universal component that can turn into both input and textarea.

## Default
<div class="p-3 border rounded-2 my-3 flex flex-column">
  <v-textbox
    class="mb-3"
    label="Your name"
    placeholder="Enter your name"
    v-model="value1"
  ></v-textbox>

  <v-textbox
    multiline
    label="Comment"
    placeholder="Start typing here..."
    v-model="value2"
  ></v-textbox>
</div>

```html
  <!-- Input -->
  <v-textbox
    label="Your name"
    placeholder="Enter your name"
    v-model="value1"
  ></v-textbox>

  <!-- Textarea -->
  <v-textbox
    multiline
    label="Comment"
    placeholder="Start typing here..."
    v-model="value2"
  ></v-textbox>
```

## Floated
<div class="p-3 border rounded-2 my-3 flex flex-column">
  <v-textbox
    floated
    class="mb-3"
    label="Your name"
    placeholder="Enter your name"
    v-model="value1"
  ></v-textbox>

  <v-textbox
    floated
    multiline
    label="Comment"
    placeholder="Start typing here..."
    v-model="value2"
  ></v-textbox>
</div>

## Props
Name | Type   | Description   | Default | Required
---- | :----: | ------------- | ------- | --------
id          | [String, Number] | Unique identifier                      | -       | false
name        | String  | Input name                       | -       | false
value, v-model| [String, Number] | The model that the textbox value syncs to. Can be set initially as a default value. |`''` | false
type        | String  | Supported values are `text`, `password`, `search`, `email`, `url`, `tel`, and `number`. Only applicable when `multiLine` is `false` | `text` | false
label       | String  | Label for input                         | -       | true
placeholder | String  | Placeholder for input                   | -       | false
wide        | Boolean | Whether input is fullwidth or not       | true       | false
floated     | Boolean | Whether label is floated or not         | true       | false
disabled    | Boolean | Whether input is disabled or not        | false       | false
multiLine   | Boolean | If true, then component renders as textarea, otherwise it's input    | false       | false
rows        | Number  | Rows of textare. Only works if multiline property is true    | 2       | false
readonly    | Boolean | Whether input is readonly or not        | false       | false
autofocus   | Boolean | Whether or not the textbox should automatically receive focus when it is rendered for the first time | false | false
autocomplete | String | The type of autocomplete suggestions the browser should offer for the input | None | false
min	        | Number	| The min attribute of the textbox input element. Only applicable when the type prop is `number` | None | false
max	        | Number  | The max attribute of the textbox input element. Only applicable when the type prop is `number` | None | false
step	      | [Number, String] | The step attribute of the textbox input element. Only applicable when the type prop is `number`. | 'any' | false
maxlength |	Number | The maxlength attribute of the input and textarea elements | None | false
error |	Boolean | Show error state if true | false | false
error-text |	String | Error text for error state, displaying only when `error` prop is true | None | false

## Events
Name          | Params       | Description
--------------| ----------   | -------------------
@input        | event        | Emitted when the select value is changed. The handler is called with the new value
@focus        | event        | Emitted when the textbox is focused
@blur         | event        | Emitted when the textbox loses focus
@touch        |              | Emitted when the textbox is focused for the first time and then blurred
@change       | value, event | Emitted when a change in the textbox value is committed. The handler is called with the new value
@keydown.enter| event        | Emitted when the Enter key is pressed in the input. The handler is called with the event object
@keydown      | event        | Emitted when a key is pressed in the input. The handler is called with the event object

## Methods
Name          | Description
--------------| -------------------
focus()       | Call this method to programmatically focus the textbox
reset()       | Call this method to reset the textbox to its initial value
resetTouched()| Call this method to reset the touched state of the textbox. By default it will set the touched state to `false`, but you can pass an object with `{ touched: true }` to set the touched state to `true`

<script>
export default {
  data() {
    return { value1: '', value2: '', };
  },
};
</script>
