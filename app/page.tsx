import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link'

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
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 5 }}>
            <Box>
              <Typography variant="h3">
                Welcome to VBA Decoded!
              </Typography>
              <Typography variant="h5">
                Your in depth and modern resource for VBA.
              </Typography>
            </Box>
            <Typography variant="h6">
              Much of the content is focused on Microsoft Access VBA. But, there is also Excel, VB Scripts and even some Batch file contents thrown in there.
            </Typography>
          </Paper>
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

    </Grid>
  );
}