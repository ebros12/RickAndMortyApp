import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";


export const lightTheme = createTheme({
    palette:{
      mode:'light',
      background:{
        default:grey[300]
      },
      primary:{
        main:"rgba(60,182,74,1)"
      },
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
      },
      MuiButton:{
        defaultProps:{
          variant: 'contained',
          size:'small',
          disableElevation:true,
        },
        styleOverrides:{
          root:{
            outline:'A400',
            textDecoration:'none',
            textTransform:'none',
            boxShadow:'none',
            borderRadius:10,
            ":hover": {
              backgroundColor:'white',
              transition: 'all 0.3s ease-in-out'
            },
          
            color:'black',
          }
        }
      }


    }
    
  });