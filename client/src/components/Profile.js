import { useState, useEffect } from "react";
import { getToken } from "../utils/getToken";
import ProfileNavegation from "./ProfileNavegation";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const token = getToken();
      if (token) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
        };
        try {
          const response = await fetch(
            "http://localhost:5000/api/users/profile",
            requestOptions
          );
          const result = await response.json();
          console.log("result>>", result);
          setUserProfile({
            userName: result.user.userName,
            email: result.user.email,
            userPicture: result.user.userPicture,
          });
          console.log("userProfile", userProfile);
        } catch (error) {
          console.log("error", error);
        }
      }
    };
    getProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        <ProfileNavegation />
      </div>
      <h1> Welcome {userProfile?.userName}</h1>

      {userProfile && (
        <img
          src={userProfile.userPicture}
          alt="Avatar"
          style={{ width: "152px" }}
        ></img>
      )}
      <h2> User Details </h2>
      <p>Email: {userProfile?.email}</p>
      <p>Username:{userProfile?.userName}</p>
    </>
  );
};

export default Profile;
