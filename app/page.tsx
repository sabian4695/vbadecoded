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
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import type { Metadata } from 'next'
import { articleObj } from "@/misc/articleTypes";
import ArticleLink from "@/misc/articleLink";
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';

import { red, grey } from '@mui/material/colors';

import { allArticles as aVbaArticles } from './ms-access-vba/page'
import { allArticles as vbaArticles } from './vba/page'

export const allArticles: articleObj[] = [...aVbaArticles, ...vbaArticles]

export const metadata: Metadata = {
  title: 'VBA Decoded - Home',
  description: 'A modern and in-depth resource for VBA and MS Access Development.',
}

export default function Home() {
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>
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
          <Stack sx={{ borderRadius: '10px', p: 3, m: 2, textAlign: 'center' }} spacing={3}>
            <Typography variant="h3" component="h1">
              Your modern resource for VBA and MS Access
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>
              MS Access development is NOT dead. Quite the contrary. It is still a cheap, quick, and effective way to develop multi-user applications, especially within organizations.
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>
              There are also many downsides to MS Access development - my goal is to polish some of the sticking spots.
            </Typography>
          </Stack>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={1} sx={{ borderRadius: '10px', py: 3, m: 2, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h5" color='text.secondary'>Content!</Typography>
            <List>
              <ListItemButton href='/ms-access-vba'>
                <ListItemAvatar>
                  <Avatar src="/images/ms_access_logo.svg" />
                </ListItemAvatar>
                <ListItemText primary="MS Access Articles" secondary="Find information on MS Access Databases" />
              </ListItemButton>
              <ListItemButton href='/vba'>
                <ListItemAvatar>
                  <Avatar src='/images/vba.svg' sx={{ bgcolor: grey[800] }} />
                </ListItemAvatar>
                <ListItemText primary="VBA Articles" secondary="Find information on VBA" />
              </ListItemButton>
              <ListItemButton href='https://www.youtube.com/@VBADecoded'>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: red[400] }} >
                    <YouTubeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="YouTube" secondary="Lots of the articles include YouTube videos showing the process" />
              </ListItemButton>
            </List>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Paper elevation={1} sx={{ borderRadius: '10px', py: 3, m: 2, textAlign: 'center' }}>
            <Typography variant="h5" color='text.secondary'>Latest Articles</Typography>
            <ArticleLink articleInfo={allArticles} />
          </Paper>
        </Grow>
      </Grid>

    </Grid>
  );
}