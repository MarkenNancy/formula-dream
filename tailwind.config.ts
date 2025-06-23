import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        root: "clamp(0.95rem, 1.9vmin, 14.25rem)",
      },
      fontFamily: {
        title: "Magistral",
        inter: "Magistral",
        body: "Magistral",
      },
        clipPath: {
      'arc-bottom': 'ellipse(100% 90% at 50% 100%)',
    },
      // backgroundImage: {
      //   // gradientBtn:
      //   //   "linear-gradient(90deg, rgba(227,89,42,1) 0%, rgba(75,27,196,1) 100%)",
      //   gradientEnd: "linear-gradient(180deg, #ffffff 0%, #F5F5F5 100%)",
      //   check: "url('/images/check.svg')",
      // },
      //  backgroundImage: {
      //   gradientEnd: 'linear-gradient(180deg, #D95C01 0%, #000000 112.07%)',
      //   check: "url('/images/check.svg')",
      // },
      colors: {
        primary: {
          DEFAULT: "#4B1BC4",
          100: "#5420AF",
          200: "#0B0824",
        },
        secondary: {
          // DEFAULT: "#E3592A",
          DEFAULT: "#D75372",
          // 100: "#D75372",
        },
      },
      boxShadow: {
        100: "0 0 0.625rem 0 #0000001A",
      },
      animation: {
        'reverse-spin-medium': 'reverse-spin 25s linear infinite',

        gradientMove: "gradientMove 3s infinite linear",
        bounceIcon: "bounceIcon 3s infinite linear",
        scroll: 'scroll 20s linear infinite',

      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        bounceIcon: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0.4rem)" },
          "100%": { transform: "translateY(0)" },
        },

        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      spacing: {
        container: "82.75rem",
        "container-right": "calc(82.75rem + (50vw - 41.375rem))",
        "container-left": "calc(82.75rem + (50vw - 41.375rem))",

        "container-sm": "72.625rem",
        "container-sm-right": "calc(72.625rem + (50vw - 36.3125rem))",
        "container-sm-left": "calc(72.625rem + (50vw - 36.3125rem))",
      },

    },
  },
  plugins: [],
} satisfies Config;
