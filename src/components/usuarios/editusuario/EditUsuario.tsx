import { useState, useEffect, ChangeEvent } from 'react';
import { Box,TextField, Button, Container } from '@material-ui/core';
import { Grid,Typography} from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import User from '../../../models/User';
import { buscaId, editUsuario } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/user/UserReducer';
import { addToken } from '../../../store/user/actions';
import './EditUsuario.css';



function CadastroUsuario() {
    const dispatch = useDispatch();
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    ); 

        
    useEffect(() => {
        if (token === "") {
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
            history.push("/login")
        }
    }, [token])

    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            tipoUsuario: '',
            usuario: '',
            foto: '',
            senha: ''
        })


    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }




    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("usuario " + JSON.stringify(user))

        if (id !== undefined && user.senha.length >= 8 && user.nome.length > 2 && confirmarSenha === user.senha) {

            editUsuario(`/usuarios/atualizar`, user, setUser, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Usuário atualizado com sucesso!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            })
            back()
        }
        else {
            toast.error("Preencha os campos corretamente!", {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        }

    }

    function back() {
        dispatch(addToken(''));
        history.push('/login')
    }

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }
    return (
        <div>
            <Grid className='fundo-listap'>
                <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                    <Box className='containerEditUser'>
                        <Container maxWidth='sm' className='topo'>
                            <form onSubmit={onSubmit}>
                                <Typography variant="h5" className='txtAtualizarUser'>Atualizar perfil</Typography>
                                <Typography variant="h6" className='txtFieldColor-edituser' marginTop="10px" align="left">Nome</Typography>
                                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="digite seu nome" variant="outlined" name="nome" fullWidth />
                                <Typography variant="h6" className='txtFieldColor-edituser' marginTop="10px" align="left">Usuario</Typography>
                                <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="digite seu email" variant="outlined" name="usuario" fullWidth className="caixatexto-color-user" placeholder='exemplo@email.com' />
                                <Typography variant="h6" className='txtFieldColor-edituser' marginTop="10px" align="left">Senha</Typography>
                                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="digite sua senha" variant="outlined" name="senha" type="password" fullWidth className="caixatexto-color-user" placeholder='Min 8 caracteres' />
                                <Typography variant="h6" className='txtFieldColor-edituser' marginTop="10px" align="left">Confirmar senha</Typography>
                                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="confirmar senha" variant="outlined" name="confirmarSenha" type="password" fullWidth className="caixatexto-color-user" />
                                <Typography variant="h6" className='txtFieldColor-edituser' marginTop="10px" align="left">Foto de perfil </Typography>
                                <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="Foto de perfil" label="Foto de perfil (opcional)" variant="outlined" name="foto" fullWidth className="caixatexto-color-user" placeholder='Insira a URL da imagem' />     
                            </form>
                            <form onSubmit={onSubmit}>
                                <Link to='/home' className="textDecoration">
                                    <Button size="small" variant="contained" className='botao-cancel-edit'>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button size="small" type="submit" variant="contained" className="botao-atualizar">
                                    Atualizar
                                </Button>
                            </form>
                        </Container>
                    </Box>
                </Grid>
            </Grid>

        </div >
    )
}

export default CadastroUsuario;


