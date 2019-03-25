# Modulist Vue

Vue components for the Modulist Design System

## Install

If you are using module bundlers such as Webpack, you can directly include package into your project via:

**Note**

Please note that this library is not contains any CSS, it only provides javascript functionality for components. You can write your own or install [Modulist CSS design system](https://github.com/simplystack/modulist-css/).

**NPM**
``` bash
$ npm install @modulist/vue --save
```

Then register `modulist-vue` components and directives all at once in your app's entry:

``` js
// main.js
import Vue from 'vue';
import ModulistVue from '@modulist/vue';

Vue.use(ModulistVue);
```

**Browser**

Alternatively, you can include script directly on your html page. See [example here](https://github.com/simplystack/modulist-vue/examples/browser/index.html).

```html
<div id="app">
  <!-- Components here ...-->
  <v-button appearance="primary">My button</v-button>
</div>

<!-- First, include Vue library -->
<script src="https://unpkg.com/vue"></script>
<!-- Then library itself -->
<script src="https://unpkg.com/@modulist/vue"></script>
<script>
  new Vue({
    el: '#app',
  });
</script>
```
