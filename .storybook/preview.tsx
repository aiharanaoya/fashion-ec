import './../app/_styles/globals.css';

import React from 'react';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="text-slate-800">
        <Story />
      </div>
    )
  ]
};

export default preview;