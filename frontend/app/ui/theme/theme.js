'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            light: '#DBE2EF',
            main: '#3F72AF',
            dark: '#112d4e',
            contrastText: '#F9f7f7',
        },
        secondary: {
            main: 'rgb(85,85,85)',
            contrastText: 'rgba(249,247,247,0.5)'
        }
    },
    spacing: 4
});
