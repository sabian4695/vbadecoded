import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Grid sx={{ m: { xs: 0, md: 2 }, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', justifySelf: 'center' }} container>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ textAlign: 'center' }}>
            <Image
              height='300'
              width='300'
              style={{ width: '300px', height: 'auto' }}
              src='/images/logo.svg'
              alt='VBA Decoded Logo'
              loading="lazy"
            />
            <Typography
              sx={{ fontWeight: '100', letterSpacing: 7 }}
              variant={'h3'}
              color='text.secondary'
            >
              VBA Decoded
            </Typography>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ borderRadius: '10px', p: 3, m: 5, textAlign: 'center' }}>
            <Typography variant="h3">
              Welcome to VBA Decoded!
            </Typography>
            <Typography variant="h5">
              Your in depth and modern resource for VBA.
            </Typography>
            <Typography variant="h6">
              Much of the content is focused on Microsoft Access VBA. But, there is also Excel, VB Scripts and even some Batch file contents thrown in there.
            </Typography>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 5 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={3}>
              <Typography variant="h5" color='text.secondary'>Content!</Typography>
              <Box>
                <List sx={{ bgcolor: 'background.paper' }}>
                  <ListItemButton href='/vba'>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountTreeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="MS Access Articles" secondary="Find information on MS Access Databases" />
                  </ListItemButton>
                  <ListItemButton href='/ms-access-vba'>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountTreeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="VBA Articles" secondary="Find information on VBA" />
                  </ListItemButton>
                  <ListItemButton href='https://www.youtube.com/@VBADecoded'>
                    <ListItemAvatar>
                      <Avatar>
                        <InsertLinkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="YouTube" secondary="Lots of the articles include YouTube videos showing the process" />
                  </ListItemButton>
                </List>
              </Box>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 2 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={3}>
              <Typography variant="h5" color='text.secondary'>Latest Articles</Typography>
              <Stack>
                <Button href='/ms-access-vba/force-shift-enable' variant='text' size='large' color='inherit' sx={{ textDecoration: 'underline' }} component={Link}>
                  Force Shift-Enable an MS Access Database
                </Button>
                <Button href='/ms-access-vba/encrypt-database' variant='text' size='large' color='inherit' sx={{ textDecoration: 'underline' }} component={Link}>
                  Encrypt an MS Access Database
                </Button>
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