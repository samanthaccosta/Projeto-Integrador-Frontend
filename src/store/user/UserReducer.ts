import {Action } from './actions';

export interface UserState {
    tokens: string,
    id: string,
    names: string,
    tipoUsuario: string,
    foto: string,
    usuario:string
}

const initialState = {
    tokens: "",
    id:"",
    names: "",
    tipoUsuario: "",
    foto: "",
    usuario:""
}

export const userReducer = (state: UserState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, names: state.names, tipoUsuario: state.tipoUsuario, foto: state.foto, usuario:state.usuario, id:state.id};
        }
        case "ADD_NAME": {
            return {names: action.payload, tokens: state.tokens, tipoUsuario: state.tipoUsuario, foto: state.foto, usuario:state.usuario, id:state.id}; 
        }
        
        case "ADD_TIPOUSUARIO": {
            return {tipoUsuario: action.payload, tokens: state.tokens, names: state.names, foto: state.foto, usuario:state.usuario, id:state.id};
        }

        case "ADD_FOTO": {
            return {foto: action.payload, tokens: state.tokens, names: state.names, tipoUsuario: state.tipoUsuario, usuario:state.usuario, id:state.id};
        }

        case "ADD_USUARIO": {
            return {usuario: action.payload, tokens: state.tokens, names: state.names, tipoUsuario: state.tipoUsuario, foto:state.foto, id:state.id};
        }

        case "ADD_ID": {
            return {id: action.payload, tokens: state.tokens, names: state.names, tipoUsuario: state.tipoUsuario, foto:state.foto, usuario:state.usuario}; 
        }

        default:
            return state
    }
}