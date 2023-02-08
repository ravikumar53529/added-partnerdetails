import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartnersDetailsComponent } from './partners-details/partners-details.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'partners', component: PartnersComponent },
  {
    path: 'partners-details/:id',
    component: PartnersDetailsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
