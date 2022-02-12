import React,{useState,useEffect,useRef,useContext}from 'react'
import Results from "./Results"
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { TextField } from '@mui/material'
import { dataContext } from '../context';

const Search = () => {
    const[[Data,setData],[songName, setsongName]]=useContext(dataContext);
    const [inputval, setinputval] = useState("")

    const handleChange = (e) => {
        setinputval(e.target.value);
    }
    const Search=()=>{
const song=inputval.toString().trim();
        setsongName(song);
        setinputval("")

    }
  return (
    <>
    
    <Box sx={{my:2 , display:'flex' ,justifyContent:'center'}}>
    <TextField id="outlined-basic"  label="Enter Song or Artist Name" variant="outlined" value={inputval} onChange={handleChange}   />
    <Button variant="contained" color="primary" onClick={Search} >Search</Button>
    </Box>
 <Results/>

    </>
  )
}

export default Search