// @ts-nocheck
import React, { useEffect } from 'react'
import { Layout } from '../../components/layout/Layout';
import { NoFavoritos } from '../../components/ui';
import { useState, FC } from 'react';
import { localFavoriteEpisodie, localFavorites } from '../../utils';
import { Grid, Card, CardActionArea } from '@mui/material';
import { FavoritesCharacter, FavoritesEpisodies} from '../../components/rickAndMorty';
import { ramApi } from '../../api';
import { SmallEpisodies, SmallRM } from '../../interface';
import { GetStaticProps, NextPage } from 'next';

interface Props{
  rickAndMortyEpisode:SmallEpisodies[];
  rickAndMortyCharacter:SmallRM[];

}

const FavoritesPage:NextPage<Props> = ({rickAndMortyEpisode, rickAndMortyCharacter}) => {

  const [favoriteRAM, setFavoriteRAM] = useState<number[]>([]);
  const [favoriteRAMEpisodies, setFavoriteRAMEpisodies] = useState<number[]>([]);

  useEffect(() =>{
    setFavoriteRAM(localFavorites.rickAndMorty());
    setFavoriteRAMEpisodies(localFavoriteEpisodie.rickAndMorty());
  },[])

  const rickAndMortyFilterCharacter = favoriteRAM.map(item =>{
    
    return rickAndMortyCharacter.results.find((findItem:SmallRM) => findItem.id === item)
  });


  const rickAndMortyFilter = favoriteRAMEpisodies.map(item =>{
    return rickAndMortyEpisode.results.find((findItem:SmallEpisodies) => findItem.id === item)
  });


  return (
    <Layout>
      <Grid container spacing={2}>
          <Grid item sm={8} key='fav1'>
          {
              favoriteRAM.length === 0
              ? (<NoFavoritos />)
              :<Grid container spacing={2}> 
                  <FavoritesCharacter rickAndMorty={rickAndMortyFilterCharacter}/>
                </Grid>
          }
          </Grid>
          <Grid item sm={4} key='fav2'>
          {
              favoriteRAM.length === 0
              ? (<NoFavoritos />)
              
              : 
              <Grid container spacing={2}>
                {rickAndMortyFilter.map((rickAndMortyItem, i) =>(
                  <FavoritesEpisodies key={i} episodeItem={rickAndMortyItem} />
                ))}
                </Grid>
              
          }
          </Grid>
          </Grid>
    </Layout>
    
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const { data } = await ramApi.get<SmallEpisodies>(`/episode/?page=1`);
  const character = await ramApi.get<SmallEpisodies>(`/character/?page=1`);
  
  return {
      props: {
          rickAndMortyEpisode:data,
          rickAndMortyCharacter:character.data
      }
  }
}

export default FavoritesPage;