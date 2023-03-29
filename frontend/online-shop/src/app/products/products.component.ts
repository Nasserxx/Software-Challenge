import { CartService } from './../services/cart.service';
import { Product } from './../models/product.model';
import { ProductService } from '../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastService } from '../core/toast.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./prodcuts.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'number',
    'price',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _toastService: ToastService,
    private _router:Router,
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
    this.productService.getProductList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
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

  addProductToCart(product:Product){
    this.cartService.addProduct(product);

  }
  getProductNumber(){
    if (this.cartService.productsNumber == 0) {
      return '';
    }
    return this.cartService.productsNumber;
  }
  showCart(){
    this._router.navigate(['/cart']);
  }
}

