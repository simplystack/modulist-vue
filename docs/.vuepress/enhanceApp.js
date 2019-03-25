import ModulistVue from '../../src/entry';
import '@modulist/css/dist/modulist.css';

export default ({ Vue, options, router, siteData }) => {
  Vue.use(ModulistVue);
}
