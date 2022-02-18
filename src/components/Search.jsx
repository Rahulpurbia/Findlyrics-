import React, { useState, useEffect, useRef, useContext } from "react";
import Results from "./Results";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { dataContext } from "../context";

const Search = () => {
  const [[Data, setData], [songName, setsongName], [Message, setMessage]] =
    useContext(dataContext);
  const [inputval, setinputval] = useState("");

  const handleChange = (e) => {
    setinputval(e.target.value);
  };
  const Search = () => {
    setData([]);
    setMessage(`Please Wait ....Getting Suggestions`);
    const song = inputval.toString().trim();
    setsongName(song);
    setinputval("");
    console.log(Message);
  };
  return (
    <>
      <Box
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/thumb/1162772.jpg",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundAttachment: "fixed",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            sx={{ mt: 15 }}
            id="outlined-basic"
            label="Enter Song or Artist Name"
            variant="outlined"
            value={inputval}
            onChange={handleChange}
          />
          <Button
            sx={{ mt: 15, ml: 1.5 }}
            variant="contained"
            color="primary"
            onClick={Search}
          >
            Search
          </Button>
        </Box>
        <Results />
      </Box>
    </>
  );
};

export default Search;
