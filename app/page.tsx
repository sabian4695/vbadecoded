import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import Chip from '@mui/material/Chip';
import type { Metadata } from 'next'
import { articleObj } from "@/misc/articleTypes";
import ArticleLink from "@/misc/articleLink";
import PageHero from "@/misc/pageHero";
import YouTubeIcon from '@mui/icons-material/YouTube';

import { red, grey } from '@mui/material/colors';

import { allArticles as aVbaArticles } from './ms-access-vba/page'
import { allArticles as vbaArticles } from './vba/page'

export const allArticles: articleObj[] = [...aVbaArticles, ...vbaArticles]

export const metadata: Metadata = {
  title: 'VBA Decoded - Home',
  description: 'A modern and in-depth resource for VBA and MS Access Development.',
}

export default function HomePage() {
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>

      {/* Hero - full width */}
      <PageHero
        logoSrc="/images/logo.svg"
        logoAlt="VBA Decoded Logo"
        title="VBA Decoded"
        subtitle="Your modern resource for VBA and MS Access"
        description="MS Access development is NOT dead. It is still a cheap, quick, and effective way to develop multi-user applications, especially within organizations."
      />

      {/* Navigation - full width */}
      <Grid size={{ xs: 12 }}>
        <Paper elevation={1} sx={{ borderRadius: '10px', py: 3, px: 2, textAlign: 'center' }}>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 1 }}>Explore</Typography>
          <List sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }}>
            <ListItemButton href='/ms-access-vba' sx={{ maxWidth: { md: '300px' } }}>
              <ListItemAvatar>
                <Avatar src="/images/ms_access_logo.svg" />
              </ListItemAvatar>
              <ListItemText primary="MS Access Articles" secondary="MS Access specific tips and tools" />
            </ListItemButton>
            <ListItemButton href='/vba' sx={{ maxWidth: { md: '300px' } }}>
              <ListItemAvatar>
                <Avatar src='/images/vba.svg' sx={{ bgcolor: grey[800] }} />
              </ListItemAvatar>
              <ListItemText primary="VBA Articles" secondary="General VBA techniques" />
            </ListItemButton>
            <ListItemButton href='https://www.youtube.com/@VBADecoded' sx={{ maxWidth: { md: '300px' } }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: red[400] }}>
                  <YouTubeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="YouTube" secondary="Video walkthroughs" />
            </ListItemButton>
          </List>
        </Paper>
      </Grid>

      {/* Latest Articles - full width */}
      <Grid size={{ xs: 12 }}>
        <Paper elevation={1} sx={{ borderRadius: '10px', py: 3, px: 2, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
            <Typography variant="h5" color="text.secondary">Latest Articles</Typography>
            <Chip label={`${allArticles.length} total`} size="small" />
          </Box>
          <ArticleLink articleInfo={allArticles} />
        </Paper>
      </Grid>

    </Grid>
  );
}
