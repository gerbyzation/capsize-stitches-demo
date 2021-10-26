import { theme } from "../stitches.config";
import { createStyleObject } from "@capsizecss/core";

export function getFontMetrics(font: string): FontMetrics {
  return JSON.parse(theme.capsizeMetrics[font].value);
}

export function createVariant(
  capHeight: string,
  lineGap: number,
  font: string
) {
  const styles = createStyleObject({
    capHeight: Number(theme.capHeights[capHeight].value),
    lineGap: Number(theme.lineGaps[lineGap].value),
    fontMetrics: getFontMetrics(font)
  });

  return {
    fontSize: styles.fontSize,
    lineHeight: styles.lineHeight,
    "&::before": styles["::before"],
    "&::after": styles["::after"]
  };
}

export function createVariants() {
  const variants = {
    fontFamily: {},
    size: {}
  };
  const compoundVariants = [];

  for (const font in theme.fonts) {
    variants.fontFamily[font] = {
      fontFamily: `$${font}`
    };

    for (const size in theme.capHeights) {
      variants.size[size] = {};
      compoundVariants.push({
        fontFamily: font,
        size: size,
        css: {
          fontFamily: "$" + font,
          ...createVariant(size, theme.lineGapMapping[size].value, font)
        }
      });
    }
  }

  return {
    variants,
    compoundVariants,
    defaultVariants: {
      size: "2xl",
      fontFamily: "titan"
    }
  };
}

export interface FontMetrics {
  capHeight: number;
  ascent: number;
  descent: number;
  lineGap: number;
  unitsPerEm: number;
}

export type CapsizeFontMetrics = string;

export function capsizeFontMetrics(metrics: FontMetrics): CapsizeFontMetrics {
  return JSON.stringify(metrics);
}
