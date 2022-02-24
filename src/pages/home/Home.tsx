import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import TabPostagem from '../../components/posts/tabpost/TabPostagem';
import './Home.css';
import ModalPostagem from '../../components/posts/modalPost/ModalPostagem';
import useLocalStorage from 'react-use-localstorage';
import { useHistory } from 'react-router-dom';

function Home() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == ""){
            alert("Você precisa estar logado")
            history.push("/login")
        }
    })

    return (
        <>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="homeBG">
                
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} className="textHome">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='button'>Ver Postagens</Button>
                    </Box>
                </Grid>
            </Grid>
            <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
        </>
    );
}

export default Home;