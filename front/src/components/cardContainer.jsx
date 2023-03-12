import Grid from '@mui/material/Grid';

export function CardContainer({ children }) {
    return (
        <Grid container spacing={5}>
            {children}
        </Grid>
    )
}