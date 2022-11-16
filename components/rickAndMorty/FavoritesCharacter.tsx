import { FC, useState } from 'react';
import {CardActionArea, Typography, Card, Grid, Modal, Box } from '@mui/material/';
import { SmallRM } from '../../interface';


interface Props {
  rickAndMorty : SmallRM[];
}
export const FavoritesCharacter:FC<Props> = ({rickAndMorty}) => {

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
  <>
    {
    rickAndMorty.map(rickAndMorty => (
        <Grid item xs={12} sm={3} key={`gridKey${rickAndMorty.id}`}>
          <CardActionArea onClick={handleOpen} key={`cardKey${rickAndMorty.id}`}>
            <Card>
                <img
                  src={`https://rickandmortyapi.com/api/character/avatar/${rickAndMorty.id}.jpeg`}
                  srcSet={`https://rickandmortyapi.com/api/character/avatar/${rickAndMorty.id}.jpeg`}
                  alt={'no hay favoritos'}
                  loading="lazy"
                />
            </Card>
          </CardActionArea>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                <Grid container spacing={2}>

                  <Grid item sm={12} sx={{ paddingLeft:'2rem' }}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {`name : ${rickAndMorty.name}`}
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    
                    {`species : ${rickAndMorty.species}`}
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {`status : ${rickAndMorty.status}`}
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {`location : ${rickAndMorty.location.name}`}
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {`gender : ${rickAndMorty.gender}`}
                  </Typography>


                  </Grid>
                </Grid>
              </Box>
          </Modal>
        </Grid>   
    
        ))
    }
    </>
  )
  }
    
  

