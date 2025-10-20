import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const paperSx: any = { borderRadius: '10px', p: 1, m: 1 }

export default function Home() {
  return (
    <Grid sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ m: 3 }}>
              Encrypt an MS Access Database
            </Typography>
            <Typography variant="h5" sx={{ mx: 3 }}>
              Let\'s secure this thing.
            </Typography>
            <Typography variant="subtitle2">
              Written by Jacob, October 2025
            </Typography>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>Why Encrypt?</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                There are many reasons to encrypt an MS Access Database.
                Personally, I only ever do it to protect my back ends user tampering and make sure I\'m in control of all direct data access.
                You might also encrypt to simply password protect your front end so not anyone can open it.
                (though I think doing this through code is a more modern and editable approach)
              </Typography>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>First, we need to open the database in 'Exclusive' mode</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                There are a few ways to do this (using a command-line switch in cmd or a shortcut is one) but we are going to do this in native MS Access.
                Go ahead and go to 'File' - 'Open' - 'Browse'
              </Typography>
              <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                <CardMedia
                  component="img"
                  src='/images/ms-access-vba/encrypt-database/howTo_0.png'
                  sx={{ maxHeight: 600 }}
                />
              </Card>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                The file selector should appear. Now, find your database, click the little arrow next to 'Open' and select 'Open Exclusive'
              </Typography>
              <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                <CardMedia
                  component="img"
                  src='/images/ms-access-vba/encrypt-database/howTo_1.png'
                  sx={{ maxHeight: 600 }}
                />
              </Card>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>Now, let's encrypt it.</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                Go over to 'File'
              </Typography>
              <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                <CardMedia
                  component="img"
                  src='/images/ms-access-vba/encrypt-database/howTo_2.png'
                  sx={{ maxHeight: 600 }}
                />
              </Card>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                Now select 'Info', then 'Encrypt with Password'
              </Typography>
              <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                <CardMedia
                  component="img"
                  src='/images/ms-access-vba/encrypt-database/howTo_3.png'
                  sx={{ maxHeight: 600 }}
                />
              </Card>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                Easy peasy - now just put in the password you want to use.
              </Typography>
              <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                <CardMedia
                  component="img"
                  src='/images/ms-access-vba/encrypt-database/howTo_4.png'
                  sx={{ maxHeight: 600 }}
                />
              </Card>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                Not sure what password to use? I highly recommend using a generated password, like the one on LastPass.
                Then, you don't have to worry about how strong it is.
              </Typography>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>Notes on Encryption</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                If you're thinking this makes your Access Database infinitely secure, think again.
                In reality it's usually not that hard to get a password, especially if this is connect to a shift-enabled front end.
                The passwords are literally stored in plain text on the linked database.
              </Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                Also, to remove the encryption you need to have your password on hand (as you would guess).
              </Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                FYI - No password-protected app is any stronger than the storage of the password.
              </Typography>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

    </Grid>
  );
}