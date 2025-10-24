import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ textAlign: 'center', minHeight: '500px', alignContent: 'center' }}>
            <Image
              height='300'
              width='300'
              src='/images/ms_access_logo.svg'
              style={{ width: '150px', height: 'auto' }}
              alt='Microsoft Access Logo'
              loading="lazy"
            />
            <Typography
              sx={{ fontWeight: '100', letterSpacing: 7 }}
              variant={'h3'}
              color='text.secondary'
            >
              Microsoft Access + VBA
            </Typography>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 2 }}>
            <Stack spacing={5}>
              <Typography variant="h3">
                My bread and butter!
              </Typography>
              <Typography variant="h5">
                MS Access Specific VBA is where my knowledge goes a bit deeper.
              </Typography>
              <Typography variant="body2">
                (Though some of the articles may not be about VBA...)
              </Typography>
              <Typography variant="h6">
                See below for all the current articles.
              </Typography>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 2 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={3}>
              <Typography variant="h5" color='text.secondary'>All MS Access VBA Articles:</Typography>
              <Button href='/ms-access-vba/force-shift-enable' variant='text' color='inherit' sx={{ textDecoration: 'underline' }} component={Link}>
                Force Shift-Enable an MS Access Database
              </Button>
              <Button href='/ms-access-vba/encrypt-database' variant='text' color='inherit' sx={{ textDecoration: 'underline' }} component={Link}>
                Encrypt an MS Access Database
              </Button>
            </Stack>
          </Paper>
        </Grow>
      </Grid>
    </Grid>
  );
}