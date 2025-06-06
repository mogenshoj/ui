import type {StorybookConfig} from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    // '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
}

export default config

// import type {StorybookConfig} from '@storybook/react-vite'
// import path from 'path'
// // import {vanillaExtractPlugin} from '@vanilla-extract/rollup-plugin'
// // import viteReact from '@vitejs/plugin-react'
// // import {mergeConfig} from 'vite'
// // import tsconfigPaths from 'vite-tsconfig-paths'

// const config: StorybookConfig = {
//   stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
//   addons: [
//     '@storybook/addon-a11y',
//     '@storybook/addon-docs',
//     // '@storybook/addon-essentials',
//     // '@storybook/addon-interactions',
//     '@storybook/addon-links',
//     // '@storybook/addon-mdx-gfm',
//     // '@storybook/addon-storysource',
//     '@storybook/addon-themes',
//   ],
//   core: {
//     builder: '@storybook/builder-vite',
//   },
//   // framework: '@storybook/react-vite',
//   // framework: {
//   //   name: '@storybook/react-vite',
//   //   options: {},
//   // },
//   docs: {
//     autodocs: 'tag',
//   },
//   framework: '@storybook/react-vite',
//   viteFinal(config) {
//     // console.log(config)
//     return {
//       ...config,
//       resolve: {
//         ...config.resolve,
//         alias: {
//           ...config.resolve?.alias,
//           '@sanity/ui': path.resolve(__dirname, '../exports'),
//         },
//       },
//     }
//     // return mergeConfig(config, {
//     //   plugins: [
//     //     viteReact({
//     //       babel: {plugins: [['babel-plugin-react-compiler', {target: '19'}]]},
//     //     }),
//     //     tsconfigPaths(),
//     //     vanillaExtractPlugin(),
//     //   ],
//     // })
//   },
// }
// export default config
