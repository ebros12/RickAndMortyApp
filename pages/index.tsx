import { NextPage } from "next";
import { GetStaticProps } from 'next'
import { ramApi } from "../api";
import { Layout } from '../components/layout/Layout';
import { SmallRM } from "../interface";


import {Grid,Button,Link, Box} from '@mui/material';
import { RickAndMortyCard } from "../components/rickAndMorty";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import  NextLink from 'next/link';

interface Props {
  rickAndMorty : SmallRM[];
}

const HomePage: NextPage<Props> = ({rickAndMorty}) => {


  return (
    <Layout title='Rick & Morty'>
        <Grid container spacing={1} sx={{ margin:'1rem' }}>
            <Box flex={1} />
            <Box>
              <Button variant="contained" endIcon={<ArrowRightIcon />}><NextLink href={`characters/1`} passHref>Pagina 2</NextLink></Button>
            </Box>
            <Box flex={1} />
        </Grid>
      <Grid container spacing={2}>
        {
          rickAndMorty.map((rickAndMortyItem) =>(
            <RickAndMortyCard key={rickAndMortyItem.id} rickAndMorty={rickAndMortyItem} />
          ))
        }
        
        </Grid>
        <Grid container spacing={1} sx={{ margin:'1rem' }}>
            <Box flex={1} />
            <Box>
              <Button variant="contained" endIcon={<ArrowRightIcon />}><NextLink href={`characters/2`} passHref>Pagina 2</NextLink></Button>
            </Box>
            <Box flex={1} />
        </Grid>
        
    </Layout>

  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await  ramApi.get<SmallRM>('/character/?page=2')

  
  return {
    props: {
      rickAndMorty:data.results
    }
  }
}
export default HomePage;
