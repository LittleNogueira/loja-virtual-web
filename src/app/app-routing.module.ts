import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './product/list/list.component';
import { FormComponent } from './product/form/form.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'form', component: FormComponent},
  { path: 'form/:id', component: FormComponent},
  { path: '**', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
