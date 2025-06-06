// import '@sanity/ui/index.css'
import './global.css'

import type {Preview} from '@storybook/react-vite'

import {UIDecorator} from './decorators/ui'

const preview: Preview = {
  decorators: [UIDecorator],

  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    // actions: {argTypesRegex: '^on[A-Z].*'},
    backgrounds: {disable: true},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // docs: {
    //   theme: {
    //     ...themes.dark,
    //     fontBase: 'Inter, sans-serif',
    //   },
    // },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: ['primitives', 'components', '*'],
      },
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'sun',
      items: [
        {value: 'light', icon: 'sun', title: 'Light'},
        {value: 'dark', icon: 'moon', title: 'Dark'},
      ],
    },
  },
}

export default preview
