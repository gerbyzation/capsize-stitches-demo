import * as React from "react";
import { styled, global } from "../stitches.config";
import { CapsizeText } from "../components";

const globalStyles = global({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Asap&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Asap&family=Titan+One&display=swap')"
  ],
  body: {
    margin: 0
  }
});

const Box = styled("div", {});

const TextBox = styled("div", {
  background: "lightgrey"
});

export default function App() {
  globalStyles();
  return (
    <Box css={{ margin: "$3" }}>
      <TextBox>
        <CapsizeText size="xl">Hello, from Stitches.</CapsizeText>
      </TextBox>
      <TextBox>
        <CapsizeText size="2xl">For full documentation, visit</CapsizeText>
      </TextBox>
      <TextBox>
        <CapsizeText fontFamily="asap" size="2xl">
          For full documentation, visit
        </CapsizeText>
      </TextBox>
    </Box>
  );
}
