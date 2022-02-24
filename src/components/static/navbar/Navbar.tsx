import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        history.push('/login')
    }

    return (
        <>
            <AppBar position="static" className="backColor">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" className='neonText'>
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='neonText'>
                                home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/posts" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='neonText'>
                                postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/temas" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='neonText'>
                                temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formularioTema" className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='neonText'>
                                cadastrar tema
                            </Typography>
                        </Box>
                        </Link>
                        
                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" className='neonText'>
                                    logout
                                </Typography>
                            </Box>
                        

                    </Box>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;