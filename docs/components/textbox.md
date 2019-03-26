# Textbox <badge text="development" type="warn" />

## Example

<div class="p-3 border rounded-2 my-3">
  <v-textbox
    class="mb-3"
    id="input1"
    name="input1"
    label="Your name"
    placeholder="Enter your name"
  ></v-textbox>

  <v-textbox
    multiline
    id="input2"
    name="input2"
    label="Comment"
    placeholder="Start typing here..."
  ></v-textbox>
</div>

```html
  <!-- Input -->
  <v-textbox
    id="input1"
    name="input1"
    label="Your name"
    placeholder="Enter your name"
  ></v-textbox>

  <!-- Textarea -->
  <v-textbox
    multiline
    id="input2"
    name="input2"
    label="Comment"
    placeholder="Start typing here..."
  ></v-textbox>
```

## Props
Name | Type   | Description   | Default | Required
---- | :----: | ------------- | ------- | --------
id   | [String, Number] | Input name    | -       | true
name | String | Unique identifier    | -       | true
label | String | Label for input    | -       | true
placeholder | String | Placeholder for input    | -       | false
disabled | String | Whether input is disabled or not    | false       | false
multiline | Boolean | If true, then component renders as textarea, otherwide it's input    | false       | false
rows | Number | Rows of textare. Only works if multiline property is true    | 2       | false
readonly | Boolean | Whether input is readonly or not    | false       | false

## Slots
Name     | Slot props       | Description
-------- | -----------      | -----
default  |                  |

## Methods
Name             | Params            | Description
---------------- | ----------------- | -------------------
method1          |                   |

## Events
Name             | Params            | Description
---------------- | ----------------- | -------------------
event1           |                   |
