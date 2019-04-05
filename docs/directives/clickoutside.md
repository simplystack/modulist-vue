# Clickoutside <badge text="stable" />

The `v-clickoutside` directive allows to run callback on click out of element.

## Example
<div class="p-3 border rounded-2 my-3 flex">
  <v-button v-clickoutside="handleClickoutside" appearance="primary">Click me or miss</v-button>
</div>


```html
<v-button
  appearance="primary"
  v-clickoutside="handleClickoutside"
>
  Click me or miss
</v-button>
```

```javascript
export default {
  methods: {
    handleClickoutside() {
      alert('You clicked outside the button!');
    },
  },
};
```

<script>
export default {
  methods: {
    handleClickoutside() {
      alert('You clicked outside the button!');
    },
  },
};
</script>

## Arguments
Name     | type       | Description
-------- | -----------| -----
main     | Function   | Callback that will be executed on clickoutside
