import { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';


function CadastroUsuario() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            tipoUsuario: 'Comum',
            usuario: '',
            foto: '',
            senha: ''
        })
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            tipoUsuario: '',
            usuario: '',
            foto: '',
            senha: ''
        })
    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (user.senha.length >= 8 && user.nome.length > 2 && confirmarSenha === user.senha) {
            if (user.usuario.indexOf("@") != -1 && user.usuario.indexOf(".") != -1) { 
                cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuário cadastrado com sucesso!', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined

                })
            }
            else {
                toast.error('Preencha os campos corretamente', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined
                })
            }

        } else {
            toast.error('Preencha os campos corretamente', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            })
        }
    }

    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="img-background" style={{ backgroundColor: '#dae9ee' }}>
                <Box paddingX="20px" border={1} borderRadius={35} className="boxlogin1">
                    <img src="https://i.imgur.com/lkhAgRt.png" alt="" className="tamanho-logo" />
                    <Box display="flex" justifyContent="center">
                        <Box marginBottom='15px'>
                            <form onSubmit={onSubmit}>
                                <Typography className='txtFieldColor' align="left">Nome</Typography>
                                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="digite seu nome" variant="outlined" name="nome" fullWidth className="campo-de-texto1" />
                                <Typography className='txtFieldColor' align="left">Usuario</Typography>
                                <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="digite seu email" variant="outlined" name="usuario" fullWidth className="campo-de-texto1" placeholder='exemplo@email.com' />
                                <Typography className='txtFieldColor' align="left">Foto do perfil (opcional)</Typography>
                                <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="foto do perfil" label="escolha a sua foto" variant="outlined" name="foto" fullWidth className="campo-de-texto1" placeholder='insira o link da imagem' />
                            </form>
                        </Box>
                        <Box className="boxlogin2">
                            <form onSubmit={onSubmit}>
                                <Typography className='txtFieldColor' align="left">Senha</Typography>
                                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="digite sua senha" variant="outlined" name="senha" type="password" fullWidth className="campo-de-texto2" placeholder='Min 8 caracteres' />
                                <Typography className='txtFieldColor' align="left">Confirmar senha</Typography>
                                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="confirmar senha" variant="outlined" name="confirmarSenha" type="password" fullWidth className="campo-de-texto2" />
                               
                            </form>
                            <Box display='flex' marginTop='10px'>
                                <form onSubmit={onSubmit}>
                                    <Link to='/login' className="textDecoration">
                                        <Button size="small" variant="contained" className='botao-cancel'>
                                            Cancelar
                                        </Button>
                                    </Link>
                                    <Button size="small" type="submit" variant="contained" className="botao-cadastro">
                                        Cadastrar
                                    </Button>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </div>
    )
}

export default CadastroUsuario;
