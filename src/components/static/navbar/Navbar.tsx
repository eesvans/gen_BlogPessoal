import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
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
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='neonText'>
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='neonText'>
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='neonText'>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" className='neonText'>
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className='neonText'>
                                    logout
                                </Typography>
                        </Box>
                        </Link>
                        
                    </Box>
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar;