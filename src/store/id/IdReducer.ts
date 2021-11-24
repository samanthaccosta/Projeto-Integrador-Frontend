import {Action } from './actionsId';

export interface IdState {
    id: number
}

const initialState = {
    
    id:0
}

export const idReducer = (state: IdState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_ID": {
            return {id: action.payload};
        }

        default:
            return state
    }
}