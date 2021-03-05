import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ResumeComponent} from './resume/resume.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import player from 'lottie-web';
import {LottieModule} from 'ngx-lottie';

export function playerFactory(): any {
    return player;
}

@NgModule ({
               declarations: [
                   AppComponent,
                   ResumeComponent,
                   SidenavComponent
               ],
               imports     : [
                   BrowserModule,
                   AppRoutingModule,
                   LottieModule.forRoot ({player: playerFactory}),
               ],
               providers   : [],
               bootstrap   : [AppComponent]
           })
export class AppModule {}
