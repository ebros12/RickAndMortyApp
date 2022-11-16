import { FC } from 'react';
import { Grid, CardActionArea, Box, Typography } from '@mui/material';
import Link from 'next/link';
import Chip from '@mui/material/Chip';
interface Props {
  rickAndMorty : number[];
}


export const FavoritesEpisodies:FC<Props> = ({rickAndMorty}) => {

  
  return (
    <>
    {
    rickAndMorty.map(rickAndMorty => (
        <Grid item xs={12} sm={2} key={`key${rickAndMorty}`}>
          {
              
          }
          <Link href={`SearchEpisode/E${rickAndMorty <= 9 ? `0${rickAndMorty}`: rickAndMorty}`}>
            <CardActionArea  key={`cardKey${rickAndMorty}`}>
            
              <Typography id="modal-modal-title" variant="h6" component="h6">
              <Chip label={`EP : ${rickAndMorty}`} variant="outlined" />
              </Typography>
            </CardActionArea>
          </Link>

        </Grid>
  ))
  }
  </>
  )
}





