# Popover <badge text="development" type="warn" />
Popover component used to show content in container, usually used in as part of dropdown.

## Example
<div class="p-3 border rounded-2 my-3">
  <v-popover>
    <template v-slot:toggle>
      <v-button appearance="primary">Open popover</v-button>
    </template>
    <div>Default popover</div>
  </v-popover>
</div>

## Props
Name               | Type      | Description | Default | Required
------------------ | --------- | ----------- | ------- | --------
trigger            | String    | Popover can be opened on `click` or 'hover' event | 'click' | false
containFocus       | Boolean   | Should focus stay inside popover or not | false | false
hasMaxHeight       | Boolean   | Should popover be limited by height or not | true | false
disabled           | Boolean   | Prevent opening popover | false | false
placement          | String    | Placement of popover | 'bottom' | false
offset             | [String, Number] | Popover offset between trigger and container | '0' | false
manualOpen         | Boolean   | Disable built logic to open/close popover. If `true` you have to implement your own logic | false | false
manualClose        | Boolean   | Disable built logic to open/close popover. If `true` you have to implement your own logic | false | false
returnFocusOnClose | Boolean   | Trigger get back focus when popover close | true | false
