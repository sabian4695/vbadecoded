import React from "react";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { articleObj } from "@/misc/articleTypes";
import ArticleLink from "@/misc/articleLink";
import PageHero from "@/misc/pageHero";

import { fullArticle as vbaDarkModeArticle } from './vba-editor-dark-mode/page'

export const allArticles: articleObj[] = [
  vbaDarkModeArticle,
]

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VBA Decoded - General VBA',
  description: 'Articles for developers on using VBA.',
}

export default function VBAPage() {
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>

      {/* Hero - full width */}
      <PageHero
        logoSrc="/images/vba.svg"
        logoAlt="VBA Logo"
        title="General VBA"
        subtitle="Gotta love VBA!"
        description="With all its faults, VBA is a wildly powerful tool. There are honestly some insane things you can do."
      />

      {/* Article list - full width */}
      <Grid size={{ xs: 12 }}>
        <Paper elevation={1} sx={{ borderRadius: '10px', py: 3, px: 2, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
            <Typography variant="h5" color="text.secondary">All General VBA Articles</Typography>
            <Chip label={`${allArticles.length} article${allArticles.length !== 1 ? 's' : ''}`} size="small" />
          </Box>
          <ArticleLink articleInfo={allArticles} />
        </Paper>
      </Grid>

    </Grid>
  );
}
