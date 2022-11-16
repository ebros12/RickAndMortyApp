import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";


export const darkTheme = createTheme({
  palette:{
    mode:'dark',
    secondary:{
      main:'#19857b'
    },
    error:{
      main:red.A400
    },
  },
  components:{
      MuiAppBar:{
        defaultProps:{
          elevation:0
        },
        styleOverrides:{
          root:{
            
            background: 'radial-gradient(circle, rgba(60,182,74,1) 0%, rgba(210,224,84,1) 48%, rgba(13,136,67,1) 99%)'
          }
        }
      }
  }
  });