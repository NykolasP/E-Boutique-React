import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Connexion } from './pages/connexion'
import { Header } from './components/header'
import { HeaderAdmin } from './components/headerAdmin'
import { UsersA } from './pages/usersA';
import { Register } from './pages/register';
import { Logout } from './pages/logout';
import { Products } from './pages/products';
import { Category } from './pages/category';
import { ProductsA } from './pages/productsA';
import { ProductA } from './pages/productA';
import { DeleteProduct } from './components/deleteproduct';
import { Product } from './pages/product';
import { User } from './pages/user';
import { UserDelete } from './components/userDelete';
import { UserEdit } from './components/userEdit';



function App() {
  let userAdmin = false;
  let userClient = false;

    if (JSON.parse(localStorage.getItem('roles')) !== undefined ? JSON.parse(localStorage.getItem("roles")) : null) {
      JSON.parse(localStorage.getItem('roles')).forEach(role => {
        if (role.id_role === 2) {
          userClient = true;
        }
        if (role.id_role === 3) {
          userAdmin = true;
        }
      });
    }

  return (
    <div className="App">
      <BrowserRouter>
        <Header userClient={userClient}/>
        {userAdmin && 
        <>
        <HeaderAdmin />
        <div id="mainContainer2">
          <Routes>
            <Route path="/admin" element={<Home />}></Route>
            <Route path="/admin/users" element={<UsersA />}></Route>
            <Route path="/admin/products" element={<ProductsA />}></Route>
            <Route path="/admin/product/delete/:id" element={<DeleteProduct />}></Route>
            <Route path="/admin/product/productadd" element={<ProductA />}></Route>
          </Routes>
        </div>
        </>
        }
        
        <div id="mainContainer">
          <Routes>
            <Route path="/" render= {(props)=>window.location.reload()} element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="product/:id" element={<Product />}></Route>
            <Route path="category" element={<Category />}></Route>
            <Route path="category/:id" element={<Category />}></Route>
            <Route path="connect" element={<Connexion />}></Route>
            <Route path="profil" element={<User />}></Route>
            <Route path="profil/delete" element={<UserDelete />}></Route>
            <Route path="profil/edit" element={<UserEdit />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="logout" render= {(props)=>window.location.reload()} element={<Logout />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App