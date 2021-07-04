import typescript from 'rollup-plugin-typescript2'
import react from 'react';
import commonjs from 'rollup-plugin-commonjs';
import reactDom from 'react-dom';
import pkg from './package.json'

commonjs({
  include: 'node_modules/**',
  namedExports: {
    react: Object.keys(react),
    'react-dom': Object.keys(reactDom)
  }
})

export default {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],plugins: [
        typescript({
          typescript: require('typescript'),
        }),
      ],
    }