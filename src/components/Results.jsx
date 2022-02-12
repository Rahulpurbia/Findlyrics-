import React,{useState,useContext} from 'react'
import { dataContext } from '../context';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Results = () => {
    const[
        [Data, setData],
        [songName, setsongName],
      
        [Lyrics, setLyrics],findLyrics
      ]=useContext(dataContext);

const addLyrics=(songname,artistname,e)=>{
e.preventDefault();
setLyrics("No lyrics for this one");
findLyrics(songname,artistname);
// window.location = '/home/';
}
  return (
<>
<Box sx={{mt:'23px', display:'flex',width:"100%",justifyContent:"center", flexWrap:'wrap'}}>
    {
     Data.data?(
        Data.data.data.map((value)=>{
            return(
<Card sx={{ minWidth: 275, maxWidth:275,m:"10px" }} key={value.id}>
<CardMedia
        component="img"
        // height="140"
        image={value.album.cover_medium}
        alt="album cover"
       
            height="auto"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           
      <b>Song:</b>  {value.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <b> Artist: </b>{value.artist.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="outlined"  onClick={(e)=>addLyrics(value.title,value.artist.name,e)}><Link style={{textDecoration:"none"}} to="/lyrics">Get Lyrics</Link></Button>
      </CardActions>
    </Card>
            )
        })):<div>Enter a song or artist to find lyrics</div>
    }



</Box>
</>
  )
}

export default Results