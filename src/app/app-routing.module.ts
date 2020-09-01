import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ElephantListComponent } from './elephants/elephant-list/elephant-list.component';
import { ElephantDetailsComponent } from './elephants/elephant-details/elephant-details.component';
import { ElephantItemComponent } from './elephants/elephant-item/elephant-item.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: '', redirectTo: 'elephants', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'elephants', component: ElephantListComponent },
  { path: 'elephants/:id', component: ElephantDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const components = [
  RegisterComponent,
  LoginComponent,
  MainComponent,
  PageNotFoundComponent,
  ElephantListComponent,
  ElephantDetailsComponent,
];
