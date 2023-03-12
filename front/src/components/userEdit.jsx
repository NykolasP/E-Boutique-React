import { useNavigate } from "react-router-dom";
import React, {useState,useEffect} from 'react';

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export function UserEdit(){
    const [userData, setUserData] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:3001/api/user/profil", {
          headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
      }})
        .then( response => response.json())
        .then( data => {
            setUserData(data)
        })
    }, [])

    function submitForm(e) {
        e.preventDefault()
        const data = new FormData(e.currentTarget);

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
          },
          body: JSON.stringify({ email:data.get("email"), password:data.get("password"), surname:data.get("surname"), name:data.get("name") })
        };
        fetch('http://localhost:3001/api/user/editp', requestOptions)
          .then(response => response.json())
          .then(dataBack => {
            setTimeout(() => {
              navigate('/profil');
            },1000)
          })
          .catch(error => {
            console.error(error);
          });
    }

    return (
        <>
        {userData &&
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                margin:"0px 30px",
                textAlign:"left"
            }}
            >
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
                defaultValue={userData.email}
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
                defaultValue={userData.password}
                />
                <TextField
                margin="normal"
                fullWidth
                id="surname"
                label="Nom"
                name="surname"
                autoComplete="surname"
                autoFocus
                defaultValue={userData.surname}
                />
                <TextField
                margin="normal"
                fullWidth
                id="name"
                label="Prénom"
                name="name"
                autoComplete="name"
                autoFocus
                defaultValue={userData.name}
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Modifier vos Informations
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
        }</>
    )
}