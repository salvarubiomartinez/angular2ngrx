import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import {Model, User} from './models/Model';
import {Observable} from 'rxjs/Observable';
import { GetUsers, UpdateUser, CreateUser, DeleteUser, GetUser, SetUser, SetUsers, Log } from './reducers/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{  
  title = 'app';
  users: Observable<User[]>
  error;
  log: Observable<string>
  constructor(private store: Store<Model>){}
  ngOnInit(): void {
    this.users = this.store.select('usersList');  
    this.error = this.store.select('error');  
    this.log = this.store.select('log');
    this.store.dispatch({type:GetUsers});
  }
  create(name, age){  
    this.store.dispatch({type:CreateUser, payload: {name: name.value, age: age.value}});
    name.value = "";
    age.value = "";
  }
  delete(id){
    this.store.dispatch({type: Log, payload: "delete, id: " + id});
    this.store.dispatch({type: DeleteUser, payload: id});
  }
}
