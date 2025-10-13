'use client';
import "./globals.css";
import React from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, Theme as themeType } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';

import SettingsIcon from '@mui/icons-material/Settings';

const primaryMain = '#5f8fa5ff'
const secondaryMain = '#698679'

const themes = {
  darkTheme: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: primaryMain
      },
      secondary: {
        main: secondaryMain
      },
      // background: {
      //   default: '#131313ff',
      //   paper: '#4d4d4dff',
      // }
    },
  }),
  lightTheme: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: primaryMain
      },
      secondary: {
        main: secondaryMain
      },
      background: {
        default: '#e9f0f0ff',
        paper: '#f0f3f3',
      }
    },
  }),
};

let initialThemeMode: string

if (global?.window !== undefined) {
  if (localStorage.getItem("userTheme") === null) {
    localStorage.setItem("userTheme", "dark")
  }
  initialThemeMode = localStorage.getItem("userTheme") || 'dark'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = React.useState<String | any>(initialThemeMode)
  const [theme, setTheme] = React.useState<themeType>(themes.darkTheme);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeClick = (event: any) => {
    setThemeMode(event.target.value);
    localStorage.setItem('userTheme', event.target.value)
  };


  React.useEffect(() => {
    if (themeMode === 'dark') {
      //@ts-ignore
      setTheme(themes.darkTheme)
    } else if (themeMode === 'light') {
      //@ts-ignore
      setTheme(themes.lightTheme)
    }
  }, [themeMode])

  return (
    <html lang="en">
      <head><title>VBA Decoded</title></head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar color='primary' component="nav" elevation={5} variant='outlined' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <Toolbar variant='dense' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} component={Link} href="/">
                  <Image
                    height='30'
                    width='30'
                    style={{ width: '40px', height: 'auto' }}
                    src='/images/logo.svg'
                    alt='VBA Decoded Logo'
                    loading="lazy"
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: '200', flexGrow: 1, ml: 1 }}
                  >
                    VBA Decoded
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <Button component={Link} href='/ms-access-vba' variant='text' sx={{ mx: 1, color: 'white' }}>MS Access VBA</Button>
                  <Button component={Link} href='/vba' variant='text' sx={{ mx: 1, color: 'white' }}>General VBA</Button>
                </Box>
                <IconButton
                  color='inherit'
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <Toolbar />
            {children}

            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Button component={Link} href='/ms-access-vba' variant='text' sx={{ mx: 1, color: 'white' }}>MS Access VBA</Button>
              </MenuItem>
              <MenuItem sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Button component={Link} href='/vba' variant='text' sx={{ mx: 1, color: 'white' }}>General VBA</Button>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ mr: 5 }}>Theme</Typography>
                <ToggleButtonGroup
                  value={themeMode}
                  exclusive
                  onChange={handleThemeClick}
                >
                  <ToggleButton value="light">Light</ToggleButton>
                  <ToggleButton value="dark">Dark</ToggleButton>
                </ToggleButtonGroup>
              </MenuItem>
            </Menu>

          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html >
  );
}
