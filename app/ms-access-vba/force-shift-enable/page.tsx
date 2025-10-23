import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Alert from '@mui/material/Alert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';

import CodeBlock from '../../../misc/codeBlock'


const paperSx: any = { borderRadius: '10px', p: 1, m: 1 }

export default function Home() {
  let code0 = `
  Function enableShift() as string
  
  Dim databaseLocation as String
  Dim db, acc
  
  Set acc = CreateObject("Access.Application")
  set db = acc.DBEngine.OpenDatabase(devLoc, False, False)

  db.Properties("AllowByPassKey") = True

  End Function
  `


  return (
    <Grid
      sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }}
      spacing={3}
      container
    >

      <Grid size={{ xs: 12, md: 6 }}>
        <Grow in={true}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3">
              Force Shift-Enable a Microsoft Access Database
            </Typography>
            <Typography variant="h5">
              Let's bust it open!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant="subtitle1">
                Written by Jacob, October 2025
              </Typography>
              <Avatar alt="Jacob Brown" src="/images/jacob_brown.jpg" />
            </Box>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>What is Shift-Enabling?</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                I'm assuming you know what shift-enabling and shift-disabling mean for an MS Access Database.
                Just so we're clear though, it's that "special keys" thing the allows to to bypass the startup form
                and any startup macros from running. It basically opens a database bypassing all the protective procedures.
              </Typography>
              <Alert sx={{ maxWidth: '800px' }} severity="warning">Important Note here: this method only applies to .accdb files and similar.
                It does NOT work on .accde files. Those are fully compiled executable-only databases.
                You cannot edit or disable startup procedures on these unless you used a very unique setup.</Alert>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>Tow Methods</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                There are two main methods I am exploring here.
              </Typography>
              <List
                sx={{ maxWidth: 600, bgcolor: 'background.paper' }}
              >
                <ListItem>
                  1. Use another MS Access Database (or any other MS product)
                </ListItem>
                <ListItem>
                  2. Use a vbScipt
                </ListItem>
              </List>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                The method / code is essentially the same.
              </Typography>
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <div>
            <CodeBlock code={code0} />
          </div>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>METHOD 1</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                Method 1 is using another MS Access Database (or Excel, PowerPoint, doesn't really matter).
              </Typography>
              <List
                sx={{ maxWidth: 600, bgcolor: 'background.paper' }}
              >
                <ListItem>
                  1. Open the VB Editor (in this other database).
                </ListItem>
                <ListItem>
                  2. Paste the below code into a module.
                </ListItem>
                <ListItem>
                  3. Run the function!
                </ListItem>
              </List>
              <CodeBlock code={code0} />
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

    </Grid >
  );
}