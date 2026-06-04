import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

interface PageHeroProps {
    logoSrc: string
    logoAlt: string
    title: string
    subtitle?: string
    description?: string
}

export default function PageHero({ logoSrc, logoAlt, title, subtitle, description }: PageHeroProps) {
    return (
        <Grid size={{ xs: 12 }}>
            <Box sx={{ textAlign: 'center', py: 8 }}>
                <Image
                    height={300}
                    width={300}
                    style={{ width: '150px', height: 'auto' }}
                    src={logoSrc}
                    alt={logoAlt}
                />
                <Typography
                    sx={{ fontWeight: '100', letterSpacing: 7, mt: 2 }}
                    variant="h3"
                    color="text.secondary"
                    component="h1"
                >
                    {title}
                </Typography>
                {subtitle && (
                    <Typography variant="h5" sx={{ mt: 3, maxWidth: '700px', mx: 'auto' }}>
                        {subtitle}
                    </Typography>
                )}
                {description && (
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: '600px', mx: 'auto' }}>
                        {description}
                    </Typography>
                )}
            </Box>
        </Grid>
    )
}
