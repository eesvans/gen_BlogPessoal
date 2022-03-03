import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/themes/themelist/ListaTema'
import ListaPostagem from './components/posts/postlist/ListaPostagem'
import CadastroPost from './components/posts/cadastroPost/CadastroPost'
import DeletarPostagem from './components/posts/deletarPost/DeletarPostagem'
import DeletarTema from './components/themes/deletarTheme/DeletarTema'
import CadastroTema from './components/themes/cadastroTheme/CadastroTema'
import './App.css';
import { Provider } from 'react-redux'
import store from './store/Store'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <div style={{minHeight: "100vh"}}>
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
          <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
