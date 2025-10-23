"use client"
import React from "react";
import hljs from 'highlight.js/lib/core';
import vbnet from 'highlight.js/lib/languages/vbnet'
import Chip from '@mui/material/Chip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import 'highlight.js/styles/atom-one-dark.css';

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
        <div>
            <Chip
                clickable
                variant="outlined"
                label={isCopied ? 'Copied!' : 'Copy to Clipboard'}
                onClick={handleCopy}
                icon={<ContentCopyIcon />}
            />
            <pre><code className="vbscript">
                {children.code}
            </code></pre>
        </div>
    )
}