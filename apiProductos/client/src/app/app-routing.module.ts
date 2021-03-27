import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/components/home/home.component'
import { ListProductsComponent } from './components/admin/list-products/list-products.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:id', component: DetailsProductComponent},
  {path: 'admin/list-products', component: ListProductsComponent}, // por hacer: solo usuarios autentificados
  {path: 'user/login',component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent}, // por hacer: solo usuarios autentificados
  {path: '**', component: Page404Component}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
