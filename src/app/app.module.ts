import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { CalcDiscountPipe } from './Pipes/calc-discount.pipe';
import { CardPipe } from './Pipes/card.pipe';
import { ShadowDirective } from './Directives/shadow.directive';
import { ProductsPerantComponent } from './components/products-perant/products-perant.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { ProductsService } from './Services/products.service';
import { TestAPIComponent } from './components/test-api/test-api.component';
import { TestApiService } from './Services/test-api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductByCategoryComponent } from './components/product-by-category/product-by-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsByJsonServerComponent } from './components/products-by-json-server/products-by-json-server.component';
import { JsonServerProductDetailsComponent } from './components/json-server-product-details/json-server-product-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { RegisterComponent } from './components/register/register.component';
import { UserService } from './user/services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    ProductComponent,
    ProductsListComponent,
    ImgStyleDirective,
    CalcDiscountPipe,
    CardPipe,
    ShadowDirective,
    ProductsPerantComponent,
    NotfoundComponent,
    ShowProductsComponent,
    TestAPIComponent,
    ProductByCategoryComponent,
    ProductDetailsComponent,
    ProductsByJsonServerComponent,
    JsonServerProductDetailsComponent,
    AdminComponent,
    AddNewProductComponent,
    EditProductComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService, TestApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
