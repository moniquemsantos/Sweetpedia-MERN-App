import styled from "@emotion/styled";
import { Container } from "@mui/system";

//recipeContainer
export const RecipeContainer = styled(Container)(() => ({
  backgroundColor: "white",
  border: "solid 1px rgba(0,0,0,0.3)",
  padding: "0.5em 1em",
  display: "flex",
  flexDirection: "row",
  alignItens: "center",
  justifyContent: "space - between",
  gap: "0.5em",
  marginBottom: "0.5em",
}));
