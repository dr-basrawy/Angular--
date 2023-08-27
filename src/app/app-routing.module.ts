import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { MainComponent } from './components/main/main.component';
import { ProductsPerantComponent } from './components/products-perant/products-perant.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestAPIComponent } from './components/test-api/test-api.component';
import { ProductByCategoryComponent } from './components/product-by-category/product-by-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsByJsonServerComponent } from './components/products-by-json-server/products-by-json-server.component';
import { JsonServerProductDetailsComponent } from './components/json-server-product-details/json-server-product-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: "",redirectTo: "/home",pathMatch:"full"
  
  },{
   path:"home",component: MainComponent
  },
  
  {
    path: "task2",
    component:ProductsListComponent
  },{
    path: "task4",
    component: ProductsPerantComponent
  },
  {
    path: "api",
    component: TestAPIComponent
  },
  {
    path: "productsByCatID",
    component: ProductByCategoryComponent
  },
  {
    path: "products-by-json-server",
    component: ProductsByJsonServerComponent
  },
  {
    path: "details-json-server/:id",
    component: JsonServerProductDetailsComponent
  },
  {
    path: "product/:id",
    component: ProductDetailsComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate:[authGuard]
  },
  {
    path: "admin/add-new-product",
    component: AddNewProductComponent
  },
  {
    path: "admin/edit/:id",
    component: AddNewProductComponent
  },
  {
    path: "admin/edit-product/:id",
    component: EditProductComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "auth",
    loadChildren: () => import('./user/user.module').then(m=> m.UserModule)
  },
  {
    path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
