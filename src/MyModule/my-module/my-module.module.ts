import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { FirstComponentComponent } from '../FirstComponent/first-component/first-component.component';


@NgModule({
  declarations: [FirstComponentComponent],
  imports: [
    CommonModule,
    MyModuleRoutingModule
  ],
  exports: [FirstComponentComponent]
})
export class MyModuleModule { }
