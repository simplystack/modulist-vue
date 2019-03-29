import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

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
    buble(),
  ],
};

// UMD/IIFE shared settings: externals and output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
];
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
};

export default [
  {
    ...baseConfig,
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
    ],
  },
];
