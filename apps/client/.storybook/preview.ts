import type { Preview } from "@storybook/react";
import "@bonblogv2/ui/globals.css";
import { initialize, mswLoader } from 'msw-storybook-addon'

initialize()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  loaders: [mswLoader],
};

export default preview;
