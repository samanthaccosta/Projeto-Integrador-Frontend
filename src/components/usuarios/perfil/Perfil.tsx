import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/UserReducer';
import { IdState } from '../../../store/id/IdReducer';
import { Link } from 'react-router-dom';
import './Perfil.css';


function Perfil() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const id = useSelector<IdState, IdState["id"]>(
        (state) => state.id
    );

    const nome = useSelector<UserState, UserState["names"]>(
        (state) => state.names
    );

    const usuario = useSelector<UserState, UserState["usuario"]>(
        (state) => state.usuario

    );

    const tipoUsuario = useSelector<UserState, UserState["tipoUsuario"]>(
        (state) => state.tipoUsuario

    );

    const foto = useSelector<UserState, UserState["foto"]>(
        (state) => state.foto

    );

    return (
        <>


            <Card>
                <CardContent>
                    <Box display='flex' justifyContent='center' width='100%' >
                        <img src={foto} alt="" className='imgPerfil' />
                    </Box>
                    <Box display='flex' className='txtPerfil'>
                        <Typography variant="subtitle1" fontWeight='bold' mx={1} >
                            Nome:
                        </Typography>
                        <Typography variant="subtitle1" component="h2">
                            {nome}
                        </Typography>
                    </Box>
                    <Box display='flex' className='txtPerfil'>
                        <Typography variant="subtitle1" fontWeight='bold' mx={1}>
                            Usuário:
                        </Typography>
                        <Typography>
                            {usuario}
                        </Typography>
                    </Box>
                    <Box display='flex' className='txtPerfil'>
                        <Typography variant="subtitle1" fontWeight='bold' mx={1}>
                            Senha:
                        </Typography>
                        <Typography>
                            ********
                        </Typography>
                    </Box>
                    <Box display='flex' className='txtPerfil'>
                        <Typography variant="subtitle1" fontWeight='bold' mx={1}>
                        Tipo: 
                        </Typography>
                        <Typography>
                        {tipoUsuario}
                        </Typography>
                    </Box>
                    <Link to={`/editusuario/${id}`} className="text-decorator-none-temas">
                        <Box display='flex' justifyContent='center' mx={1}>
                            <Button variant="contained" className=" btnEdit" size='small' color="primary">
                                editar
                            </Button>
                        </Box>
                    </Link>
                </CardContent>
            </Card>


        </>
    );
}


export default Perfil;