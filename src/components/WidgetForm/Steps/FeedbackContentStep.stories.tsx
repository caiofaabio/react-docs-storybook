import {Popover} from "@headlessui/react";
import {
  FeedbackContentStep,
  FeedbackContentStepProps,
} from "./FeedbackContentStep";
import {Meta, StoryObj} from "@storybook/react";
import {http, HttpResponse} from "msw";

export default {
  title: "Widget UI/FeedbackContentStep",
  component: FeedbackContentStep,
  args: {
    feedbackType: "IDEA",
  },
  parameters: {
    msw: {
      handlers: [
        http.get("/feedbacks", () => {
          return HttpResponse.json({
            message: "Feedback received!",
          });
        }),
      ],
    },
  },
  decorators: [
    (Story) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className="bg-zinc-900 relative p-4 rounded-lg flex flex-col items-center w-96">
              {Story()}
            </div>
          </Popover.Panel>
        </Popover>
      );
    },
  ],
} as Meta<FeedbackContentStepProps>;

export const Default: StoryObj<FeedbackContentStepProps> = {};

export const Bug: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "BUG",
  },
};

export const Idea: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "IDEA",
  },
};

export const Other: StoryObj<FeedbackContentStepProps> = {
  args: {
    feedbackType: "OTHER",
  },
};
