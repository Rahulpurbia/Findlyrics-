import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const dataContext = createContext();
export const Context = (props) => {
  const [Data, setData] = useState({});
  const [Lyrics, setLyrics] = useState(" Sorry! No Lyrics for this one.");

  const [songName, setsongName] = useState("");
  // *************************************************
  //getting suggestions for song or artist name

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSuggestion();
  }, [songName]);
  // ***********************************************
  //searching and getting lyrics for chosen option

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
        let newdata = lyrics.split("\n").map((str, index) => (
          <span key={index}>
            {str}
            <br />
          </span>
        ));

        setLyrics(newdata);
      })
      .catch((error) => {
        setLyrics(
          <span style={{ fontSize: "7vmin" }}>
            Sorry! No lyrics for this one{" "}
          </span>
        );
      });
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
