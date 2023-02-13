import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroImage,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeroContainer>
      <HeroImage src="/images/banner/banner.png" />
      <HeroContent>
        <Typography variant="h6">Collection</Typography>
        <HeroTitle variant="h2">Recipes</HeroTitle>
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
