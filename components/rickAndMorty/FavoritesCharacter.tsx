import { FC } from 'react';
import {CardActionArea, Card, Grid } from '@mui/material/';



interface Props {
  rickAndMorty : number[];
}
export const FavoritesCharacter:FC<Props> = ({rickAndMorty}) => {

  
  return (
  <>
    {
    rickAndMorty.map(rickAndMorty => (
        <Grid item xs={12} sm={3} key={`gridKey${rickAndMorty}`}>
          <CardActionArea key={`cardKey${rickAndMorty}`}>
            <Card>
                <img
                  src={`https://rickandmortyapi.com/api/character/avatar/${rickAndMorty}.jpeg`}
                  srcSet={`https://rickandmortyapi.com/api/character/avatar/${rickAndMorty}.jpeg`}
                  alt={'no hay favoritos'}
                  loading="lazy"
                />
            </Card>
          </CardActionArea>

        </Grid>   
    
        ))
    }
    </>
  )
  }
    
  

