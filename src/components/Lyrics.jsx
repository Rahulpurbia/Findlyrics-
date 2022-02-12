import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { dataContext } from '../context';
export const Lyrics = () => {
    const[
        [Data, setData],
        [songName, setsongName],
        
        [Lyrics, setLyrics],findLyrics
      ]=useContext(dataContext);

  return (
    <>
    <Box>

    <Card sx={{ minWidth:"80vw",m:"10px",mt:"4vmin",p:"2vmin" }}>

      <CardContent>
        <Typography sx={{ fontSize: "3vmin" }} color="text.secondary" gutterBottom>
           {Lyrics}
     
        </Typography>
        
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </Box>
    </>
  )
}
