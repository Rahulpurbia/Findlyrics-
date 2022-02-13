import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { dataContext } from "../context";
export const Lyrics = () => {
  const [
    [Data, setData],
    [songName, setsongName],

    [Lyrics, setLyrics],
    findLyrics,
  ] = useContext(dataContext);

  return (
    <>
      <Box>
        <Card
          style={{
            backgroundImage:
              "url(https://wallpapercave.com/dwp1x/wp6272616.jpg",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: "3.5vmin", mt: "9vmin", mx: "auto" }}
              color="text.secondary"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              {Lyrics}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Box>
    </>
  );
};
