import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { GetUsers, UpdateUser, CreateUser, DeleteUser, GetUser, SetUser, SetUsers, NetworkError } from '../reducers/reducer'

@Injectable()
export class UserEffects {
    url: string = "http://localhost:3000";
    constructor(
        private http: Http,
        private actions$: Actions
    ) { }

    @Effect() getUsers$ = this.actions$
        .ofType(GetUsers)
        .switchMap(_ => this.http.get(this.url + '/users')
            .map(res => ({ type: SetUsers, payload: res.json() }))
            .catch((error) => Observable.of({ type: NetworkError, payload: error }))
        );

    @Effect() getUser$ = this.actions$
        .ofType(GetUser)
        .switchMap(action => this.http.get(this.url + '/users/' + action.payload)
            .map(res => ({ type: SetUser, payload: res.json() }))
            .catch((error) => Observable.of({ type: NetworkError, payload: error }))
        );

    @Effect() createUser$ = this.actions$
        .ofType(CreateUser)
        .switchMap(action =>
            this.http.post(this.url + '/users', action.payload, {})
                .map(res => ({ type: GetUsers }))
                .catch((error) => Observable.of({ type: NetworkError, payload: error }))
        );

    @Effect() deleteUser$ = this.actions$
        .ofType(DeleteUser)
        .switchMap(action => this.http.delete(this.url + '/users/' + action.payload)
            .map(res => ({ type: GetUsers }))
            .catch((error) => Observable.of({ type: NetworkError, payload: error }))
        );
}