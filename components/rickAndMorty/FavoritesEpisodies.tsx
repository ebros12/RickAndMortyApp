import { FC } from 'react';
import { Grid, CardActionArea, Box, Typography } from '@mui/material';

interface Props {
  rickAndMorty : number[];
}


export const FavoritesEpisodies:FC<Props> = ({rickAndMorty}) => {

  
  return (
    <>
    {
    rickAndMorty.map(rickAndMorty => (
        <Grid item xs={12} sm={2} key={`key${rickAndMorty}`}>
          <CardActionArea  key={`cardKey${rickAndMorty}`}>
            <Typography id="modal-modal-title" variant="h6" component="h6">
                {`episodie : ${rickAndMorty}`}
            </Typography>
          </CardActionArea>
        </Grid>
  ))
  }
  </>
  )
}





