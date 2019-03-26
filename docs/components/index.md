# Alert <badge text="development" type="warn" />
Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don’t show more than one at a time.

## Example

<div class="p-3 border rounded-2 my-3">
  <v-alert title="Information" type="info" class="mb-3">Information text</v-alert>
  <v-alert title="Success" type="success" class="mb-3">Success text</v-alert>
  <v-alert title="Warning" type="warn" class="mb-3">Warning text</v-alert>
  <v-alert title="Error" type="error">Error text</v-alert>
</div>

``` html
<v-alert title="Information" type="info">Information text</v-alert>
<v-alert title="Success" type="success">Success text</v-alert>
<v-alert title="Warning" type="warn">Warning text</v-alert>
<v-alert title="Error" type="error">Error text</v-alert>
```

## Props
Name       | Type     | Description | Default
---------- | -------- | ----------- | -----
type       | String   | There are 4 types: ['info', 'success', 'warn', 'error'] | 'info'
title      | String   | Title of alert | 'Default title'

## Slots
Name     | Slot props       | Description
-------- | -----------      | -----
default  | None             | Alert content
