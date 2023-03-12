import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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
                <Link to={`/product/${obj.id}`}><h2>{obj.name}</h2></Link>
                <h3 style={{textAlign:"left"}}>Prix : {obj.price} €</h3>
                <p style={{textAlign:"left"}}>Resumé : {obj.resume}</p>
            </Item>
        </Grid>
    )
}
