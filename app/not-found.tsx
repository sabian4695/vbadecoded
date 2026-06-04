import React from "react";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link'

export default function NotFound() {
    return (
        <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
                Page not found
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </Typography>
            <Button component={Link} href="/" variant="contained">
                Back to Home
            </Button>
        </Box>
    )
}
