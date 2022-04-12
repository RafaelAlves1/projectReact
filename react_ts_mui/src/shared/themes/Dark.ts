
import { cyan, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material'


export const DarkThema = createTheme({
    palette: {
        primary: {
            main: yellow[700] ,
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#ffffff' ,
        },
        secondary: {
            main: cyan[500] ,
            dark: cyan[400],
            light: cyan[300],
            contrastText: '#ffffff' ,
        },
        background: {
            default: "#202124" , //cor de fundo
            paper:'#303134' , // fundo do card
        }
    }
});