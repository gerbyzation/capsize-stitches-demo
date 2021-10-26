import { styled } from "../stitches.config";
import { createVariants } from "../capsize-stitches";

console.log({ ...createVariants() });

export const CapsizeText = styled("p", {
  fontFamily: "$titan",

  // variants: {
  //   size: {
  //     "2xl": {
  //       ...createVariant("2xl", 2, "titan")
  //     }
  //   },
  //   fontFamily: {
  //     asap: {
  //       fontFamily: "$asap"
  //     }
  //   }
  // },
  // variants: createVariants().variants,

  // compoundVariants: createVariants().compoundVariants

  ...createVariants()
});
