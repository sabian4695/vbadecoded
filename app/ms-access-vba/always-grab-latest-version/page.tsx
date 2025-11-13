import Grid from '@mui/material/Grid';
import dayjs from "dayjs";

import ArticleHeader from "@/misc/article_header";
import ArticleCard from '@/misc/article_card'

import { headerObj, cardObj, articleObj } from '@/misc/articleTypes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grab Latest Version',
  description: 'Have users always get the latest version of your MS Access database.',
}

let codeOg = `@echo off
IF exist myDirName ( echo "C:\databaseName\" exists ) ELSE ( mkdir "C:\databaseName\" )
copy \\standardCopyLocation\databaseName.accdb "C:\databaseName\databaseName.accdb"
start "msaccess.exe" "C:\databaseName\databaseName.accdb"`

const headerData: headerObj = {
  title: 'Ensure user have the latest version of your MS Access Database',
  subTitle: 'I don\'t like out of date versions.',
  note: 'Written by Jacob, November 2025',
  imageSrc: '/images/jacob_brown.jpg',
  imageAlt: 'Jacob Brown',
  publishDate: dayjs('11/13/2025').valueOf(),
  url: '/ms-access-vba/always-grab-latest-version'
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
    title: 'What is Shift-Enabling?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Trying to break into an MS Access database? Or maybe you accidentally disabled the shift-key bypass on one?
                Here's how to force re-enable the shift-key bypass.

                I'm assuming you know what shift-key bypass is for an MS Access Database.
                Just so we're clear though, it's that "special keys" thing that allows you to bypass the startup form
                and any startup macros from running. It basically opens a database bypassing all the protective procedures.`,
        alert: {
          title: `Important Note here: this method only applies to .accdb files and similar.
                It does NOT work on .accde files.Those are fully compiled executable- only databases.
                You cannot edit or disable startup procedures on these unless you used a very unique setup.`,
          severity: 'warning'
        }
      }
    ]
  },
  {
    title: 'Two Methods',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `You could do this a few ways... Here are two.`,
        list: [
          {
            primaryText: '1. Use another MS Access Database (or any other MS product)',
            secondaryText: ''
          },
          {
            primaryText: '2. Use a VBScript',
            secondaryText: ''
          },
        ]
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `The method / code is essentially the same. Both use the core function below.
                This code sample is basic and is expecting the database to already at least have the property available.
                The code samples later deal with the possibility of that not existing yet.`,
        code: codeOg
      }
    ]
  },
  {
    title: 'Wow, that\'s really all there is to it?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Yeah this is a scary reality of developing in MS Access. There are many other security measures you can take, but this common one is pretty easy to break through.
         In all reality, though, this is still plenty of security unless you know you have some power users that could easily google this and find this very article...`,
      }
    ]
  },
]

export const fullArticle: articleObj = {
  header: headerData,
  content: articleData
}


const paperSx: any = { borderRadius: '10px', p: 1, m: 1 }

export default function Home() {
  return (
    <Grid
      sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }}
      spacing={3}
      container
    >

      <ArticleHeader headerInfo={headerData} />

      {articleData.map((x, xIndex) => (
        <ArticleCard cardInfo={x} key={xIndex} />
      ))}

    </Grid >
  );
}
