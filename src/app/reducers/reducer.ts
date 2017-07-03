import { ActionReducer, Action } from '@ngrx/store';
import { Model, User } from '../models/Model'

export const GetUsers = 'GetUsers';
export const UpdateUser = 'UpdateUser';
export const CreateUser = 'CreateUser';
export const DeleteUser = 'DeleteUser';
export const GetUser = 'GetUser';
export const SetUser = 'SetUser';
export const SetUsers = 'SetUsers';
export const NetworkError = 'NetworkError';
export const Log = 'Log';

export function reducer(state: Model = {usersList: [], userDetails: null, error: "", log :"logs"}, action: Action) {
    switch (action.type) {
        case SetUser:
            return Object.assign(state, { userDetails: action.payload });

        case SetUsers:
            return Object.assign(state, { usersList: action.payload, error: null });

        case NetworkError:
            return Object.assign(state, { error: action.payload });

        case Log:
            return Object.assign(state, { log: action.payload });

        default:
            return state;
    }
}