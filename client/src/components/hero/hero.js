import { Typography } from "@mui/material";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroImage,
} from "../../styles/hero";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroImage src="/images/banner/banner.png" />
      <HeroContent>
        <Typography variant="h6">Welcome to</Typography>
        <HeroTitle variant="h2">Sweetpedia</HeroTitle>
        <HeroDescription variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </HeroDescription>
      </HeroContent>
    </HeroContainer>
  );
}
