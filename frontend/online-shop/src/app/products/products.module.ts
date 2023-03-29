import { ProductsComponent } from './products.component';

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddEditComponent,
    CartOverviewComponent,

  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule, ReactiveFormsModule,MatBadgeModule
  ],
  exports: [
    ProductsComponent,
    ProductAddEditComponent
  ]
})
export class ProductsModule { }
