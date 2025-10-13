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
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} container>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 2 }}>
            <Box>
              <Typography variant="h3">
                Hey there!
              </Typography>
              <Typography variant="h5">
                Have a question? Maybe an idea for a new article?
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mt: 5 }}>
              Contact us here:
            </Typography>
            <Button href='mailto:contactvbadecoded@gmail.com' variant='contained'>contactvbadecoded@gmail.com</Button>
          </Paper>
        </Grow>
      </Grid>

    </Grid>
  );
}