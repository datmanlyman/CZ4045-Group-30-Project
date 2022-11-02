import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { absa } from '../data/index';

export default function AspectCard(props) {
    const { date, post_title, company, position, rating, text } = props;
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {date}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {post_title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {company + " " + position + ", " + rating + "/5.0"}
                    </Typography>
                    <Typography variant="body2">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}