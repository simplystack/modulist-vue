# Tabs <badge text="stable" />
Simple horizontal tabs component.

## Example
<div class="p-3 border rounded-2 my-3">
  <v-tabs>
    <v-tab title="Tab 1">
      <div class="py-3">Content 1</div>
    </v-tab>
    <v-tab title="Tab 2">
      <div class="py-3">Content 2</div>
    </v-tab>
    <v-tab title="Tab 3" disabled>
      <div class="py-3">Content 3</div>
    </v-tab>
  </v-tabs>
</div>

## Tab Props
Name       | Type     | Description | Default | Required
---------- | -------- | ----------- | ------- | --------
title      | String   | Title of the tab | false | false
selected   | Boolean  | Whether tab is selected or not by default | false | false
disabled   | Boolean  | Whether tab is disabled or not            | false | false


## Tabs Props
Name       | Type     | Description | Default | Required
---------- | -------- | ----------- | ------- | --------
wide       | Boolean  | Each header's element will fill whole width | false | false

## Tabs Methods
Name       | Arguments | Description
---------- | --------- | -----------
setActiveTab() | `tabId` | Call this method to programmatically change the active tab
