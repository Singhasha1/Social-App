import React from 'react';
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Navbar";
import Feed from "./Component/Feed";
import Rightbar from "./Component/Rightbar";
import Add from "./Component/Add";
import { Box, Stack, createTheme} from '@mui/material';
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const[mode, setMode] = useState("light");

  const darkTheme= createTheme({
    palette:{
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"} >
      <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
   <Sidebar setMode={setMode} mode={mode}/>
   <Feed/>
   <Rightbar/>
      </Stack>
        <Add/>
   </Box>
   </ThemeProvider>
  );
}

export default App;
