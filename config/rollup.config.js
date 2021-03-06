import commonConfig from './rollup.config.common';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from "rollup-plugin-uglify";

const configs = [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/vuecommander.js',
      format: 'umd',
      name: 'VueCommander'
    },
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/vuecommander.min.js',
      format: 'umd',
      compact: true,
      name: 'VueCommander'
    },
    plugins: [
      uglify(),
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/vuecommander.esm.js',
      format: 'es',
      name: 'VueCommander'
    },
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }
];

configs.push(commonConfig);

export default configs;