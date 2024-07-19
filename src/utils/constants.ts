// Colors used in this application
export const COLORS = {
  white: "#ffffff",
  "primary-black": "#080f1d",
  "green-500": "#15c421",
  "green-600": "#089b12",
  "blue-100": "#e6eefe",
  "blue-600": "#2851a3",
  "gray-50": "#f4f5f6",
  "gray-100": "#e3e5e8",
  "gray-200": "#c7cbd1",
  "gray-300": "#aab1bb",
  "gray-400": "#8e97a4",
  "gray-500": "#727e8d",
  "gray-600": "#647181",
  "gray-700": "#44505f",
  "gray-800": "#2a3646",
  "gray-900": "141d2a",
};

// Breakpoints for different screen sizes
export const DEVICE = {
  mobile: "(max-width: 639px)",
  tablet: "(min-width: 640px)",
  laptop: "(min-width: 1024px)",
  desktop: "(min-width: 1280px)",
};

// s3 image URL for the home recipe widget
export const HOME_RECIPE_WIDGET_BACKGROUND_IMAGE =
  "https://s3-alpha-sig.figma.com/img/708a/4a23/3e093c3541cd5e91e40d641205efdaf1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WzR1rVXFKGVnbTDVwGm~hPOGKgCrhZD55jIWTo1wMmPxaNPl-kHfJSPcZG04CcH5aHvqK4p5dodSxt1xcmGlPPvEi98-f5kt87f340oZEXM~LdtY8fPYTA2Jiz1u-EXbhfrqrDR-X0yNvQbNlIw4sfiCtm9LITKrwKKlaj38qlo1Hy-lb~Ed~A98aaNb7UaWN7K8wA1nwGLC~bdjH3Wy3OUeSZGTJJZzZvNXK93Fp6x4AdXReIhG9ADu6cC4Y8dfNar7e4B5KO196VdmjsGqQw20IYhA~FX8tbgqawfQumB8tGbBVKSrJ80e5hfjFz4zOx4gy10Kbeph~V58Z04~Tg__";

// constant z-index value used for Modal overlays
export const OVERLAY_Z_INDEX = 99;

// Recipe filters
export type IconType = "recipes" | "category" | "area" | "ingredient";
export const RECIPE_FILTERS: IconType[] = [
  "recipes",
  "category",
  "area",
  "ingredient",
];

export type AllowedTabs = "recipes" | "category" | "area" | "ingredient";

// CSS transitions
export const TRANSITIONS = {
  "in-out-back": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
};

// unicodes for country flags
export const COUNTRY_FLAGS: { [key: string]: string } = {
  American: "🇺🇸",
  British: "🇬🇧",
  Canadian: "🇨🇦",
  Chinese: "🇨🇳",
  Croatian: "🇭🇷",
  Dutch: "🇳🇱",
  Egyptian: "🇪🇬",
  Filipino: "🇵🇭",
  French: "🇫🇷",
  Greek: "🇬🇷",
  Indian: "🇮🇳",
  Irish: "🇮🇪",
  Italian: "🇮🇹",
  Jamaican: "🇯🇲",
  Japanese: "🇯🇵",
  Kenyan: "🇰🇪",
  Malaysian: "🇲🇾",
  Mexican: "🇲🇽",
  Moroccan: "🇲🇦",
  Polish: "🇵🇱",
  Portuguese: "🇵🇹",
  Russian: "🇷🇺",
  Spanish: "🇪🇸",
  Thai: "🇹🇭",
  Tunisian: "🇹🇳",
  Turkish: "🇹🇷",
  Ukrainian: "🇺🇦",
  Unknown: "❓",
  Vietnamese: "🇻🇳",
};
