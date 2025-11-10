import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

import { headerObj } from './articleTypes'

interface headerProps {
    headerInfo: headerObj
}

export default function ArticleHeader(headerProp: headerProps) {
    const header: headerObj = headerProp.headerInfo
    return (
        <Grid size={{ xs: 12 }}>
            <Grow in={true}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }} component="h1">
                        {header.title}
                    </Typography>
                    <Typography variant="h5" sx={{ mx: 3 }}>
                        {header.subTitle}
                    </Typography>
                    <Stack direction='row' spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="subtitle1">
                            {header.note}
                        </Typography>
                        <Avatar alt={header.imageAlt} src={header.imageSrc} />
                    </Stack>
                </Box>
            </Grow>
        </Grid>
    )
}