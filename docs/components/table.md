# Table

## Default
<div class="p-3 pb-5 border rounded-2 my-3 flex">
  <v-table :fields="normal.fields" :items="normal.items" />
</div>

```html
<v-table :fields="normal.fields" :items="normal.items" />
```

## Title & Search
<div class="p-3 pb-5 border rounded-2 my-3 flex">
  <v-table :fields="normal.fields" :items="normal.items">
    <template v-slot:toolbar="{ handleSearchInput }">
      <v-table-header title="Custom title" :handleSearchInput="handleSearchInput"></v-table-header>
    </template>
  </v-table>
</div>

```html
<v-table :fields="normal.fields" :items="normal.items">

  <!--custom header-->
  <template v-slot:toolbar="{ handleSearchInput }">
    <v-table-header
      title="Custom title"
      :handleSearchInput="handleSearchInput"
    ></v-table-header>
  </template>

</v-table>
```

<script>
export default {
  data() {
    return {
      normal: {
        fields: {
          name: { label: 'Name', sortable: true },
          createdAt: { label: 'Created', sortable: false },
        },
        items: [
          { id: 1, name: 'Item 1', createdAt: '1 days ago', },
          { id: 2, name: 'Item 2', createdAt: '2 days ago', },
          { id: 3, name: 'Item 3', createdAt: '3 days ago', },
        ],
      },
      multiple: {
        selected: [],
        fields: {
          name: { label: 'Name', sortable: true },
          createdAt: { label: 'Created', sortable: false },
        },
        items: [
          { id: 1, name: 'Item 1', createdAt: '1 days ago', },
          { id: 2, name: 'Item 2', createdAt: '2 days ago', },
          { id: 3, name: 'Item 3', createdAt: '3 days ago', },
        ],
      },
    };
  },
};
</script>
