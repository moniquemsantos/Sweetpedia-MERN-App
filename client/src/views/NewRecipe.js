import { useState } from "react";

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

  return (
    <div>
      <h1>Submit New Recipe</h1>
      <form>
        <input
          type="file"
          name="file"
          onChange={handleAttachRecipePicture}
        ></input>
        <button onClick={submitRecipePicture}>upload</button>
      </form>
      <div>{newRecipe && <img src={newRecipe.recipePicture} alt="" width={"500px"} />}</div>
    </div>
  );
}

export default NewRecipe;
