import  NextLink from 'next/link';

import {Card, CardContent, Typography, Box, Grid} from '@mui/material';

export const NoFavoritos = () => {
  return (
    
    
      <Grid container spacing={1} sx={{ margin:'1rem' }}>
        <Box flex={1} />
        <Box>
        <Card sx={{ maxWidth: 345,minHeight: 10 }}>
          <Typography sx={{ textAlign:'center' }}>UPS... no encontramos tu busqueda</Typography>
          <img
            src={`https://i.pinimg.com/originals/29/bd/26/29bd261d201e956588ee777d37d26800.gif`}
            srcSet={`https://i.pinimg.com/originals/29/bd/26/29bd261d201e956588ee777d37d26800.gif`}
            alt={'no hay favoritos'}
            loading="lazy"
          />
          </Card>
          <NextLink href='/' passHref>Volver al Home</NextLink>
        </Box>
        <Box flex={1} />
      </Grid>
    
  )
}
