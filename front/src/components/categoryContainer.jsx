import Grid from '@mui/material/Grid';

export function CategoryContainer({ children }) {
    return (
        <Grid container spacing={3}>
            {children}
        </Grid>
    )
}