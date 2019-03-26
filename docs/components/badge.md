# Badge
Badges, our small count and labeling component.

## Example
<div class="p-3 border rounded-2 my-3 flex">
  <v-badge text="Default" class="mr-2" />
  <v-badge type="primary" text="Default" class="mr-2" />
  <v-badge type="alternative" text="Default" class="mr-2" />
  <v-badge type="success" text="Default" class="mr-2" />
  <v-badge type="warning" text="Default" class="mr-2" />
  <v-badge type="danger" text="Default" class="mr-2" />
</div>


## Props
Name       | Type     | Description | Default | Required
---------- | -------- | ----------- | ------- | --------
type       | String   | Button type one of ['default', 'alternative', 'primary', 'warning', 'success', 'danger'] | 'default' | false
text       | [String, Number]   | Badge's text | None | true
