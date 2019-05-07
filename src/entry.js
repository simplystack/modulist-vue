// Import vue components
import * as components from './components';
import * as directives from './directives';

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  /* eslint-disable-next-line no-param-reassign */
  Vue.prototype.$modulist = {
    /* eslint-disable-next-line */
    getIcon: name => require(`@modulist/icons/dist/${name}.svg`),
  };

  Object.keys(components).forEach((component) => {
    Vue.component(component, components[component]);
  });
  Object.keys(directives).forEach((directive) => {
    Vue.directive(directive, directives[directive]);
  });
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components';

// To allow individual directive use, export directives
// each can be registered via Vue.directive()
export * from './directives';
