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
  let codeOg = `Function enableShift()
  
'initialize variables
Dim databaseLocation as String
Dim db, acc

'specify database location
Dim databaseLocation as String
databaseLocation = "\\\\users\\brownj\\testdatabase.accdb"
  
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

End Function`

  let code0 = `Function enableShift()
  
'initialize variables
Dim databaseLocation as String
Dim db, acc

'specify database location
Dim databaseLocation as String
databaseLocation = "\\\\users\\brownj\\testdatabase.accdb"
  
'open the database as an Access object
Set acc = CreateObject("Access.Application")

'open the "database" now within that object
Set db = acc.DBEngine.OpenDatabase(databaseLocation, False, False)

'run the command
db.Properties("AllowByPassKey") = True

End Function`

  let code1 = `On Error GoTo errEnableShift

Const conPropNotFound = 3270

'call the function
enableShift

Function enableShift()
  
'initialize variables
Dim databaseLocation as String
Dim db, acc
Dim prop

'specify database location
Dim databaseLocation as String
databaseLocation = "\\\\users\\brownj\\testdatabase.accdb"
  
'open the database as an Access object
Set acc = CreateObject("Access.Application")

'open the "database" now within that object
Set db = acc.DBEngine.OpenDatabase(databaseLocation, False, False)

'run the command
db.Properties("AllowByPassKey") = True
GoTo exitFunction

errEnableShift:
If Err = conPropNotFound Then
  Set prop = db.CreateProperty("AllowByPassKey", dbBoolean, True)
  db.Properties.Append prop
Resume Next
End If

exitFunction: 'clear your objects/detach from the database
db.Close
Set db = Nothing
Set acc = Nothing

End Function`


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
                Also Excel, PowerPoint, Word, Classic Outlook. It doesn't really matter which application you use. Just some place you can run some VBA.
              </Typography>
              <List
                sx={{ maxWidth: 600, bgcolor: 'background.paper' }}
              >
                <ListItem>
                  1. Open the VB Editor (in the other database).
                </ListItem>
                <ListItem>
                  2. Paste the below code into a module. Don't forget to modify your DB location.
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
              <List
                sx={{ maxWidth: 600, bgcolor: 'background.paper' }}
              >
                <ListItem>
                  1. Open a text editor (notepad is the example here)
                </ListItem>
                <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                  <CardMedia
                    component="img"
                    src='/images/ms-access-vba/encrypt-database/howTo_2.png'
                    sx={{ maxHeight: 600 }}
                  />
                </Card>
                <ListItem>
                  2. Paste the below code into that file. Don't forget to modify your DB location.
                </ListItem>
                <ListItem>
                  3. Save the file with an extension of .vbs
                </ListItem>
                <ListItem>
                  4. Close the file, and double-click it to run it.
                </ListItem>
              </List>
              <CodeBlock code={code1} />
            </Stack>
          </Paper>
        </Grow>
      </Grid>

    </Grid >
  );
}