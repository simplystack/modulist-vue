# Table

## Default
<div class="p-3 pb-5 border rounded-2 my-3 flex">
  <v-table :ready="false" :fields="normal.fields" :items="normal.items" />
</div>

```html
<v-table :fields="normal.fields" :items="normal.items" />
```
```javascript
export default {
  data() {
    return {
      fields: {
        name: { label: 'Name', sortable: true },
        createdAt: { label: 'Created', sortable: false },
      },
      items: [
        { id: 1, name: 'Item 1', createdAt: '1 days ago', },
        { id: 2, name: 'Item 2', createdAt: '2 days ago', },
        { id: 3, name: 'Item 3', createdAt: '3 days ago', },
      ],
    };
  }
};
```

## Custom template
<div class="p-3 pb-5 border rounded-2 my-3 flex">
  <v-table :fields="normal.fields" :items="normal.items">
    <template v-slot:name="{ item }">
      <div class="text-bold">{{ item.name }}</div>
      <div class="text-secondary">Unique identifier: {{ item.id }}</div>
    </template>
  </v-table>
</div>

```html
<v-table :fields="normal.fields" :items="normal.items" />
```
```javascript
export default {
  data() {
    return {
      fields: {
        name: { label: 'Name', sortable: true },
        createdAt: { label: 'Created', sortable: false },
      },
      items: [
        { id: 1, name: 'Item 1', createdAt: '1 days ago', },
        { id: 2, name: 'Item 2', createdAt: '2 days ago', },
        { id: 3, name: 'Item 3', createdAt: '3 days ago', },
      ],
    };
  }
};
```

## Title & Search
<div class="p-3 pb-5 border rounded-2 my-3">
  <v-table :fields="normal.fields" :items="normal.items">
    <template v-slot:header="{ handleSearchInput, selected }">
      <v-table-header
        title="Custom title"
        :handleSearchInput="handleSearchInput"
      >
        <template v-slot:action>
          <v-dropdown placement="bottom-end" :options="[{ label: 'Share' }, { label: 'Remove' }]">
            <template v-slot:toggle>
              <v-button size="3" appearance="alternative">Actions</v-button>
            </template>
          </v-dropdown>
        </template>
      </v-table-header>
    </template>
  </v-table>
</div>

```html
<v-table :fields="normal.fields" :items="normal.items">

  <!--custom header-->
  <template v-slot:header="{ handleSearchInput }">
    <v-table-header
      title="Custom title"
      :handleSearchInput="handleSearchInput"
    >
      <template v-slot:action>
        <v-dropdown placement="bottom-end" :options="[{ label: 'Share' }, { label: 'Remove' }]">
          <template v-slot:toggle>
            <v-button appearance="alternative">Actions</v-button>
          </template>
        </v-dropdown>
      </template>
    </v-table-header>
  </template>

</v-table>
```
```javascript
export default {
  data() {
    return {
      fields: {
        name: { label: 'Name', sortable: true },
        createdAt: { label: 'Created', sortable: false },
      },
      items: [
        { id: 1, name: 'Item 1', createdAt: '1 days ago', },
        { id: 2, name: 'Item 2', createdAt: '2 days ago', },
        { id: 3, name: 'Item 3', createdAt: '3 days ago', },
      ],
    };
  }
};
```

## Multi select
<div class="p-3 pb-5 border rounded-2 my-3">
  <v-table multi-select v-model="multiple.selected" :fields="multiple.fields" :items="multiple.items" />
  <div>
    <span class="text-bold">Selected: </span> {{ multiple.selected }}
  </div>
</div>

```html
<v-table
  multi-select
  v-model="multiple.selected"
  :fields="multiple.fields"
  :items="multiple.items"
/>
```

```javascript
export default {
  data() {
    return {
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
    };
  }
};
```

## Pagination
<div class="p-3 pb-5 border rounded-2 my-3">
  <v-table :per-page="5" :current-page="pagination.currentPage":fields="pagination.fields" :items="pagination.items">
    <template v-slot:header="{ handleSearchInput, selected }">
      <v-table-header title="Custom title" :handleSearchInput="handleSearchInput"></v-table-header>
    </template>
    <template v-slot:pagination="{ total, perPage }">
      <v-pagination v-model="pagination.currentPage" size="3" :total="total" :per-page="perPage"/>
    </template>
  </v-table>
</div>

