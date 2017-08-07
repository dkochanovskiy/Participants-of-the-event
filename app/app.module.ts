import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
// @NgModule({
//     imports:      [ BrowserModule, FormsModule , HttpModule,
//         LocalStorageModule.withConfig({
//             prefix: 'participantsoftheevent',
//             storageType: 'localStorage'
//         })],
//     declarations: [ AppComponent ],
//     bootstrap:    [ AppComponent ]
// })
export class AppModule { }