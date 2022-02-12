import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const dataContext = createContext();
export const Context = (props) => {
  const [Data, setData] = useState({});

  const [Lyrics, setLyrics] = useState(" Sorry! No Lyrics for this one.");
  const [songName, setsongName] = useState("");
  const getSuggestion = () => {
    if (songName === "") {
      return;
    }
    const baselink = "https://api.lyrics.ovh";
    axios
      .get(`${baselink}/suggest/${songName}`)
      .then((response) => {
        setData(response);
        setsongName("");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSuggestion();
  }, [songName]);
  // ***********************************************

  const findLyrics = (gaananame, artistname) => {
    if (!gaananame || !artistname) {
      console.log("Some Error Occured ! Please restart the app");
      return;
    }
    const baselink = "https://api.lyrics.ovh";
    axios
      .get(`${baselink}/v1/${artistname}/${gaananame}`)
      .then((response) => {
        let lyrics = response.data.lyrics;
        let newdata = lyrics.split("\n").map((str) => (
          <>
            {str}
            <br />
          </>
        ));
        console.log(newdata);
        setLyrics(newdata);

        console.log(typeof lyrics);
      })
      .catch((error) => {
        setLyrics("No lyrics for this one ");
        console.log("No lyrics for this one sorry");
      });
    // console.log("inside findlyrics");
  };

  return (
    <>
      <dataContext.Provider
        value={[
          [Data, setData],
          [songName, setsongName],

          [Lyrics, setLyrics],
          findLyrics,
        ]}
      >
        {props.children}
      </dataContext.Provider>
    </>
  );
};
