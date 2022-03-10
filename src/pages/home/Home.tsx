import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import TabPostagem from '../../components/posts/tabpost/TabPostagem';
import './Home.css';
import ModalPostagem from '../../components/posts/modalPost/ModalPostagem';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == ""){
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")
        }
    })

    return (
        <>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="homeBG">
                
                <Grid alignItems="center" item xs={6}>

                    <Box paddingX={20} className="textHome">
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opinioes!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts">
                        <Button variant="outlined" className='button'>Ver Postagens</Button>
                        </Link>
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