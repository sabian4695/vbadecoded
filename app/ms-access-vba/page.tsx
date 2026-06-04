import React from "react";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { articleObj } from "@/misc/articleTypes";
import ArticleLink from "@/misc/articleLink";
import PageHero from "@/misc/pageHero";

import { fullArticle as encryptArticle } from "./encrypt-database/page";
import { fullArticle as enableShiftArticle } from "./force-reenable-shift-key-bypass/page";
import { fullArticle as findPwArticle } from "./find-encryption-password/page";
import { fullArticle as grabLatestVersion } from "./always-grab-latest-version/page";
import { fullArticle as userThemes } from "./user-themes/page";

export const allArticles: articleObj[] = [
  enableShiftArticle,
  encryptArticle,
  findPwArticle,
  grabLatestVersion,
  userThemes
]

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VBA Decoded - MS Access VBA',
  description: 'Articles for developers on how to best use MS Access.',
}

export default function MSAccessVBAPage() {
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>

      {/* Hero - full width, no fixed minHeight */}
      <PageHero
        logoSrc="/images/ms_access_logo.svg"
        logoAlt="Microsoft Access Logo"
        title="Microsoft Access + VBA"
        subtitle="My bread and butter!"
        description="MS Access specific VBA is where my knowledge goes a bit deeper. Though some of the articles may not be about VBA..."
      />

      {/* Article list - full width */}
      <Grid size={{ xs: 12 }}>
        <Paper elevation={1} sx={{ borderRadius: '10px', py: 3, px: 2, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
            <Typography variant="h5" color="text.secondary">All MS Access VBA Articles</Typography>
            <Chip label={`${allArticles.length} articles`} size="small" />
          </Box>
          <ArticleLink articleInfo={allArticles} />
        </Paper>
      </Grid>

    </Grid>
  );
}
