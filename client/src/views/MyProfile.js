import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import Profile from "../components/Profile";
import NewRecipe from "../components/NewRecipe";
import { PaperProfile } from "../styles/myProfile";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

const MyProfile = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <>
      <AppBar />
      <PaperProfile>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="My Account" />
          <Tab label="My Recipes" />
          <Tab label="New Recipe" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1}>
          My Recipes
        </TabPanel>
        <TabPanel value={value} index={2}>
          <NewRecipe />
        </TabPanel>
      </PaperProfile>
      <Footer />
    </>
  );
};

export default MyProfile;
