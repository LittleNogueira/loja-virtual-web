import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './product/list/list.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './product/form/form.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NotifierModule } from 'angular-notifier';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    FormComponent,
    FilterProductPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
