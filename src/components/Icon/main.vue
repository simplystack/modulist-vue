<template>
  <svg
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :fill="fill"
    :stroke="stroke"
    v-on="$listeners"
  ></svg>
</template>

<script>
import { stringToNode } from '../../helpers/util';

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
      return this.svgString
        ? stringToNode(this.svgString)
        : null;
    },
    viewBox() {
      return this.parsedSVG ? this.parsedSVG.getAttribute('viewBox') : '0 0 20 20';
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
    getSvgIconText() {
      const url = this.filepath;

      if (!cache.has(url)) {
        try {
          cache.set(url, fetch(url).then(r => r.text()));
        } catch (e) {
          cache.delete(url);
        }
      }

      if (!cache.has(url)) {
        Promise.reject(new Error('The icon is not exists in local cache'));
      }

      return cache.get(url);
    },
    refreshSvg() {
      Promise.resolve(this.parsedSVG)
        .then((svgElement) => {
          [...svgElement.querySelectorAll('path')]
            .forEach(node => node.setAttribute('fill', this.fill));
          return svgElement;
        })
        .then(svgElement => svgElement.innerHTML)
        .then((svgContent) => {
          this.$el.innerHTML = svgContent;
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
