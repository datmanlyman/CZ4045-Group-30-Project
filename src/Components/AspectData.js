import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { absa } from '../data/index';

export const AspectData = () => {
    const AspectCard = (aspect) => {
        return (
            <>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {aspect.date}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {aspect.post_title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {aspect.company + " " + aspect.position + ", " + aspect.rating + "/5.0"}
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </>
        );
    }
}