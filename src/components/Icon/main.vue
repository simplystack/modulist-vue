<template>
  <svg :viewBox="viewBox" :width="width" :height="height" :fill="fill" :stroke="stroke"></svg>
</template>

<script>
import { parse } from 'postsvg';
import render from 'posthtml-render';

const cache = new Map();

export default {
  name: 'BaseSVGIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 20,
    },
    height: {
      type: [Number, String],
      default: 20,
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
    stroke: {
      type: String,
      default: 'none',
    },
    generateReadyEvent: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    svgString: '',
  }),
  computed: {
    filepath() {
      /* eslint-disable-next-line */
      return this.$modulist.getIcon(this.name);
    },
    parsedSVG() {
      return this.svgString ? parse(this.svgString) : null;
    },
    viewBox() {
      return this.parsedSVG ? this.parsedSVG.root.attrs.viewBox : '0 0 20 20';
    },
  },
  watch: {
    filepath: {
      immediate: true,
      handler: 'loadFile',
    },
    svgString: 'refreshSvg',
  },
  methods: {
    loadFile() {
      this.getSvgIconText()
        .then((responseText) => {
          this.svgString = responseText;
        })
        .catch(error => console.error('Error while downloading SVG file', error));
    },
    async getSvgIconText() {
      const url = this.filepath;

      if (!cache.has(url)) {
        try {
          cache.set(url, fetch(url).then(r => r.text()));
        } catch (e) {
          cache.delete(url);
        }
      }

      return cache.has(url)
      /* eslint-disable-next-line no-return-await */
        ? await cache.get(url)
        : Promise.reject(new Error('The icon is not exists in local cache'));
    },
    refreshSvg() {
      Promise.resolve(this.parsedSVG)
        .then((svgTree) => {
          svgTree.each('path', (node) => {
            /* eslint-disable-next-line no-param-reassign */
            node.attrs.fill = this.fill;
          });
          return svgTree;
        })
        .then(svgTree => render(svgTree.root.content))
        .then((svgHtml) => {
          this.$el.innerHTML = svgHtml;
        })
        .then(() => this.generateReadyEvent && this.$emit('ready'))
        .catch((error) => {
          console.error('Error while trying to update SVG', error);
          this.$emit('error', error);
        });
    },
  },
};
</script>
