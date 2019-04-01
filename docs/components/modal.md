# Modal
A classic modal overlay, in which you can include any content you want.

## Example

<div class="p-3 border rounded-2 my-3">
  <v-button @click="open('modal1')" appearance="primary">Open modal 1</v-button>
  <v-modal :open="modal1" @close="close('modal1')" title="Modal 1">
    Modal content
    <template slot="footer">
      <v-button @click="close('modal1')" appearance="subtle">
        Close
      </v-button>
      <v-button appearance="primary">Apply changes</v-button>
    </template>
  </v-modal>
</div>

```html
<v-button @click="open('modal1')" appearance="primary">
  Open modal 1
</v-button>

<v-modal :open="modal1" @close="close('modal1')" title="Modal 1">
  <div>Modal content</div>
  <template slot="footer">
    <v-button appearance="subtle" @click="close('modal1')">Close</v-button>
    <v-button appearance="primary">Apply changes</v-button>
  </template>
</v-modal>
```

```javascript
export default {
  data() {
    return { modal1: false };
  },
  methods: {
    open(modal) {
      this[modal] = true;
    },
    close(modal) {
      this[modal] = false;
    },
  },
};
```

## Props
Name               | Type      | Description | Default | Required
------------------ | --------- | ----------- | ------- | --------
id                 | [String, Number]   | Unique identifier | None  | false
title              | String    | Modal's title | 'Modal title'  | false
size               | String    | Modal's size ['1', '2', '3'] | '2'  | false
role               | String    | Modal's role 'dialog' or 'alertdialog' | 'dialog'  | false
open               | Boolean   | Modal's state | false  | false
removeHeader       | Boolean   | Whether or not display modal's header | false | false
removeCloseButton  | Boolean   | Whether or not display modal's close button | false | false
dismissible        | Boolean   | Should modal be dismissible or not | true  | false
dismissOn | String | Elements which can trigger close method | 'backdrop esc close-button' | false

<script>
export default {
  data() {
    return { modal1: false };
  },
  methods: {
    open(modal) {
      this[modal] = true;
    },
    close(modal) {
      this[modal] = false;
    },
  },
};
</script>