```html
<v-table
  :current-page="pagination.currentPage"
  :fields="pagination.fields"
  :items="pagination.items"
>
  <template v-slot:header="{ handleSearchInput, selected }">
    <v-table-header
      title="Custom title"
      :handleSearchInput="handleSearchInput"
    />
  </template>
  <template v-slot:pagination="{ total, perPage }">
    <v-pagination
      v-model="pagination.currentPage"
      size="3"
      :total="total"
      :per-page="perPage"
    />
  </template>

</v-table>
```
```javascript
export default {
  data() {
    return {
      pagination: {
        currentPage: 1,
         fields: {
          name: { label: 'Name', sortable: true },
          createdAt: { label: 'Created', sortable: false },
        },
        items: [
          { id: 1, name: 'Item 1', createdAt: '2 days ago' },
          { id: 2, name: 'Item 2', createdAt: 'just now' },
          { id: 3, name: 'Item 3', createdAt: '1 day ago' },
          { id: 4, name: 'Item 4', createdAt: '1 week ago' },
          { id: 5, name: 'Item 5', createdAt: 'just now' },
          { id: 6, name: 'Item 6', createdAt: '3 years ago' },
          { id: 7, name: 'Item 7', createdAt: '1 week ago' },
          { id: 8, name: 'Item 8', createdAt: '1 week ago' },
          { id: 9, name: 'Item 9', createdAt: '1 week ago' },
          { id: 10, name: 'Item 10', createdAt: '9 week ago' },
          ...
        ],
      },
    };
  },
};
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
      pagination: {
        currentPage: 1,
        fields: {
          name: { label: 'Name', sortable: true },
          createdAt: { label: 'Created', sortable: false },
        },
        items: [
          { id: 1, name: 'Item 1', createdAt: '2 days ago' },
          { id: 2, name: 'Item 2', createdAt: 'just now' },
          { id: 3, name: 'Item 3', createdAt: '1 day ago' },
          { id: 4, name: 'Item 4', createdAt: '1 week ago' },
          { id: 5, name: 'Item 5', createdAt: 'just now' },
          { id: 6, name: 'Item 6', createdAt: '3 years ago' },
          { id: 7, name: 'Item 7', createdAt: '1 week ago' },
          { id: 8, name: 'Item 8', createdAt: '1 week ago' },
          { id: 9, name: 'Item 9', createdAt: '1 week ago' },
          { id: 10, name: 'Item 10', createdAt: '9 week ago' },
          { id: 11, name: 'Item 11', createdAt: '10 week ago' },
          { id: 12, name: 'Item 12', createdAt: '11 week ago' },
          { id: 13, name: 'Item 13', createdAt: '5 week ago' },
          { id: 14, name: 'Item 14', createdAt: '3 week ago' },
          { id: 15, name: 'Item 15', createdAt: '2 week ago' },
          { id: 16, name: 'Item 16', createdAt: '1 week ago' },
          { id: 17, name: 'Item 17', createdAt: '4 week ago' },
          { id: 18, name: 'Item 18', createdAt: '3 week ago' },
          { id: 19, name: 'Item 19', createdAt: '2 week ago' },
          { id: 20, name: 'Item 20', createdAt: '2 week ago' },
          { id: 21, name: 'Item 21', createdAt: '2 week ago' },
          { id: 22, name: 'Item 22', createdAt: '2 week ago' },
          { id: 23, name: 'Item 23', createdAt: '2 week ago' },
          { id: 24, name: 'Item 24', createdAt: '2 week ago' },
          { id: 25, name: 'Item 25', createdAt: '3 week ago' },
          { id: 26, name: 'Item 26', createdAt: '2 week ago' },
          { id: 27, name: 'Item 27', createdAt: '2 week ago' },
          { id: 28, name: 'Item 28', createdAt: '3 years ago' },
          { id: 29, name: 'Item 29', createdAt: 'just now' },
          { id: 30, name: 'Item 30', createdAt: '1 day ago' },
          { id: 31, name: 'Item 31', createdAt: '2 month ago' },
        ],
      },
    };
  },
};
</script>

## Table Props
Name       | Type     | Description | Default   | Required
---------- | -------- | ----------- | --------- | --------
ready      | Boolean    | Show loading if false. Allowing to load data in async way | true | false
value      | Array    | Returns selected values | [] | false
fields     | Object   | Columns labels          | {} | false
items      | Array    | Data                    | [] | false
multiSelect| Boolean  | If true user can select multiple values | false | false
perPage     | Number  | How many items to render per page | 10 | false
currentPage | Number  | Current page for pagination | 1 | false
sortCompare | Function | Custom function to perform sort | null | false
emptyText  | String   | Text for state when no data found | 'There is no records.' | false
emptyFilteredText | String | Text for state when search results not found | 'There are no records matching your request' | false

## Table Slots
Name    | Props     | Description
------- | --------- | -----------
header  | items, selected, handleSearchInput, disabledSearch | Slot for table header
{key} field name    | value, item, index | Slot for custom cell
pagination | total, perPage | Slot for pagination

## TableHeader Props
Name       | Type     | Description | Default
---------- | -------- | ----------- | ---------
title      | String   | Appearance of spinner ['default', 'primary']  | 'Table title'
searchable | Boolean  | Display search or not | false
handleSearchInput | Function | Function from table to keep `query` up to date to filter data properly. Required when `searchable` is `true`. | None | false
disabledSearch | Boolean |

## TableHeader Slots
Name    | Props     | Description
------- | --------- | -----------
title   | None      | Slot for title
action  | None      | Slot for action
