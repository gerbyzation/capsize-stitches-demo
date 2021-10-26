import { createCss } from "@stitches/react";
import { capsizeFontMetrics } from "./capsize-stitches";

const TitanMetrics = {
  capHeight: 710,
  ascent: 970,
  descent: -175,
  lineGap: 0,
  unitsPerEm: 1000
};

const AsapMetrics = {
  capHeight: 700,
  ascent: 934,
  descent: -212,
  lineGap: 0,
  unitsPerEm: 1000
};

export const { theme, styled, css, global, getCssString } = createCss({
  theme: {
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px"
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px"
    },

    capHeights: {
      xs: 8,
      sm: 10,
      med: 12,
      lg: 16,
      xl: 20,
      "2xl": 24,
      "3xl": 32,
      "4xl": 40,
      "5xl": 48,
      "6xl": 64,
      "7xl": 80,
      "8xl": 96,
      "9xl": 112
    },
    lineGaps: {
      1: 4,
      2: 8,
      3: 16,
      4: 24,
      5: 32
    },
    lineGapMapping: {
      "9xl": 5,
      "8xl": 4,
      "7xl": 4,
      "6xl": 4,
      "5xl": 4,
      "4xl": 3,
      "3xl": 3,
      "2xl": 2,
      xl: 2,
      lg: 2,
      med: 2,
      sm: 1,
      xs: 1
    },
    fonts: {
      titan: "Titan One",
      asap: "Asap"
    },
    capsizeMetrics: {
      titan: capsizeFontMetrics(TitanMetrics),
      asap: capsizeFontMetrics(AsapMetrics)
    }
  }
});
