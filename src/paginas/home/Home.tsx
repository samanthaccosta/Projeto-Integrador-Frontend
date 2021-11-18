import React, { useEffect } from 'react'
import './Home.css';
import { Typography, Box, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import ListaPostagemHome from '../../components/postagens/listapostagem/ListaPostagemHome';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';



function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
      const nome = useSelector<TokenState, TokenState["names"]>(
        (state) => state.names
    );
    const tipoUsuario = useSelector<TokenState, TokenState["tipoUsuario"]>(
        (state) => state.tipoUsuario
    );
    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true, 
                pauseOnHover: false, 
                draggable: false, 
                theme: 'colored', 
                progress: undefined 
            })
            history.push('/login')
        } 
    }, [token])
    return (
        <>
            <Grid container direction='row' justifyContent="center" className='fundo-home' display='flex'>
                <Grid item xs={2}>
                    <Box display="flex" className="containerHome" marginRight="20px">
                    <Box style={{ width:'100%', borderRadius:'15px'}} >    
                            <img src="https://i.imgur.com/fbO3Y7f.jpg" alt="" className='imgPost'/>   
                        </Box>
                        <Typography variant="h5" marginBottom="20px"> {tipoUsuario} </Typography>
                        <Typography variant="h6" marginX="10px" textAlign="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolor totam reiciendis repellendus dolorem temporibus consequuntur iusto
                            debitis, fugit voluptatum ea pariatur debitis, fugit voluptatum ea pariatur sequi veritatis facilis
                            quasi asperiores? Praesentium dolorum eum eos!</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} justifyContent='center' alignItems='center'>
                    <Box display='flex' className='containerForm' height='8%'>
                        <Box justifyContent='left' width='20%' >
                            <img src="https://i.imgur.com/fbO3Y7f.jpg" alt="" className='imgPost'/>     
                        </Box>
                        <Box width='80%'>
                            <ModalPostagem />
                        </Box>
                    </Box>
                  <Box marginBottom={15}> 
                  <ListaPostagemHome />
                  </Box>   
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" className="containerHome" marginLeft="20px"  minHeight='600px'  >
                        <Typography variant="h4" marginBottom="20px"> Deixe aqui suas ideias</Typography>
                        <Typography variant="h6" marginX="10px" textAlign="justify">  
                        Compartilhe informações e ideias que ajudem na luta para que todos os brasileiros possam ter acesso á água potável e saneamento básico pois esses são direitos fundamentais á vida.
                        </Typography>
                        <Box className="imagem-home"></Box>
                    </Box>
                </Grid>
            </Grid>
            

        </>
    )
}

export default Home