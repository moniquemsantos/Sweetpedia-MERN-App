import { useState, useEffect } from "react";
import { getToken } from "../utils/getToken";
import { Grid, Typography } from "@mui/material";

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
      <Grid>
        <Typography component={"span"} variant={"body2"}>
          {" "}
          Welcome {userProfile?.userName}
        </Typography>

        <Typography component={"span"} variant={"body1"}>
          {" "}
          User Details{" "}
        </Typography>
        <Typography component={"span"} variant={"body2"}>
          Email: {userProfile?.email}
        </Typography>
        <Typography component={"span"} variant={"body2"}>
          Username:{userProfile?.userName}
        </Typography>
      </Grid>
      <Grid>
        {userProfile && (
          <img
            src={userProfile.userPicture}
            alt="Avatar"
            style={{ width: "152px" }}
          ></img>
        )}
      </Grid>
    </>
  );
};

export default Profile;
