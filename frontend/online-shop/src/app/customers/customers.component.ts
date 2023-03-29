import { CustomerEditComponent } from './customer-edit/customer-edit.component';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../services/customer.service';
import { ToastService } from '../core/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'firstName',
    'lastName',
    'email',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private customerService: CustomerService,
    private toastService: ToastService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomerList();
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(CustomerEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCustomerList();
        }
      },
    });
  }

  getCustomerList() {
    this.customerService.getCustomerList().subscribe({
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

  deleteEmployee(id: number) {
    this.customerService.deleteCustomerById(id).subscribe({
      next: (res) => {
        this.toastService.openSnackBar('Employee deleted!', 'done');
        this.getCustomerList();
      },
      error: console.log,
    });
  }

  viewCustomerAdresses(cusomterId: number){
    this._router.navigate(['/adresses', cusomterId]);
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CustomerEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCustomerList();
        }
      },
    });
  }
}
