import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export function Card({ obj }) {
    return (
        <Grid item xs={3}>
            <Item>
                <h2>{obj.name} - {obj.price} €</h2>
                <p>{obj.resume}</p>
            </Item>
        </Grid>
    )
}
