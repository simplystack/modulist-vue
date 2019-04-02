# Stepper <badge text="development" type="warn" />
The stepper component displays progress through numbered steps.

## Example
<div class="p-3 pb-5 border rounded-2 my-3 flex">
  <v-stepper v-model="step" :steps="steps" />
</div>

```html
<v-stepper v-model="step" :steps="steps" />
```

```javascript
export default {
  data() {
    return { 
      step: 1, 
      steps: [
        { id: 1, title: 'First' }, 
        { id: 2, title: 'Second' }, 
        { id: 3, title: 'Third' },
      ],
    };
  },
};
```

## Props
Name       | Type     | Description | Default | Required
---------- | -------- | ----------- | --------| --------
steps | Array   | List of steps  | None | true
value, v-model | Number |	The model that the stepper value syncs to. Can be set initially as a default value.	| 1 | false
manual | Boolean   | If set true then you should manually change steps  | false | false
hideLabel | Boolean   | Hide labels for steps  | false | false
disablePrev | Boolean   | Disabled step back option  | false | false

<script>
export default {
  data() {
    return { 
      step: 1, 
      steps: [
        { id: 1, title: 'First', label: true }, 
        { id: 2, title: 'Second' }, 
        { id: 3, title: 'Third' },
      ],
    };
  },
};
</script>
