import { FC, useState } from 'react';

import {CardContent, Typography, Button, CardActionArea, Card, Grid, Modal, Box } from '@mui/material/';

import GradeIcon from '@mui/icons-material/Grade';

import { SmallEpisodies } from "../../interface";
import favoriteEpisodie from '../../utils/favoriteEpisodie';

import confetti from 'canvas-confetti';

interface Props {
    rickAndMorty : SmallEpisodies;
  }
  export const EpisodiesCard:FC<Props> = ({rickAndMorty}) => {
    const [isInFavorites, setIsInFavorites] = useState(favoriteEpisodie.existRamFavorites(rickAndMorty.id))
    const onToggleFavorites = () => {
      favoriteEpisodie.toggleFavoritesEpisodies(rickAndMorty.id)
      setIsInFavorites(!isInFavorites)

      if(isInFavorites)  return;
      confetti({
        zIndex:999999999999999,
        particleCount:100,
        spread:160,
        angle:-100,
        origin:{
          x:1,
          y:0,
        }
      })
    }
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
      <Grid item xs={12} sm={1} >
        <CardActionArea onClick={handleOpen}>
          <Card sx={{ maxWidth: 345,minHeight: 10 }}>
          <CardContent>
              <Typography variant="body2" color="text.secondary" >
              {rickAndMorty.episode}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ minHeight: 80 }}>
              {rickAndMorty.name }
              </Typography>
              <br/><hr /><br/>
              <Typography variant="body2" color="text.secondary" sx={{ minHeight: 38 }}>
              {rickAndMorty.air_date }
              </Typography>
          </CardContent>
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

          <Grid item sm={8} sx={{ paddingLeft:'2rem' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`air_date : ${rickAndMorty.air_date}`}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
            {`episode : ${rickAndMorty.episode}`}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
            {`name : ${rickAndMorty.name}`}
          </Typography>

          </Grid>
          <Grid item sm={4}>
          <Button 
              sx={{float:'right', marginBottom:'1rem'}} 
              onClick={onToggleFavorites}
              variant={!isInFavorites?'contained':'outlined'}
             
          >
            <GradeIcon htmlColor={!isInFavorites?'gray':'gold'}/>
          </Button>
          </Grid>
          </Grid>
        </Box>
      </Modal>
          
      </Grid>
    )
  }
