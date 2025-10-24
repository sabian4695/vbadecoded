"use client"
import React from "react";
import hljs from 'highlight.js/lib/core';
import vbnet from 'highlight.js/lib/languages/vbnet'
import Chip from '@mui/material/Chip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Paper from '@mui/material/Paper';

hljs.registerLanguage('vbnet', vbnet);

interface childrenType {
    code: string
}

export default function CodeBlock(children: childrenType) {
    const [isCopied, setIsCopied] = React.useState(false);

    const handleCopy = React.useCallback(async () => {
        try {
            await navigator.clipboard.writeText(children.code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset "Copied!" state after 2 seconds
        } catch (err) {
            console.error('Failed to copy: ', err);
            // Handle potential errors, e.g., show an error message
        }
    }, [children.code]);

    React.useEffect(() => {
        hljs.initHighlighting();
    }, []);
    return (
        <>
            <Paper
                elevation={1}
                sx={{ maxWidth: '100%', borderRadius: '10px', p: 2, m: 1, alignSelf: 'center', justifySelf: 'center' }}
            >
                <Chip
                    clickable
                    variant="outlined"
                    label={isCopied ? 'Copied!' : 'Copy to Clipboard'}
                    onClick={handleCopy}
                    icon={<ContentCopyIcon />}
                    sx={{ m: 0.5 }}
                />
                <pre><code className="vbscript">
                    {children.code}
                </code></pre>
            </Paper>
        </>
    )
}