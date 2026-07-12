import { createMachine } from "xstate";

export const checkoutMachine = createMachine({
  id: "checkout",
  initial: "review",

  states: {
    review: {
      on: {
        PLACE_ORDER: "processing",
      },
    },

    processing: {
      after: {
        3000: {
          target: "success",
        },
      },
    },

    success: {},
  },
});