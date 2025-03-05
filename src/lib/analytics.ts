import Eventlytics from "eventlytics";

const eventlytics = new Eventlytics(
  import.meta.env.VITE_PROJECT_TOKEN ?? "",
  import.meta.env.VITE_EVENTLYTICS_API_KEY ?? "",
  import.meta.env.VITE_USER_TOKEN ?? ""
);

const track = (eventName: string, props?: Record<string, unknown>) => {
  if (!import.meta.env.PROD) return; // tracking only for production
  eventlytics.track(eventName, {
    ...props,
  });
};

export const Analytics = { track };
