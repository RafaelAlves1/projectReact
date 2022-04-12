import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { LightThema, DarkThema } from "../../shared/themes";
import { Box } from "@mui/system";


interface IThemeContextData{
    themeName: 'light' | 'dark' 
    toggleTheme: () => void
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC = ({children}) => {
    const [themeName, setThemeName] = useState<'light' | 'dark' >('light')

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeNmae => oldThemeNmae === 'light' ? 'dark' : 'light')
    }, []) //armazenar funcoes dentro dele

    const theme = useMemo(()=> {
        if(themeName === 'light')return LightThema;

        return DarkThema
    }, [themeName])

    return(
        <ThemeContext.Provider value={{themeName, toggleTheme}}> 
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider> 
        </ThemeContext.Provider>
    )
}