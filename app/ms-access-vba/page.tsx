import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import { ListItemButton } from "@mui/material";

export default function Home() {
  return (
    <Grid sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} container>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ p: 10, textAlign: 'center' }}>
            <Image
              height='300'
              width='300'
              src='/images/ms_access_logo.svg'
              alt='Microsoft Access Logo'
              loading="lazy"
            />
            <Typography
              sx={{ fontWeight: '100', letterSpacing: 7 }}
              variant={'h3'}
              color='text.secondary'
            >
              Microsoft Access VBA
            </Typography>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 5 }}>
            <Box>
              <Typography variant="h3">
                My bread and butter!
              </Typography>
              <Typography variant="h5">
                MS Access Specific VBA is where my knowledge goes a bit deeper.
              </Typography>
            </Box>
            <Typography variant="h6">
              See below for all the current articles.
            </Typography>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 5 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={3}>
              <Typography variant="h5" color='text.secondary'>All General VBA Articles:</Typography>
              Nothing Here yet!
              {/* <Button href='/vba/vba-editor-dark-mode' variant='text' component={Link}>
                VBA Editor Dark Mode
              </Button> */}
            </Stack>
          </Paper>
        </Grow>
      </Grid>

    </Grid>
  );
}