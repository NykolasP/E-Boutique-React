import Grid from '@mui/material/Grid';

export function CardContainer({ children }) {
    return (
        <Grid container spacing={5} style={{margin:"10px 5px"}}>
            {children}
        </Grid>
    )
}