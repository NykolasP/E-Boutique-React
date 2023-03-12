import { useNavigate } from "react-router-dom";
import React, {useEffect,useState} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';

export function FormproductA() {
    const navigate = useNavigate();
    const [categoryData, setcategoryData] = useState();
    useEffect(() => {
        fetch("http://localhost:3001/api/category/category", {
          headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
      }})
        .then( response => response.json())
        .then( data => {
            setcategoryData(data)
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
          body: JSON.stringify({ reference:data.get("reference"), name:data.get("name"), price:data.get("price"), description:data.get("description"), category:data.get("category"), resume:data.get("resume") })
        };
        fetch('http://localhost:3001/api/product/addProduct', requestOptions)
          .then(response => response.json())
          .then(dataBack => {
            navigate('/admin/products');
          })
          .catch(error => {
            console.error(error);
          });
    }
    return (
        <>
        <h2>Formulaire ajout produit</h2>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
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
              id="reference"
              label="Reference"
              name="reference"
              autoComplete="reference"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nom"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="price"
              label="Prix"
              name="price"
              autoComplete="price"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="resume"
              label="Resume"
              name="resume"
              autoComplete="resume"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              autoFocus
            />
            <Select
          id="category"
          name="category"
          fullWidth
          required
          label="Categorie"
        >
            {categoryData && categoryData.map((elem) => <MenuItem key={elem.id} value={elem.id}>{elem.name}</MenuItem>)}
        </Select>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >Créer produit</Button>
          </Box>
        </Box>
        </>
    )

}