import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule ,RequestOptions}    from '@angular/http';
import {CustomRequestOptions} from './CustomRequestOptions';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import {reducer} from './reducers/reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(UserEffects)
  ],
  providers: [
   // { provide: RequestOptions, useClass: CustomRequestOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
