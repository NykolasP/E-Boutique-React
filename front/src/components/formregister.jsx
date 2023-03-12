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

export function FormRegister() {
    const navigate = useNavigate();

    function submitForm(e) {
        e.preventDefault()
        const data = new FormData(e.currentTarget);

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email:data.get("email"), password:data.get("password"), surname:data.get("surname"), name:data.get("name") })
        };
        fetch('http://localhost:3001/api/user/register', requestOptions)
          .then(response => response.json())
          .then(dataBack => {
            setTimeout(() => {
              navigate('/connect');
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
            Créer votre compte
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
            <TextField
              margin="normal"
              fullWidth
              id="surname"
              label="Nom"
              name="surname"
              autoComplete="surname"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Prénom"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Créer votre compte
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/connect" variant="body2">
                  {"Vous avez un compte ?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}