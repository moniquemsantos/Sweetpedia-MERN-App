import { useState } from "react";
import { getToken } from "../utils/getToken";
import { BtnStyle } from "../styles/addRecipe";
import { Grid, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const SubmitRecipeForm = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [newRecipe, setNewRecipe] = useState({});

  const handleInputChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const addNewRecipe = async () => {
    const token = getToken();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", newRecipe.title);
    urlencoded.append("category", newRecipe.category);
    urlencoded.append("ingredients", newRecipe.ingredients);
    urlencoded.append("instructions", newRecipe.instructions);
    urlencoded.append("readyIn", newRecipe.readyIn);
    urlencoded.append("image", newRecipe.recipePicture);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/recipes/addrecipe", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleAttachRecipePicture = (e) => {
    setSelectFile(e.target.files[0]);
  };
  const submitRecipePicture = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", selectFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(
      "http://localhost:5000/api/recipes/image-recipe-upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setNewRecipe({ ...newRecipe, recipePicture: result.recipePicture });
      })

      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Typography component={"div"}>New Recipe</Typography>

      <Grid>
        <TextField
          required
          variant="outlined"
          label="Tittle"
          type="text"
          name="title"
          id="title"
          margin="normal"
          fullWidth
          onChange={handleInputChange}
        />

        <TextField
          required
          variant="outlined"
          type="text"
          label="Category"
          name="category"
          id="category"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />

        <TextField
          required
          variant="outlined"
          multiline
          label="Ingredients"
          type="text"
          name="ingredients"
          id="ingredients"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />

        <TextField
          required
          variant="outlined"
          label="Instructions"
          type="text"
          name="instructions"
          id="instructions"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />

        <TextField
          required
          variant="outlined"
          label="Ready In"
          type="text"
          name="readyIn"
          id="readyIn"
          fullWidth
          margin="normal"
          onChange={handleInputChange}
        />
      </Grid>

      <form>
        <input
          type="file"
          name="file"
          onChange={handleAttachRecipePicture}
        ></input>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={submitRecipePicture}
        >
          <PhotoCamera />
        </IconButton>
      </form>

      <BtnStyle onClick={addNewRecipe} type="submit" variant="contained">
        Submit Recipe
      </BtnStyle>
    </>
  );
};

export default SubmitRecipeForm;
