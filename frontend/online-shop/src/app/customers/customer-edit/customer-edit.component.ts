import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/core/toast.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  custForm: FormGroup;
  titles = ['Mr', 'Mrs', 'Ms', 'Dr', 'Prof'];

  constructor(
    private _fb: FormBuilder,
    private customerService: CustomerService,
    private _dialogRef: MatDialogRef<CustomerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastService: ToastService
  ) {
    this.custForm = this._fb.group({
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthDate:''
    });
  }

  ngOnInit(): void {
    this.custForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.custForm.valid) {
      if (this.data) {

        this.customerService
          .updateCustomer(this.data.id, this.custForm.value)
          .subscribe({
            next: (val: any) => {
              this.toastService.openSnackBar('Customer detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.customerService.addCustomer(this.custForm.value).subscribe({
          next: (val: any) => {
            this.toastService.openSnackBar('Customer added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
