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
import ListItemText from '@mui/material/ListItemText';

import CodeBlock from '../../../misc/codeBlock'


const paperSx: any = { borderRadius: '10px', p: 1, m: 1 }

export default function Home() {
  let codeOg = `Function enableShift()
  
'initialize variables
Dim db, acc

'specify database location
Dim databaseLocation as String
databaseLocation = "C:\\\\dev\\\WorkingDB_brownj_dev.accdb"
  
'open the database as an Access object
Set acc = CreateObject("Access.Application")

'open the "database" now within that object
Set db = acc.DBEngine.OpenDatabase(databaseLocation, False, False)

'run the command
db.Properties("AllowByPassKey") = True

'clear your objects (otherwise you'll have to force-close some tasks)
db.Close
Set db = Nothing
Set acc = Nothing

MsgBox "Done!"

End Function`

  let code0 = `Function enableShift()
On Error GoTo errEnableShift

'initialize variables
Dim databaseLocation as String
Dim db As DAO.Database, acc
Dim prop As DAO.Property
Const conPropNotFound = 3270

'specify database location
Dim databaseLocation as String
databaseLocation = "C:\\\\dev\\\WorkingDB_brownj_dev.accdb"
  
'open the database as an Access object
Set acc = CreateObject("Access.Application")

'open the "database" now within that object
Set db = acc.DBEngine.OpenDatabase(databaseLocation, False, False)

'run the command
db.Properties("AllowByPassKey") = True

GoTo exitThis

errEnableShift:
If Err = conPropNotFound Then
    Set prop = db.CreateProperty("AllowByPassKey", dbBoolean, True)
    db.Properties.Append prop
    Resume Next
    GoTo exitThis
End If

MsgBox "Done!"

exitThis: 'clear your objects/detach from the database
db.Close
Set db = Nothing
Set acc = Nothing

End Function`

  let code1 = `On Error Resume Next
 
Const conPropNotFound = 3270

'initialize variables
Dim db, acc
Dim prop
 
'specify database location
Dim databaseLocation
databaseLocation = "C:\\\\dev\\\WorkingDB_brownj_dev.accdb"
'open the database as an Access object
Set acc = CreateObject("Access.Application")
 
'open the "database" now within that object
Set db = acc.DBEngine.OpenDatabase(databaseLocation, False, False)
 
'run the command
db.Properties("AllowByPassKey") = True
 
'if there is an error, then you need to add the property
If Err = conPropNotFound Then
  Set prop = db.CreateProperty("AllowByPassKey", 1, True)
  db.Properties.Append prop
End If
 
'clear your objects/detach from the database
db.Close
Set db = Nothing
Set acc = Nothing

MsgBox "Done!"`


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
              Force Re-Enable Shift Key Bypass on a Microsoft Access Database
            </Typography>
            <Typography variant="h5">
              Let's bust it open!
            </Typography>
            <Stack direction='row' spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="subtitle1">
                Written by Jacob, October 2025
              </Typography>
              <Avatar alt="Jacob Brown" src="/images/jacob_brown.jpg" />
            </Stack>
          </Box>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>What is Shift-Enabling?</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                Trying to break into an MS Access database? Or maybe you accidentally disabled the shift-key bypass on one?
                Here's how to force re-enable the shift-key bypass.

                I'm assuming you know what shift-key bypass is for an MS Access Database.
                Just so we're clear though, it's that "special keys" thing that allows you to bypass the startup form
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
              <Typography variant="h5" color='text.secondary'>Two Methods</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                You could do this a few ways... Here are two.
              </Typography>
              <List
                sx={{ maxWidth: 600, bgcolor: 'background.paper' }}
              >
                <ListItem>
                  1. Use another MS Access Database (or any other MS product)
                </ListItem>
                <ListItem>
                  2. Use a VBScript
                </ListItem>
              </List>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                The method / code is essentially the same. Both use the core function below.
                This code sample is basic and is expecting the database to already at least have the property available.
                The code samples later deal with the possibility of that not existing yet.
              </Typography>
              <CodeBlock code={codeOg} />
            </Stack>
          </Paper>
        </Grow>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Grow in={true}>
          <Paper elevation={3} sx={{ borderRadius: '10px', p: 1, m: 1 }}>
            <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
              <Typography variant="h5" color='text.secondary'>METHOD 1: Use another MS Access DB</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                You could also use Excel, PowerPoint, Word, Classic Outlook, etc. It doesn't really matter which application you use.
                Just a place you can run some VBA. In this function, the error handling uses VBAs "On Error GoTo" functionality.
              </Typography>
              <List
                sx={{ maxWidth: 600, bgcolor: 'background.paper' }}
              >
                <ListItem>
                  <ListItemText primary="1. Open the VB Editor." secondary="(in the other database)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="2. Paste the below code into a module." secondary="Don't forget to modify your DB location!" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="3. Run the function!" secondary="I usually go to the immediate pane and type the function name, then hit Enter." />
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
              <Typography variant="h5" color='text.secondary'>METHOD 2: Create a VBScript file</Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                If you've never used one before, VBScripts are very handy. Sometimes I use an MS Access DB to call a VBscript.
                Sometimes, I use a VBScript to call an MS Access DB. Other times, I'll use it to perform some strange task like this one.
              </Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                They are very simple to create. Just open a text editor (notepad works just fine).
                Be careful having this file out in the open though - and then labelling it "how to disable shift protection" or something like that.
                I think you know what I'm saying here.
              </Typography>
              <Typography sx={{ maxWidth: '800px', p: 2 }}>
                VBScripts do not have the ability to use "On Error GoTo" like VBA, so you will need to use a different method, like below.
              </Typography>
              <List
                sx={{ maxWidth: 600, bgcolor: 'background.paper' }}
              >
                <ListItem>
                  1. Open a text editor (notepad is the example here)
                </ListItem>
                <ListItem>
                  2. Paste the below code into that file. Don't forget to modify your DB location.
                </ListItem>
                <ListItem>
                  3. Save the file with an extension of .vbs
                </ListItem>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/ms-access-vba/force-shift-enable/notepad-save.png'
                    sx={{ maxHeight: 600 }}
                  />
                </Card>
                <ListItem>
                  4. Close the file, and double-click it to run it.
                </ListItem>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/ms-access-vba/force-shift-enable/vbs.png'
                    sx={{ maxHeight: 600 }}
                  />
                </Card>
              </List>
              <CodeBlock code={code1} />
            </Stack>
          </Paper>
        </Grow>
      </Grid>

    </Grid >
  );
}
