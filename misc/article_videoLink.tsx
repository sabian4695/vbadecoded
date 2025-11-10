import React from 'react';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link'

import { videoLinkObj } from './articleTypes'

interface videoProps {
    videoInfo: videoLinkObj
}

export default function VideoLink(videoProp: videoProps) {
    const videoObj: videoLinkObj = videoProp.videoInfo
    return (
        <Grid size={{ xs: 12 }}>
            <Grow in={true}>
                <Box sx={{ textAlign: 'center' }}>
                    <Button href={videoObj.link} variant='outlined' color='secondary' target='_blank' component={Link}>
                        {videoObj.title}
                    </Button>
                </Box>
            </Grow>
        </Grid>
    )
}