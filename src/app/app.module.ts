import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ProductComponent} from './product.component';
import { EmailenDirective } from './emailen.directive'


@NgModule({
  declarations: [
    ProductComponent,
    EmailenDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
