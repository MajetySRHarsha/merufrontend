import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PageheaderComponent } from './pageheader/pageheader.component';

const routes: Routes = [
  { path: 'form-component', component: FormComponent },
  { path: 'pageheader-component', component: PageheaderComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FormComponent];
