# Button <badge text="development" type="warn" />

## Example
<div class="p-3 border rounded-2 my-3">
  <v-button appearance="default">Default</v-button>
  <v-button appearance="primary">Primary</v-button>
  <v-button appearance="alternative">Alternative</v-button>
  <v-button appearance="subtle">Alternative</v-button>
  <v-button appearance="success">Success</v-button>
  <v-button appearance="danger">Danger</v-button>
</div>

``` html
<v-button appearance="default">Default</v-button>
<v-button appearance="primary">Primary</v-button>
<v-button appearance="alternative">Alternative</v-button>
<v-button appearance="subtle">Subtle</v-button>
<v-button appearance="success">Success</v-button>
<v-button appearance="danger">Danger</v-button>
```

<div class="p-3 border rounded-2 my-3">
  <v-button loading appearance="default">Default</v-button>
  <v-button loading appearance="primary">Primary</v-button>
  <v-button loading appearance="alternative">Alternative</v-button>
  <v-button loading appearance="subtle">Alternative</v-button>
  <v-button loading appearance="success">Success</v-button>
  <v-button loading appearance="danger">Danger</v-button>
</div>

``` html
<v-button loading appearance="default">Default</v-button>
```

<div class="p-3 border rounded-2 my-3">
  <v-button disabled appearance="default">Default</v-button>
  <v-button disabled appearance="primary">Primary</v-button>
  <v-button disabled appearance="alternative">Alternative</v-button>
  <v-button disabled appearance="subtle">Alternative</v-button>
  <v-button disabled appearance="success">Success</v-button>
  <v-button disabled appearance="danger">Danger</v-button>
</div>

``` html
<v-button disabled appearance="default">Default</v-button>
```

<div class="p-3 border rounded-2 my-3">
  <v-button icon-first appearance="default">
    <svg slot="icon" viewBox="0 0 24 24" width="20" height="20"><g fill="currentColor" fill-rule="nonzero"><path d="M7.723 4.552A1 1 0 0 1 8.617 4h6.764a1 1 0 0 1 .895.554L16.997 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.997l.726-1.448zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></g>
    </svg>
    Default
  </v-button>
  <v-button appearance="primary">
    Primary
    <svg slot="icon" viewBox="0 0 24 24" width="20" height="20"><g fill="currentColor" fill-rule="nonzero"><path d="M7.723 4.552A1 1 0 0 1 8.617 4h6.764a1 1 0 0 1 .895.554L16.997 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.997l.726-1.448zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path><path d="M12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></g>
        </svg>
  </v-button>
</div>

``` html
<v-button disabled appearance="default">Default</v-button>
```

<div class="p-3 border rounded-2 my-3">
  <v-button size="0" appearance="default">Default</v-button>
  <v-button size="1" appearance="default">Default</v-button>
  <v-button size="2" appearance="default">Default</v-button>
  <v-button size="3" appearance="default">Default</v-button>
  <v-button size="4" appearance="default">Default</v-button>
</div>

``` html
<v-button disabled appearance="default">Default</v-button>
```

## Props
Name       | Type     | Description | Default
---------- | -------- | ----------- | -----
type       | String   | Button type, 'button' or 'submit' | button
appearance | String   | There are 6 options: ['default', 'primary', 'alternative', 'subtle', 'success', 'danger'] | <code>default</code>
size       | String   | Button size, ['1', '2', '3', '4'] | '3'
disabled   | Boolean  | Whether button disabled or not | false
loading    | Boolean  | Whether button in loading state or not | false
icon-first | Boolean  | Set to `true` if you want to render icon before text | false

## Slots
Name     | Slot props       | Description
-------- | -----------      | -----
default  | None             | Button content
icon     | None             | For icon
