import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}








// module.exports = {
//     content: [
//       "./src/**/*.{html,js,ts,jsx,tsx}",
//       "app/**/*.{ts,tsx}",
//       "components/**/*.{ts,tsx}",
//     ],
//     theme: {
//       extend: {
//         colors: {
//           "color-paletheading-color": "var(--color-paletheading-color)",
//           "foundation-bluenormal": "var(--foundation-bluenormal)",
//           "global-base-white": "var(--global-base-white)",
//           "global-green-800": "var(--global-green-800)",
//           "global-neutral-grey-1000": "var(--global-neutral-grey-1000)",
//           "global-neutral-grey-1300": "var(--global-neutral-grey-1300)",
//           "global-neutral-grey-500": "var(--global-neutral-grey-500)",
//           globalbasewhite: "var(--globalbasewhite)",
//           "globalblue-300": "var(--globalblue-300)",
//           "globalblue-400": "var(--globalblue-400)",
//           "grey-40": "var(--grey-40)",
//           greywhite: "var(--greywhite)",
//           "label-light-secondary": "var(--label-light-secondary)",
//           "light-white-t4": "var(--light-white-t4)",
//           linearblack: "var(--linearblack)",
//           "separator-light-default": "var(--separator-light-default)",
//           "white-100": "var(--white-100)",
//           "white-4": "var(--white-4)",
//           border: "hsl(var(--border))",
//           input: "hsl(var(--input))",
//           ring: "hsl(var(--ring))",
//           background: "hsl(var(--background))",
//           foreground: "hsl(var(--foreground))",
//           primary: {
//             DEFAULT: "hsl(var(--primary))",
//             foreground: "hsl(var(--primary-foreground))",
//           },
//           secondary: {
//             DEFAULT: "hsl(var(--secondary))",
//             foreground: "hsl(var(--secondary-foreground))",
//           },
//           destructive: {
//             DEFAULT: "hsl(var(--destructive))",
//             foreground: "hsl(var(--destructive-foreground))",
//           },
//           muted: {
//             DEFAULT: "hsl(var(--muted))",
//             foreground: "hsl(var(--muted-foreground))",
//           },
//           accent: {
//             DEFAULT: "hsl(var(--accent))",
//             foreground: "hsl(var(--accent-foreground))",
//           },
//           popover: {
//             DEFAULT: "hsl(var(--popover))",
//             foreground: "hsl(var(--popover-foreground))",
//           },
//           card: {
//             DEFAULT: "hsl(var(--card))",
//             foreground: "hsl(var(--card-foreground))",
//           },
//         },
//         fontFamily: {
//           "16-regular": "var(--16-regular-font-family)",
//           "18-regular": "var(--18-regular-font-family)",
//           "32-semibold": "var(--32-semibold-font-family)",
//           "medium-14": "var(--medium-14-font-family)",
//           "semibold-16": "var(--semibold-16-font-family)",
//           "text-lg-regular": "var(--text-lg-regular-font-family)",
//           "text-sm-semibold": "var(--text-sm-semibold-font-family)",
//           "text-xl-semibold": "var(--text-xl-semibold-font-family)",
//           sans: [
//             "ui-sans-serif",
//             "system-ui",
//             "sans-serif",
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"',
//             '"Noto Color Emoji"',
//           ],
//         },
//         boxShadow: {
//           "drop-shadow-1": "var(--drop-shadow-1)",
//           "shadow-hard-small": "var(--shadow-hard-small)",
//           "shadow-soft-extra-small": "var(--shadow-soft-extra-small)",
//         },
//         borderRadius: {
//           lg: "var(--radius)",
//           md: "calc(var(--radius) - 2px)",
//           sm: "calc(var(--radius) - 4px)",
//         },
//         keyframes: {
//           "accordion-down": {
//             from: { height: "0" },
//             to: { height: "var(--radix-accordion-content-height)" },
//           },
//           "accordion-up": {
//             from: { height: "var(--radix-accordion-content-height)" },
//             to: { height: "0" },
//           },
//         },
//         animation: {
//           "accordion-down": "accordion-down 0.2s ease-out",
//           "accordion-up": "accordion-up 0.2s ease-out",
//         },
//       },
//       container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
//     },
//     plugins: [],
//     darkMode: ["class"],
//   };
  



