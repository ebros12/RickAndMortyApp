
import React, { useEffect } from 'react'
import { Layout } from '../../components/layout/Layout';
import { NoFavoritos } from '../../components/ui';
import { useState, FC } from 'react';
import { localFavoriteEpisodie, localFavorites } from '../../utils';
import { Grid, Card, CardActionArea } from '@mui/material';
import { FavoritesCharacter, FavoritesEpisodies} from '../../components/rickAndMorty';
import { ramApi } from '../../api';
import { SmallEpisodies, SmallRM } from '../../interface';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';



const FavoritesPage:NextPage = () => {

  const [favoriteRAM, setFavoriteRAM] = useState<number[]>([]);
  const [favoriteRAMEpisodies, setFavoriteRAMEpisodies] = useState<number[]>([]);

  useEffect(() =>{
    setFavoriteRAM(localFavorites.rickAndMorty());
    setFavoriteRAMEpisodies(localFavoriteEpisodie.rickAndMortyEpisode());
  },[])



  return (
    <Layout>
      <Grid container spacing={2}>
          <Grid item sm={8} key='fav1'>
          {
              favoriteRAM.length === 0
              ? (<NoFavoritos />)
              :<Grid container spacing={2}> 
                  <FavoritesCharacter rickAndMorty={favoriteRAM}/>
                </Grid>
          }
          </Grid>

          <Grid item sm={8} key='fav2'>
          {
              favoriteRAM.length === 0
              ? (<NoFavoritos />)
              :<Grid container spacing={2}> 
                  <FavoritesEpisodies rickAndMorty={favoriteRAMEpisodies}/>
                </Grid>
          }
          </Grid>

          </Grid>
    </Layout>
    
  )
}


export default FavoritesPage;