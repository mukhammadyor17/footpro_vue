import { Notify } from "quasar";

Notify.setDefaults({
  position: "bottom-right",
  timeout: 2500,
  textColor: "white",
  color: "green",
  actions: [{ icon: "close", color: "white" }]
});

export const notify = {
  show(message, type = "positive") {
    Notify.create({
      message: message,
      type: type
    });
  }
};
