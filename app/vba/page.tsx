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
      <Grid size={{ xs: 12, md: 6 }} >
        <Grow in={true}>
          <Box sx={{ textAlign: 'center', minHeight: '500px', alignContent: 'center' }}>
            <Image
              height='100'
              width='100'
              style={{ width: '150px', height: 'auto' }}
              src='/images/vba.svg'
              alt='VBA logo'
              loading="lazy"
            />
            <Typography
              sx={{ fontWeight: '100', letterSpacing: 7 }}
              variant={'h3'}
              color='text.secondary'
            >
              General VBA
            </Typography>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ borderRadius: '10px', p: 3, m: 2, textAlign: 'center' }}>
            <Stack spacing={3}>
              <Typography variant="h3">
                Gotta love VBA!
              </Typography>
              <Typography variant="h5">
                With all its faults, VBA is a wildly powerful tool.
              </Typography>
              <Typography variant="body2">
                There are honestly some insane things you can do.
              </Typography>
            </Stack>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 2 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={3}>
              <Typography variant="h5" color='text.secondary'>All General VBA Articles:</Typography>
              <Stack>
                <Button href='/vba/vba-editor-dark-mode' variant='text' color='inherit' size="large" sx={{ textDecoration: 'underline' }} component={Link}>
                  VBA Editor Dark Mode
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

    </Grid>
  );
}