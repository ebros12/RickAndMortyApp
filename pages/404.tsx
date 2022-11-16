import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Box, Typography } from '@mui/material';
import { NoFavoritos } from '../components/ui';

const custom404 = () => {
  return (
    <Layout title='Oops'>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100hv - 200px)'>
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200} >404</Typography>
            <Typography marginLeft={2} >No Encontrado</Typography>
            
        </Box>
        <NoFavoritos />
    </Layout>
  )
}

export default custom404