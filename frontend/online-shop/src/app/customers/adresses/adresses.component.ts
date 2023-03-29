import { Adress } from './../../models/adress.model';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastService } from 'src/app/core/toast.service';

import { AdressAddEditComponent } from './../adress-add-edit/adress-add-edit.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdressService } from 'src/app/services/adress.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.css']
})
export class AdressesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'type',
    'street',
    'houseNumber',
    'zip',
    'city',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  customerId: number ;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private adressService: AdressService,
    private toastService: ToastService
  ) {
    this.customerId = parseInt(this._activatedRoute.snapshot.paramMap.get('customerId')!);
  }

  ngOnInit(): void {
    this.getAdressList();
  }


  getAdressList() {
    this.adressService.getAdressesByCusomerId(this.customerId).subscribe({
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

  deleteAdress(id: number) {
    this.adressService.deleteAdressById(id).subscribe({
      next: (res) => {
        this.toastService.openSnackBar('Adress deleted!', 'done');
        this.getAdressList();
      },
      error: console.log,
    });
  }

  openAddEditForm(customerId: number) {
    const dialogRef = this._dialog.open(AdressAddEditComponent,     { data: {
      customerId: customerId
    }});
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAdressList();
        }
      },
    });
  }
  openEditForm(data: Adress,customerId: number) {
    const dialogRef = this._dialog.open(AdressAddEditComponent, {
      data: {
        adress:data,
        customerId: customerId
      }
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAdressList();
        }
      },
    });
  }
}
