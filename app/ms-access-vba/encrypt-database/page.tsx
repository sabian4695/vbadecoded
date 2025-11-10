import React from "react";
import Grid from '@mui/material/Grid';

import ArticleHeader from "@/misc/article_header";
import ArticleCard from '@/misc/article_card'
import VideoLink from "@/misc/article_videoLink";

import { headerObj, cardObj, videoLinkObj } from '@/misc/articleTypes'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Encrypt an MS Access DB',
  description: 'Quickly and easily encrypt an MS Access Database.',
}

const paperSx: any = { borderRadius: '10px', p: 1, m: 1 }

const headerData: headerObj = {
  title: 'Encrypt an MS Access Database',
  subTitle: 'Let\'s secure this thing.',
  note: 'Written by Jacob, October 2025',
  imageSrc: '/images/jacob_brown.jpg',
  imageAlt: 'Jacob Brown'
}

export const articleData: cardObj[] = [
  {
    title: 'Why Encrypt?',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `There are many reasons to encrypt an MS Access Database.
                Personally, I only ever do it to protect my back ends user tampering and make sure I'm in control of all direct data access.
                You might also encrypt to simply password protect your front end so not anyone can open it.
                (though I think doing this through code is a more modern and editable approach) `,
      }
    ]
  },
  {
    title: 'First, we need to open the database in \'Exclusive\' mode',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `There are a few ways to do this(using a command - line switch in cmd or a shortcut is one) but we are going to do this in native MS Access.
                Go ahead and go to 'File' - 'Open' - 'Browse'`,
        image: '/images/ms-access-vba/encrypt-database/howTo_0.png'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `The file selector should appear. Now, find your database, click the little arrow next to 'Open' and select 'Open Exclusive'`,
        image: '/images/ms-access-vba/encrypt-database/howTo_1.png'
      }
    ]
  },
  {
    title: 'Now, let\'s encrypt it.',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Go over to 'File'`,
        image: '/images/ms-access-vba/encrypt-database/howTo_2.png'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Now select 'Info', then 'Encrypt with Password'`,
        image: '/images/ms-access-vba/encrypt-database/howTo_3.png'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Easy peasy - now just put in the password you want to use.`,
        image: '/images/ms-access-vba/encrypt-database/howTo_4.png'
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Not sure what password to use? I highly recommend using a generated password, like the one on LastPass.
                Then, you don't have to worry about how strong it is.`,
      }
    ]
  },
  {
    title: 'Notes on Encryption',
    contents: [
      {
        color: 'text.primary',
        variant: 'body1',
        text: `If you're thinking this makes your Access Database infinitely secure, think again.
                In reality it's usually not that hard to get a password, especially if this is connect to a shift-enabled front end.
                The passwords are literally stored in plain text on the linked database.`,
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `Also, to remove the encryption you need to have your password on hand (as you would guess).`,
      },
      {
        color: 'text.primary',
        variant: 'body1',
        text: `FYI - No password-protected app is any stronger than the storage of the password.`,
      }
    ]
  },
]

const videoDataObj: videoLinkObj = {
  title: 'Click here to watch the YouTube video!',
  link: 'https://youtu.be/8YIO4kRpKII'
}

export default function Home() {
  return (
    <Grid sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1200px', justifySelf: 'center' }} spacing={3} container>

      <ArticleHeader headerInfo={headerData} />

      <VideoLink videoInfo={videoDataObj} />

      {articleData.map((x, xIndex) => (
        <ArticleCard cardInfo={x} key={xIndex} />
      ))}

    </Grid>
  );
}