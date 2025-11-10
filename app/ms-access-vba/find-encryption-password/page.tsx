import React from "react";
import Grid from '@mui/material/Grid';
import dayjs from "dayjs";

import ArticleHeader from "@/misc/article_header";
import ArticleCard from '@/misc/article_card'
import VideoLink from "@/misc/article_videoLink";

import { headerObj, cardObj, videoLinkObj, articleObj } from '@/misc/articleTypes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Encryption Password',
  description: 'Find the password of an encrypted MS Access Database',
}

const paperSx: any = { borderRadius: '10px', p: 1, m: 1 }

const code0: string = `Function getPassword()
 
'initialize DAO objects
Dim db As Database
Dim rs As Recordset

'open database
Set db = OpenDatabase("C:\\\\database.accdb")

'pull only the connections
Set rs = db.OpenRecordset("SELECT * FROM MSysObjects WHERE Connect is not null")

'loop through all objects and show them in the immediate window
Do While Not rs.EOF
    Debug.Print "Database: " & rs!Database & vbTab & " Connection: " & rs!Connect
    rs.MoveNext
Loop
 
'close and free the recordset and database (general cleaup of recordset objects)
rs.Close
Set rs = Nothing
db.Close
Set db = Nothing
 
End Function`

const headerData: headerObj = {
  title: 'Find an Encryption Password for an MS Access DB',
  subTitle: 'Weirdly easy, actually.',
  note: 'Written by Jacob, November 2025',
  imageSrc: '/images/jacob_brown.jpg',
  imageAlt: 'Jacob Brown',
  publishDate: dayjs('11/10/2025').valueOf(),
  url: '/ms-access-vba/find-encryption-password'
}

const articleData: cardObj[] = [
  {
    title: 'First, why are you doing this?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Please make good decisions. The information I give here is mainly for fixing your own mistakes or possibly breaking open a passed-down database or something similar.`,
        alert: {
          title: `If you perform this action to a database that is using this method as security, this would be considered bypassing that security. Don\'t do that without permission...`,
          severity: 'error'
        }
      }
    ]
  },
  {
    title: 'How the heck?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Did you forget your password? Well you MIGHT be in luck... maybe...`,
        alert: {
          title: `Important Note here: this method only works if you used a split database structure. If you only have an all-in -one database(tables and forms and everything is
          all in one file) then you are SOL unless you use a password recovery service`,
          severity: 'warning'
        }
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `There are two basic pieces of information you need to know for this to work.`,
        list: [
          {
            primaryText: '1. Linking an .accdb table to another .accdb stores the password in plain text in the system table MSysObjects',
            secondaryText: ''
          },
          {
            primaryText: '2. You can open another database\'s tables using DAO recordsets in VBA.',
            secondaryText: ''
          }
        ]
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: '',
        alert: {
          title: 'Again, please use caution. Knowing this information and using it can compromise data integrity if you use it incorrectly.',
          severity: 'error'
        }
      }
    ]
  },
  {
    title: 'The Method',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Okay here we go. It\'s crazy easy. Create a new database (or just use some other database) and put this code into a module.
        All this function does is grab the database as an object, then loop through the connections.
        I put them into the immediate window with Debug.Print, but you can use any method you like.`,
        code: code0
      },
    ]
  },
  {
    title: 'That\'s All.',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Yeah that\'s really all there is to it. Nothing more to say, really...`,
      },
    ]
  },
]

// const videoDataObj: videoLinkObj = {
//   title: 'Click here to watch the YouTube video!',
//   link: 'https://youtu.be/8YIO4kRpKII'
// }

export const fullArticle: articleObj = {
  header: headerData,
  content: articleData
}

export default function Home() {
  return (
    <Grid sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>

      <ArticleHeader headerInfo={headerData} />

      {/* <VideoLink videoInfo={videoDataObj} /> */}

      {articleData.map((x, xIndex) => (
        <ArticleCard cardInfo={x} key={xIndex} />
      ))}

    </Grid>
  );
}