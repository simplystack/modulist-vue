# Notification <badge text="stable" />
The notification component shows some information.

## Example
<div class="p-3 border rounded-2 my-3">
  <v-notification title="Update available" message="New content available, please refresh your page." />
  <v-notification type="success" title="Success" message="Your item was successfully created." />
  <v-notification type="warning" title="Warning" message="Please save all your data before refresh the page." />
  <v-notification type="error" title="Unexpected behavior" message="Something goes wrong, please try again later." />
  
  <v-notification-container ref="container"></v-notification-container>
  
  <v-button @click="create({ type: 'info', title: 'Update available', message: 'New content available, please refresh your page.' })" appearance="primary">Info notify</v-button>
  <v-button @click="create({ type: 'success', message: 'Your item was successfully created.' })" appearance="success">Success notify</v-button>
  <v-button @click="create({ type: 'warning', message: 'Please save all your data before refresh the page.' })">Warning notify</v-button>
  <v-button @click="create({ type: 'error', title: 'Unexpected behavior', message: 'Something goes wrong, please try again later.' })" appearance="danger">Error notify</v-button>
</div>

```html
<v-notification title="Update available" message="New content available, please refresh your page." />
<v-notification type="success" title="Success" message="Your item was successfully created." />
<v-notification type="warning" title="Warning" message="Please save all your data before refresh the page." />
<v-notification type="error" title="Unexpected behavior" message="Something goes wrong, please try again later." />
```

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    create(notification) {
      this.$refs.container.create(notification);
    },
  },
};
</script>
