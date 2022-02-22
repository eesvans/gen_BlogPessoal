import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/themes/themelist/ListaTema'
import ListaPostagem from './components/posts/postlist/ListaPostagem'
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/posts'>
            <ListaPostagem />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
