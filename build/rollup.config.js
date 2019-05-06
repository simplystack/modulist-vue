import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import banner from 'rollup-plugin-banner';
import { terser } from 'rollup-plugin-terser';

const bannerText = 'Modulist Vue v<%= pkg.version %> \n(c) 2019 SimplyStack \nReleased under the MIT License.';

const baseConfig = {
  input: 'src/entry.js',
  plugins: [
    commonjs(),
    vue({
      compileTemplate: true,
      template: {
        isProduction: true,
      },
    }),
    buble({
      transforms: {
        asyncAwait: false,
      },
    }),
  ],
};

// UMD/IIFE shared settings: externals and output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'fuzzysearch',
  'vue',
  'popper.js',
];
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  fuzzysearch: 'fuzzysearch',
  vue: 'Vue',
  'popper.js': 'Popper',
};

export default [
  {
    ...baseConfig,
    external,
    output: {
      file: 'dist/modulist-vue.esm.js',
      format: 'esm',
      exports: 'named',
    },
    plugins: [
      ...baseConfig.plugins,
      terser({
        output: {
          ecma: 6,
        },
      }),
      banner(bannerText),
    ],
  },
  {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/modulist-vue.common.js',
      format: 'cjs',
      name: 'ModulistVue',
      exports: 'named',
      globals,
    },
    plugins: [
      ...baseConfig.plugins,
      terser({
        output: {
          ecma: 6,
        },
      }),
      banner(bannerText),
    ],
  },
  {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: 'dist/modulist-vue.min.js',
      format: 'umd',
      name: 'ModulistVue',
      exports: 'named',
      globals,
    },
    plugins: [
      ...baseConfig.plugins,
      terser({
        output: {
          ecma: 5,
        },
      }),
      banner(bannerText),
    ],
  },
];
