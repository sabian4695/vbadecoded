import React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link'
import dayjs from "dayjs";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import Chip from '@mui/material/Chip';

import { articleObj } from './articleTypes';

interface articleProps {
    articleInfo: articleObj[]
}

function getPreviewText(article: articleObj): string {
    // Use explicit description if available
    if (article.header.description) {
        return article.header.description
    }
    // Fallback: use subtitle
    if (article.header.subTitle) {
        return article.header.subTitle
    }
    // Last resort: try to grab text from content safely
    const text = article.content?.[0]?.contents?.[0]?.text
    if (text) {
        return text.slice(0, 80) + '...'
    }
    return ''
}

export default function ArticleLink(articleProp: articleProps) {
    const articleArr: articleObj[] = [...articleProp.articleInfo].sort(
        (a, b) => b.header.publishDate - a.header.publishDate
    )

    return (
        <List>
            {articleArr.map((x, xIndex) => (
                <Box
                    href={x.header.url}
                    component={Link}
                    key={xIndex}
                >
                    <ListItem alignItems="flex-start" sx={{ p: 0 }}>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar alt={x.header.imageAlt} src={x.header.imageSrc} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        {x.header.title + ' '}
                                        <Chip label={dayjs(x.header.publishDate).format('MMMM YYYY')} size='small' />
                                    </Box>
                                }
                                secondary={getPreviewText(x)}
                            />
                        </ListItemButton>
                    </ListItem>
                </Box>
            ))}
        </List>
    )
}
