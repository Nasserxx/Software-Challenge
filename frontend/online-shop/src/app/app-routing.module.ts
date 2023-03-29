import { AdressesComponent } from './customers/adresses/adresses.component';
import { CustomersComponent } from './customers/customers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartOverviewComponent } from './products/cart-overview/cart-overview.component';

const routes: Routes = [
  { path: 'home', component: ProductsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'adresses/:customerId', component: AdressesComponent },
  { path: 'cart', component: CartOverviewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
