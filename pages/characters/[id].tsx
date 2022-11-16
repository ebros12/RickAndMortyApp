// @ts-nocheck
import React from 'react'

import { NextPage } from 'next';
import { useRouter } from 'next/router'

import { GetStaticPaths, GetStaticProps } from 'next'

import {Grid, Box, Link, Button} from '@mui/material';

import { ramApi } from '../../api';
import { Layout } from '../../components/layout/Layout';
import { RickAndMortyCard } from '../../components/rickAndMorty';
import { RickAndMortyListResponse, SmallRM } from '../../interface';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import  NextLink from 'next/link';


interface Props {
    rickAndMorty:SmallRM;
}

const CharacterPage: NextPage<Props> = ({rickAndMorty}) => {

const {query} = useRouter()
const nextPage = parseInt(query.id !== undefined?query.id.toString():'')+1;
const prevPage = parseInt(query.id !== undefined?query.id.toString():'')-1;

  return (
    <Layout title='Rick & Morty'>
      <Grid container spacing={1} sx={{ margin:'1rem' }}>
      <Box flex={1} />

      <Box>
        {
          prevPage >= 1 ? <Button variant="contained" startIcon={<ArrowLeftIcon />}><NextLink href={`/characters/${prevPage}`} passHref>Pagina {prevPage}</NextLink></Button> : ""
        }
        {
          nextPage <= rickAndMorty.info.pages ? <Button variant="contained" endIcon={<ArrowRightIcon />}><NextLink href={`/characters/${nextPage}`} passHref>Pagina {nextPage}</NextLink></Button> : ""  
        }
      </Box>
      <Box flex={1} />
      </Grid>
      <Grid container spacing={2}>
        {
          rickAndMorty.results.map((rickAndMortyItem,i) =>(
            <RickAndMortyCard key={i} rickAndMorty={rickAndMortyItem} />
          ))
        }
        </Grid>

        <Grid container spacing={1} sx={{ margin:'1rem' }}>
            <Box flex={1} />

            <Box>
              {
                prevPage >= 1 ? <Button variant="contained" startIcon={<ArrowLeftIcon />}><NextLink href={`/characters/${prevPage}`} passHref>Pagina {prevPage}</NextLink></Button> : ""
              }
              {
                nextPage <= rickAndMorty.info.pages ? <Button variant="contained" endIcon={<ArrowRightIcon />}><NextLink href={`/characters/${nextPage}`} passHref>Pagina {nextPage}</NextLink></Button> : ""  
              }
            </Box>
            <Box flex={1} />
        </Grid>
      
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pagination =  [...Array(42)].map((value, index) => `${index + 1}`); 

    return {
        paths: pagination.map(id => ({
            params:{id}
        })),
        fallback: false
    }
} 




export const getStaticProps: GetStaticProps = async ({params}) => {
    const { id } = params as { id: string };
    const { data } = await ramApi.get<RickAndMortyListResponse>(`/character/?page=${id}`);
    return {
        props: {
            rickAndMorty:data
        }
    }
}

export default CharacterPage;