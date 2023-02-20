import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../styles/theme";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          background: Colors.primary,
          color: Colors.white,
          p: { xs: 4, md: 2 },
          fontSize: { xs: "12px", md: "14px" },
        }}
      >
        <Typography textAlign={"center"}>© 2023 Sweetpedia</Typography>
      </Box>
    </>
  );
}
