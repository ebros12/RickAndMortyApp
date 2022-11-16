import { FC, useState } from "react";
import { RickAndMorty, RickAndMortyListResponse, SmallRM } from "../../interface";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import { localFavorites } from "../../utils";
import confetti from 'canvas-confetti';
import Button from '@mui/material/Button';
import GradeIcon from '@mui/icons-material/Grade';

  interface Props {
    rickAndMorty : SmallRM;
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

  export const RickAndMortyCard:FC<Props> = ({rickAndMorty}) => {
    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existRamFavorites(rickAndMorty.id))
    const onToggleFavorites = () => {
      localFavorites.toggleFavorites(rickAndMorty.id)
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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Grid item xs={12} sm={2} >
        <CardActionArea onClick={handleOpen}>
          <Card sx={{ maxWidth: 345,minHeight: 280 }}>
          <CardMedia
              component="img"
              height="140"
              image={rickAndMorty.image}
              alt={rickAndMorty.name}
          />
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {rickAndMorty.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {rickAndMorty.origin.name === "unknown" ? "Sin planeta conocido" : rickAndMorty.origin.name}
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
          <Grid item sm={4}>
            <CardMedia
                component="img"
                height="100%"
                image={rickAndMorty.image}
                alt={rickAndMorty.name}
            />
          </Grid>
          <Grid item sm={8} sx={{ paddingLeft:'2rem' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`Species : ${rickAndMorty.species}`}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
            {`Status : ${rickAndMorty.status}`}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
            {`Location : ${rickAndMorty.location.name}`}
          </Typography>
          <Button 
              sx={{float:'right', marginBottom:'1rem', backgroundColor:"transparent"}} 
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
