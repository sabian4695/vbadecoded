"use client"
import React from "react";
import hljs from 'highlight.js/lib/core';
import vbnet from 'highlight.js/lib/languages/vbnet'
import Chip from '@mui/material/Chip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Paper from '@mui/material/Paper';

hljs.registerLanguage('vbnet', vbnet);

interface CodeBlockProps {
    code: string
}

export default function CodeBlock({ code }: CodeBlockProps) {
    const [isCopied, setIsCopied] = React.useState(false);

    const highlightedHtml = React.useMemo(() => {
        const result = hljs.highlight(code, { language: 'vbnet' });
        return result.value;
    }, [code]);

    const handleCopy = React.useCallback(async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }, [code]);

    return (
        <Paper
            elevation={1}
            sx={{ maxWidth: '100%', borderRadius: '10px', p: 2, m: 1, alignSelf: 'center', justifySelf: 'center', overflow: 'auto' }}
        >
            <Chip
                clickable
                variant="outlined"
                label={isCopied ? 'Copied!' : 'Copy to Clipboard'}
                onClick={handleCopy}
                icon={<ContentCopyIcon />}
                sx={{ m: 0.5 }}
            />
            <pre>
                <code
                    className="hljs"
                    dangerouslySetInnerHTML={{ __html: highlightedHtml }}
                />
            </pre>
        </Paper>
    )
}
