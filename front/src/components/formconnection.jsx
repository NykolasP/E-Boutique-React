import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export function Formconnection() {
    const navigate = useNavigate();


    function submitForm(e) {
        e.preventDefault()

        const data = new FormData(e.currentTarget);

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email:data.get("email"), password:data.get("password") })
        };
        fetch('http://localhost:3001/api/user/connect', requestOptions)
          .then(response => response.json())
          .then(dataBack => {
            localStorage.setItem('token', dataBack.token)
            localStorage.setItem('roles', JSON.stringify(dataBack.roles))
            setTimeout(() => {
              navigate("/");
              navigate(0);
            },1000)
          })
          .catch(error => {
            console.error(error);
          });
    }

    return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Se Connecter
          </Typography>
          <Box
            component="form"
            onSubmit={submitForm}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Se Connecter
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Vous n'avez pas de compte ?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}