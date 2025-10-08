import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function Home() {
  return (
    <Grid sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} container>

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ p: 10, textAlign: 'center' }}>
            <Typography variant="h3">
              VBA Editor Dark Mode
            </Typography>
            <Typography variant="h5">
              Here's how you set up dark mode on the default IDE for Visual Basic (VBA Editor)
            </Typography>
            <Typography variant="subtitle1">
              Written by Jacob, October 2025
            </Typography>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 5 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>Dark Mode?</Typography>
              <Typography>
                This is super easy to set up, but not quite the simple checkbox that I would want it to be.
              </Typography>
              <Typography>
                Here's what my VBE looks like. You can see not quite everything is dark-themed. The toolbars are still light even with these settings applied.
              </Typography>
              <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                <CardMedia
                  component="img"
                  src='/images/vba/vba-editor-dark-mode/darkMode_window.png'
                  sx={{ maxHeight: 600 }}
                />
              </Card>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 5 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>First, head up to the Tools-Options area</Typography>
              <Typography>
                Click on Tools, then Options:
              </Typography>
              <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                <CardMedia
                  component="img"
                  src='/images/vba/vba-editor-dark-mode/howTo_0.png'
                  sx={{ maxHeight: 600 }}
                />
              </Card>
              <Typography>
                Then this pop-up should appear:
              </Typography>
              <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                <CardMedia
                  component="img"
                  src='/images/vba/vba-editor-dark-mode/howTo_1.png'
                  sx={{ maxHeight: 600 }}
                />
              </Card>
              <Typography>
                All you need to do is edit each line item in the Code Colors area, using the Foreground and Background color dropdowns.
              </Typography>
              <Typography>
                This is also the area where you can change the font size and type if you so desire.
              </Typography>
              <Typography>
                If you want to know my preferences, see below, I took a screenshot of each item.
              </Typography>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 5 }}>
            <Grid sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} spacing={1} container>
              <Grid size={{ xs: 12 }}>
                <Typography variant="h5" color='text.secondary'>My Preferences</Typography>
                <Typography>
                  Here are the settings I use. Feel free to copy.
                </Typography>
              </Grid>

              <Grid>
                <Typography>Normal Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_0.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
              <Grid>
                <Typography>Selection Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_1.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
              <Grid>
                <Typography>Syntax Error Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_2.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
              <Grid>
                <Typography>Execution Point Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_3.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
              <Grid>
                <Typography>Breakpoint Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_4.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
              <Grid>
                <Typography>Comment Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_5.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
              <Grid>
                <Typography>Keyword Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_6.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
              <Grid>
                <Typography>Indentifier Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_7.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
              <Grid>
                <Typography>Bookmark Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_8.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
              <Grid>
                <Typography>Call Return Text</Typography>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/vba/vba-editor-dark-mode/theme_9.png'
                    sx={{ maxHeight: 600 }} />
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grow>
      </Grid>

    </Grid>
  );
}