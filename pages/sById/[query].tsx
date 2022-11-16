import { NextPage } from "next";

import { Layout } from '../../components/layout/Layout';
import { Typography, CardActionArea, Card, Grid, CardContent, CardMedia } from '@mui/material/';
import { GetServerSideProps } from 'next'
import { ramApi } from "../../api";
import { SmallRM } from "../../interface";
import { SearchCharacter } from '../../components/rickAndMorty/SearchCharacter';
import { useRouter } from 'next/router';
import { NoFavoritos } from "../../components/ui";

interface Props{
    itemRAM:SmallRM;
    query:string;
}
const SearchPageById: NextPage<Props> = ({itemRAM,query}) => {

    console.log(itemRAM);
    return (
        <Layout title={query}>
            <Grid container spacing={2}>
            
            {
            itemRAM?
            itemRAM.results.map((item:any,i) => (
                <SearchCharacter rickAndMorty={item} key={i}/>
            ))
            :<NoFavoritos />
            }
            
            </Grid>

        </Layout>
    )
}




export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const { query = '' } = params as {query:string} 
    try {
        const { data } = await ramApi.get<SmallRM>(`/character/?id=${query}`);
        return {
            props: {
                itemRAM:data,
                query: query
            }
        }
    } catch (error) {
        return {
            props: {
                itemRAM:false,
                query: query
            }
        }
    }
    

}

export default SearchPageById;