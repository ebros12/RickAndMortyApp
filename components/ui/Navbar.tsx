import  NextLink from 'next/link';
import { AppBar, IconButton, Toolbar, Typography, Box, Button, Link, Input, InputAdornment } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext, useState } from 'react';
import { UIContext } from "../../context";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useRouter } from 'next/router';
import ClearIcon from '@mui/icons-material/Clear';

export const Navbar = () => {
  const {openSideMenu, closeSideMenu } = useContext(UIContext)
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const onSearchTerm = () => {
      if(searchTerm.trim().length === 0) return;
      
      if(router.asPath.includes('characters')){
          navigateTo(`/search/${searchTerm}`);
      }else if(router.asPath === `/search/${router.query.query}`){
          navigateTo(`/search/${searchTerm}`);
      }else if(router.asPath === ('/favoritos')){
          navigateTo(`/search/${searchTerm}`);
      }else {
          navigateTo(`/SearchEpisode/${searchTerm}`);
      }
      
  }
  const navigateTo = (url:string) => {
      router.push(url);
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
       
        <IconButton
          color="primary"
          size="large"
          edge="start"
          onClick={openSideMenu}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href='/' passHref>
          <Typography variant="h6" color="white">Rick & Morty</Typography>
        </NextLink>
        
        <Box flex={1} />

        <Box className='fadeIn' sx={{ display:isSearchVisible ? 'none' : {xs:'none', sm:'block'} }}>
          <NextLink href='/characters/1' passHref>
           
              <Button sx={{ color:'white' }}>Personajes</Button>
          
          </NextLink>

          <NextLink href='/episode/1' passHref>
           
              <Button sx={{ color:'white' }}>Capítulos</Button>
        
          </NextLink>


        </Box>
        <Box flex={1} />
        {
          isSearchVisible
          ?(
            <Input
              sx={{ padding:'1rem', 'none' : {xs:'none', sm:'flex'} }}
              className='fadeIn'
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
              type='text'
              placeholder="Buscar..."
              endAdornment={
                  <InputAdornment position="end">
                      <IconButton
                          onClick={() => setIsSearchVisible(false)}
                      >
                          <ClearIcon />
                      </IconButton>
                  </InputAdornment>
              }
            />
          ):(
            <IconButton
              onClick={() => setIsSearchVisible(true)}
              className="fadeIn"
              sx={{ display: {xs: 'none', sm:'flex'} }}
            >
              <SearchOutlinedIcon />
            </IconButton>
          )
        }

        <IconButton 
          sx={{ display: {xs: 'flex', sm:'none'} }}
          onClick={openSideMenu}
        >
            <SearchOutlinedIcon />
        </IconButton>

        <NextLink href='/favoritos' passHref>
            
              <Button sx={{ color:'white' }}>Favoritos</Button>
          
          </NextLink>
      </Toolbar>
        
    </AppBar>
  )
}