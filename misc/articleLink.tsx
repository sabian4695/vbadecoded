import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import dayjs from "dayjs";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { articleObj } from './articleTypes';

interface articleProps {
    articleInfo: articleObj[]
}

export default function ArticleLink(articleProp: articleProps) {
    const articleArr: articleObj[] = articleProp.articleInfo
    return (
        <List sx={{ width: '100%', }}>
            {
                articleArr.sort(
                    (a, b) => {
                        return b.header.publishDate - a.header.publishDate;
                    }
                ).map((x, xIndex) => (
                    <ListItem alignItems="flex-start" key={xIndex}>
                        <Box
                            href={x.header.url}
                            component={Link}
                            sx={{ width: '100%' }}
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar alt={x.header.imageAlt} src={x.header.imageSrc} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={x.header.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{ color: 'text.primary', display: 'inline' }}
                                            >
                                                {dayjs(x.header.publishDate).format('MMMM YYYY') + ' - '}
                                            </Typography>
                                            {x.content[1].contents[0].text.slice(0, 75) + '...'}
                                        </React.Fragment>
                                    }
                                />
                            </ListItemButton>
                        </Box>
                    </ListItem>
                ))
            }
        </List>
    )
}