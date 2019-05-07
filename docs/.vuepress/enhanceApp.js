import ModulistVue from '../../src/entry';
import '@modulist/css/dist/modulist.css';

export default ({ Vue, options, router, siteData }) => {
  Vue.use(ModulistVue);
  Vue.prototype.$modulist = {
    getIcon: name => require(`@modulist/icons/dist/${name}.svg`),
  };
}
