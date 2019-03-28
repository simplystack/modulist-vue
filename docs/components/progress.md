# Progress
Simple progress component showing progress.


## Example

<div class="p-3 border rounded-2 my-3 flex flex-column">
  <!-- Indeterminated -->
  <v-progress class="mb-5"></v-progress>
  
  <!-- Determinated -->
  <v-progress class="mb-3" :progress="progress" type="determinate"></v-progress>
  
  <div>
    <v-button size="2" :disabled="progress === 0" @click.native="decrease">-</v-button>
    <v-button size="2" :disabled="progress === 100" @click.native="increase">+</v-button>
  </div>
</div>

```html
<!-- Indeterminate -->
<v-progress />
  
<!-- Determinate -->
<v-progress :progress="progress" type="determinate"></v-progress>
```

## Props
Name       | Type     | Description | Default
---------- | -------- | ----------- | ---------
type       | String   | Type of progress bar [ 'determinate', 'indeterminate'] | 'determinate'
appearance | String   | Appearance of progress bar  | 'primary'

<script>
export default {
  data() {
    return { progress: 10 };
  },
  methods: {
    increase() {
      if (this.progress < 100) {
        this.progress = this.progress + 5;
      }
    },
    decrease() {
      if (this.progress > 0) {
        this.progress = this.progress - 5;
      }
    },
  },
};
</script>
