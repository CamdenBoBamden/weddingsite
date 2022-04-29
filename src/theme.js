import { createTheme } from '@mui/material/styles'

let theme = createTheme()

theme.components.MuiTypography = {
    styleOverrides: {
        root: {
            fontFamily: "'Sawarabi Mincho', 'serif'",
            [theme.breakpoints.down('md')]: {
                fontSize: '1rem',
                fontWeight: 400,
            },
        },
    },
}

theme.components.MuiTab = {
    styleOverrides: {
        root: {
            fontFamily: "'Sawarabi Mincho', 'serif'",
            fontWeightMedium: 600,
            color: 'black',
        },
    },
}

export default theme
