import { useState } from "react";
import { RecipeContainer } from "../styles/addRecipe";

function NewRecipe() {
  const [selectFile, setSelectFile] = useState(null);
  const [newRecipe, setNewRecipe] = useState({});

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

  const handleInputChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
    console.log("e.target.name, e.target.value", e.target.name, e.target.value);
  };

  const addNewRecipe = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", newRecipe.title);
    urlencoded.append("category", newRecipe.category);
    urlencoded.append("ingredients", newRecipe.ingredients);
    urlencoded.append(
      "instructions",

      newRecipe.instructions
    );
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

  return (
    <div>
      <h1>Submit New Recipe</h1>
      <div>
        <RecipeContainer>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleInputChange}
          ></input>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="category"
            id="category"
            onChange={handleInputChange}
          ></input>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            onChange={handleInputChange}
          ></input>
          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="text"
            name="instructions"
            id="instructions"
            onChange={handleInputChange}
          ></input>
          <label htmlFor="instructions">Instructions</label>
          <input
            type="text"
            name="readyIn"
            id="readyIn"
            onChange={handleInputChange}
          ></input>
          <label htmlFor="readyIn">Ready In</label>
          <button onClick={addNewRecipe}>Submit Recipe</button>
        </RecipeContainer>
      </div>
      <form>
        <input
          type="file"
          name="file"
          onChange={handleAttachRecipePicture}
        ></input>
        <button onClick={submitRecipePicture}>upload</button>
      </form>
      <div>
        {newRecipe && (
          <img src={newRecipe.recipePicture} alt="" width={"500px"} />
        )}
      </div>
    </div>
  );
}

export default NewRecipe;
