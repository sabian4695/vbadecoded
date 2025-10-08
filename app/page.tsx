import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
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

export default function Home() {
  return (
    <Grid sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} container>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ p: 10, textAlign: 'center' }}>
            <Image
              height='300'
              width='300'
              src='/images/logo.png'
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
                We offer in depth and modern information for VBA.
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
              <Typography variant="h5" color='text.secondary'>Lots of content types!</Typography>
              <Box>
                <List sx={{ bgcolor: 'background.paper' }}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountTreeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Articles" secondary="Use the site navigation / search to find articles!" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <InsertLinkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="YouTube" secondary="Lots of the articles include YouTube videos showing the process." />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <SearchIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Products" secondary="There are some products we offer that can help speed up your process." />
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

    </Grid>
  );
}