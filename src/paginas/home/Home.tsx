import { useEffect } from 'react'
import './Home.css';
import { Typography, Box, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import ListaPostagemHome from '../../components/postagens/listapostagem/ListaPostagemHome';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/user/UserReducer';
import { toast } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModalUsuario from '../../components/usuarios/modalusuario/ModalUsuario';

function Home() {

    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const nome = useSelector<UserState, UserState["names"]>(
        (state) => state.names
    );
    const foto = useSelector<UserState, UserState["foto"]>(
        (state) => state.foto
    );

    useEffect(() => {
        if (token === '') {
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
                        <Box style={{ width: '100%', borderRadius: '15px' }} my={2}>
                            <img src={foto} alt="" className='imgPost' />
                            <Typography variant="h5" > {nome} </Typography>
                        </Box>
                        <Box display='flex' flexDirection='column'>
                            <Box display='flex' justifyContent='center'>
                                <Box marginBottom='25px'>
                                    <ModalUsuario />
                                </Box>
                            </Box>
                            <Box display='flex' my={1}>
                                <Typography variant="h6" marginX="10px" textAlign="center">
                                    Chat
                                </Typography>
                                <Box mx={1}>
                                    <ChatIcon className='iconHome' />
                                </Box>
                            </Box>
                            <Box display='flex' my={1}>
                                <Typography variant="h6" marginX="10px" textAlign="center">
                                    Favoritos
                                </Typography>
                                <Box mx={1}>
                                    <FavoriteBorderIcon className='iconHome' />
                                </Box>
                            </Box>
                            <Box display='flex' my={1}>
                                <Typography variant="h6" marginX="10px" textAlign="center">
                                    Contate-nos
                                </Typography>
                                <Box mx={1}>
                                    <EmailIcon className='iconHome' />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={6} justifyContent='center' alignItems='center'>
                    <Box display='flex' className='containerForm' height='100px'>
                        <Box justifyContent='left' width='20%' >
                            <img src={foto} alt="" className='imgPost' />
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
                    <Box display="flex" className="containerHome" marginLeft="20px">
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