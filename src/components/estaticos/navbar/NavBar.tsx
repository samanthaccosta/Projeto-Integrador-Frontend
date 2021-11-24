import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/user/UserReducer';
import { addName, addTipoUsuario, addToken } from '../../../store/user/actions';
import { toast } from 'react-toastify';

function NavBar() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    const tipoUsuario = useSelector<UserState, UserState["tipoUsuario"]>(
        (state) => state.tipoUsuario
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        dispatch(addName(''));
        dispatch(addTipoUsuario(''));
        toast.info('Usuário deslogado', {
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
    var cadastrarTema
    if (tipoUsuario === 'Admin' && token !== undefined) {  
        cadastrarTema = <Link to="/formularioTema" className="text-decorator-none">
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    Cadastrar Tema
                </Typography>
            </Box>
        </Link>
    }

    if (token !== '') {
        navbarComponent = <AppBar position="static" className="cor-navBar">
            <Toolbar variant="dense">
                <Box>
                    <img src="https://i.imgur.com/kjX8SxB.png" alt="" className="logo-nav" />
                </Box>

                <Box display="flex" justifyContent="space-around" ml="alto" width="100%">
                    <Link to="/home" className="text-decoration-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Feed
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/sobre-nos" className="text-decoration-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Sobre nós
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className="text-decoration-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decoration-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    {cadastrarTema}
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Sair
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

export default NavBar;