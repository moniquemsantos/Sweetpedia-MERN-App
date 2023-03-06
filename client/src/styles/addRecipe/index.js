import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Colors } from "../theme";

export const BtnStyle = styled(Button)(() => ({
  margin: "8px 0",
  backgroundColor: Colors.primary,
  color: "white",
}));
