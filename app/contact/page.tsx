import Image from "next/image";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VBA Decoded - Contact',
  description: 'Contact VBA Decoded to suggest a correction or article.',
}

export default function ContactPage() {
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '800px', justifySelf: 'center', minHeight: '60vh' }} spacing={3} container>
      <Grid size={{ xs: 12 }}>
        <Paper elevation={1} sx={{ borderRadius: '10px', p: { xs: 3, md: 5 } }}>
          {/* Contact Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
              Hey there!
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
              Have a question? Maybe an idea for a new article?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              OK yeah I guess there&apos;s also the possibility there&apos;s a mistake somewhere. Please reach out if you find an error or think an article could be improved.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Reach out at:
            </Typography>
            <Link
              href="mailto:contactvbadecoded@gmail.com"
              variant="h6"
              underline="hover"
              sx={{ fontWeight: 500 }}
            >
              contactvbadecoded@gmail.com
            </Link>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Support Section */}
          <Box>
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
              Want to support me?
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              In reality this money will go to website/business costs - and I thank you greatly for it.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Also, I want to keep this website ad free. This will help me do so!
            </Typography>
            <Button href='https://buymeacoffee.com/vbadecoded' target='_blank' variant='contained' color='success' sx={{ mb: 2 }}>
              <Image src="/images/bmc-full-logo.svg" alt="Buy me a coffee" width={150} height={40} style={{ width: '150px', height: 'auto' }} />
            </Button>
            <Typography variant="body2" color="text.secondary">
              Thanks for your support.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
