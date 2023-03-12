import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export function CategoryCard({ obj }) {
    return (
        <Grid item xs={2}>
            <Item>
                <Link to={`/category/${obj.id}`}><h2>{obj.name}</h2></Link>
            </Item>
        </Grid>
    )
}
