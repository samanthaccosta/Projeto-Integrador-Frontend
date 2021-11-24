export type Action = {type: "ADD_ID"; payload: number};

export const addId = (id: number): Action =>({
    type: "ADD_ID",
    payload: id,   
});