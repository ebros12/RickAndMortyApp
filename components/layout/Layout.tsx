import { FC } from "react";
import Head from "next/head"
import { Box } from "@mui/material"
import {Navbar, SideBar} from '../ui';


interface Props{
    title?: string;
    children?: React.ReactNode;
}

export const Layout:FC<Props> = ({title = 'Rick & Morty', children}) => {
  return (
    <Box sx={{ flexFlow: 1 }} >
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar />
        <SideBar />
        <Box sx={{ padding:'10px 20px' }}>
            {children}
        </Box>
    </Box>
  )
}