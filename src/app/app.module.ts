import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyModuleModule } from 'src/MyModule/my-module/my-module.module';
import { RedElDirective } from 'src/directive/red-el.directive';

@NgModule({
  declarations: [
    AppComponent, RedElDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
