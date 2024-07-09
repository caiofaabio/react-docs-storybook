import type {Preview} from "@storybook/react";
import {initialize, mswDecorator} from "msw-storybook-addon";
import "../src/global.css";

// Initialize MSW
initialize();

export const decoratores = [mswDecorator];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
