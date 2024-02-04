import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/users/user/user.component';
import { ProductComponent } from './components/products/product/product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditUserComponent } from './components/users/user/edit-user/edit-user.component';
import { AuthGuard } from './service/auth.guard';
import { Title } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { UserRoleGuard } from './service/user-role.guard';
import { ProductResolveService } from './service/product-resolve.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, title: 'home' },
  {
    path: 'products', component: ProductsComponent,
    // data : { userRole : "admin"}, canActivateChild : [UserRoleGuard], 
    title: 'products',
    children: [
      {
        path: ":id", component: ProductComponent,
        resolve: { product: ProductResolveService }
      },
      { path: ":id/edit", component: EditProductComponent }
    ]
  },
  // { path : 'products/:id', component : ProductComponent},
  // { path : 'products/:id/edit', component : EditProductComponent},
  { path: 'users', component: UsersComponent, title: 'users', canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserComponent },
  { path: 'users/:id/edit', component: EditUserComponent },
  {
    path: 'page-not-found', component: PageNotFoundComponent,
    data: {
      msg: "Page Not Found!!"
    }
  },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
