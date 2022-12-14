import { NextPage } from "next";

import { Layout } from '../../components/layout/Layout';
import { Grid } from '@mui/material/';
import { GetServerSideProps } from 'next'
import { ramApi } from "../../api";
import { SmallRM } from "../../interface";
import { EpisodiesCard } from '../../components/rickAndMorty/EpisodiesCard';
import { useRouter } from 'next/router';


interface Props{
    itemRAM:SmallRM;
    query:string;
}

const SearchEpisodePage: NextPage<Props> = ({itemRAM,query}) => {
    
   
    return (
        <Layout title={query}>
            <Grid container spacing={2}>
            {itemRAM.results.map((item:any,i) => (
                <EpisodiesCard rickAndMorty={item} key={i}/>
            ))}
            </Grid>
        </Layout>
    )
}




export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const { query = '' } = params as {query:string} 
 
    try {
        const { data } = await ramApi.get<SmallRM[]>(`/episode/?episode=${query}`);
        return {
            props: {
                itemRAM:data,
                query: query
            }
        }
    } catch (error) {
        return {
            props: {
                itemRAM:'[{results:[]}]'
            }
        }
    }
    
  

}

export default SearchEpisodePage;