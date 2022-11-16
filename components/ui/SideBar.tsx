import { useContext, useState } from 'react';

import { useRouter } from 'next/router';

import { Link, Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Input,InputAdornment,IconButton } from "@mui/material"
import ScienceIcon from '@mui/icons-material/Science';
import GradeIcon from '@mui/icons-material/Grade';

import { UIContext } from "../../context";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Router from "next/router";




const menuItems: string[] = ['personajes', 'favoritos ','capítulos']
export const SideBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {sidemenuOpen, closeSideMenu} = useContext(UIContext);
    const router = useRouter();

    const onSearchTerm = () => {
        if(searchTerm.trim().length === 0) return;
        
        if(router.asPath.includes('characters')){
            navigateTo(`/search/${searchTerm}`);
        }else if(router.asPath === `/search/${router.query.query}`){
            navigateTo(`/search/${searchTerm}`);
        }else if(router.asPath.includes('favoritos')){
            navigateTo(`/favoritos`);
        }else {
            navigateTo(`/SearchEpisode/${searchTerm}`);
        }
        
    }
    const navigateTo = (url:string) => {
        router.push(url);
    }

  return (
    <Drawer anchor="left"
        open={sidemenuOpen}
        onClose={closeSideMenu}
    >
        <Box sx={{ width:250 }}>
            <Box sx={{ padding:'5px 10px' }} >
                <Typography variant="h4">Menú</Typography>
            </Box>
            <ListItem>
            <Input
                autoFocus
                sx={{ padding:'1rem' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                type='text'
                placeholder="Buscar..."
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={onSearchTerm}
                        >
                            <SearchOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
            </ListItem>

            
            
            <List>
            <Link href="/characters/1" sx={{ textDecoration:'none' }}>

                <ListItem button key={1}>
                    <ListItemIcon>
                        <ScienceIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText  primary={'Personajes'} />
                </ListItem>
            </Link>

            <Link href="/episode/1" sx={{ textDecoration:'none' }}>
                <ListItem button key={2}>
                    <ListItemIcon>
                        <ScienceIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText  primary={'Capítulos'} />
                </ListItem>
            </Link>

                <Divider />
            <Link href="/favoritos" sx={{ textDecoration:'none' }}>
                <ListItem button key={3}>
                    <ListItemIcon>
                        <GradeIcon color="primary"/>
                    </ListItemIcon>
                    <ListItemText  primary={'Favoritos'} />
                </ListItem>
            </Link>
            </List>
            
            
        </Box>

    </Drawer>
  )
}
