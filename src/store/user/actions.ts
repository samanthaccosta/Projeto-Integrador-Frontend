export type Action = {type: "ADD_TOKEN"|"ADD_NAME"|"ADD_TIPOUSUARIO"|"ADD_FOTO"|"ADD_USUARIO"|"ADD_ID"; payload: string};

export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});

export const addName = (nome: string): Action =>({
    type: "ADD_NAME",
    payload: nome,
});

export const addTipoUsuario = (tipoUsuario: string): Action =>({
    type: "ADD_TIPOUSUARIO",
    payload: tipoUsuario,
});

export const addFoto = (foto: string): Action =>({
    type: "ADD_FOTO",
    payload: foto, 
});

export const addUsuario = (usuario: string): Action =>({
    type: "ADD_USUARIO",
    payload: usuario, 
});

export const addId = (id: string): Action =>({
    type: "ADD_ID",
    payload: id,   
});