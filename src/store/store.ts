import {createStore} from 'redux';
import { idReducer } from './id/IdReducer';
import { userReducer } from './user/UserReducer';

const store = createStore(userReducer);
const storeid = createStore(idReducer);

export default store;