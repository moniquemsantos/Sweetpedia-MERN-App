import { useState } from "react";

function SignUp() {
  // Check email format, password lenght ...avoid making useless requests to the server
  const [selectFile, setSelectFile] = useState(null);
  const [newUser, setNewUser] = useState({});

  const handleAttachPicture = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const submitPicture = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", selectFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://localhost:5000/api/users/imageUpload", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        setNewUser({ ...newUser, userPicture: result.userPicture });
      })
      .catch((error) => console.log("error", error));
  };

  const handleInputChange = (e) => {
    //console.log("e.target.name, e.target.value", e.target.name, e.target.value);
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const signUp = async () => {
    const urlencoded = new URLSearchParams();
    urlencoded.append("userName", newUser.userName);
    urlencoded.append("email", newUser.email);
    urlencoded.append("password", newUser.password);
    urlencoded.append(
      "userPicture",
      newUser.userPicture
        ? newUser.userPicture
        : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
    );
    var requestOptions = {
      method: "POST",
      body: urlencoded,
    };

    fetch("http://localhost:5000/api/users/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div className="container">
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={handleInputChange}
        />
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleInputChange}
        />
        <label htmlFor="email">email</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
        />
        <label htmlFor="password">password</label>
      </div>
      <form>
        <input type="file" name="file" onChange={handleAttachPicture} />
        <button onClick={submitPicture}>Upload</button>
      </form>
      <button onClick={signUp}>Sign Up</button>
      <div>{newUser && <img src={newUser.userPicture} alt="" />}</div>
    </div>
  );
}

export default SignUp;
