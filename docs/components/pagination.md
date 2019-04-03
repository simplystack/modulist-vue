# Pagination
Simple pagination component.

## Example
<div class="p-3 border rounded-2 my-3">
  <v-pagination 
    v-model="current" 
    :total="300"
  ></v-pagination>
  <div class="mt-3">Current page: {{ current }}</div>
</div>

```html
<v-pagination v-model="current" :total="300"></v-pagination>
```
```javascript
export default {
  data() {
    return {
      current: 1,
    };
  },
};
```

## Props
Name               | Type      | Description | Default | Required
------------------ | --------- | ----------- | ------- | --------
value, v-model     | Number    | Current page value. **If you are not using `v-model`, you should listen for the `input` event and update value.** | 1  | false
maxVisibleButtons  | Number    | Number of visible buttons | 3  | false
total              | Number    | Total amount of pages | None  | true
perPage            | Number    | Items per page | 10  | false

<script>
export default {
  data() {
    return {
      current: 1,
    };
  },
};
</script>
