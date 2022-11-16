import { FC, useState } from 'react';
import { Grid, CardActionArea, Box, Typography } from '@mui/material';
import { RickAndMorty, RickAndMortyListResponse, SmallEpisodies, SmallRM } from '../../interface';
import Modal from '@mui/material/Modal';

import confetti from 'canvas-confetti';
interface Props {
  episodeItem : SmallEpisodies;
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

export const FavoritesEpisodies:FC<Props> = ({episodeItem}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
        <Grid item xs={12} sm={2} key={`key${episodeItem.id}`}>
        <CardActionArea onClick={handleOpen} key={`cardKey${episodeItem.id}`}>
          <Typography id="modal-modal-title" variant="h6" component="h6">
              {episodeItem.episode}
          </Typography>
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
          </Grid>
          <Grid item sm={8} sx={{ paddingLeft:'2rem' }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`air_date : ${episodeItem.air_date}`}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
            {`episode : ${episodeItem.episode}`}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
            {`name : ${episodeItem.name}`}
          </Typography>

          </Grid>
          </Grid>
        </Box>
      </Modal>
        </Grid>
  )
}





