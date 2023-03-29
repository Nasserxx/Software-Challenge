import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/toast.service';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductAddEditComponent } from '../product-add-edit/product-add-edit.component';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.css']
})
export class CartOverviewComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'quantity',
    'price',
  ];
  dataSource!: MatTableDataSource<any>;


  constructor(
    private _dialog: MatDialog,
    private _toastService: ToastService,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.getProductsList();
  }

  openAddEditProdForm() {
    const dialogRef = this._dialog.open(ProductAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductsList();
        }
      },
    });
  }

  getProductsList() {

        this.dataSource = new MatTableDataSource(this.cartService.order.orderPositions);


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(id: number) {
    this.productService.deleteProductById(id).subscribe({
      next: (res) => {
        this._toastService.openSnackBar('Product deleted!', 'done');
        this.getProductsList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(ProductAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductsList();
        }
      },
    });
  }

}

