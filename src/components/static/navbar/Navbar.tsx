import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import {toast} from 'react-toastify'

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        toast.info("Usuário deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar position="static" className="backColor">
        <Toolbar variant="dense">

            <Box display="flex" justifyContent="start">
                <Link to="/home" className='text-decorator-none'>
                <Box mx={3} className='cursor'>
                    <Typography variant="h6" className='navneonText'>
                        Home
                    </Typography>
                </Box>
                </Link>
                <Link to="/posts" className='text-decorator-none'>
                <Box mx={3} className='cursor'>
                    <Typography variant="h6" className='navneonText'>
                        Postagens
                    </Typography>
                </Box>
                </Link>
                <Link to="/temas" className='text-decorator-none'>
                <Box mx={3} className='cursor'>
                    <Typography variant="h6" className='navneonText'>
                        Temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioTema" className='text-decorator-none'>
                <Box mx={3} className='cursor'>
                    <Typography variant="h6" className='navneonText'>
                        Cadastrar Tema
                    </Typography>
                </Box>
                </Link>
                
                    <Box mx={3} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" className='navneonText'>
                            Logout
                        </Typography>
                    </Box>
                

            </Box>
        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;