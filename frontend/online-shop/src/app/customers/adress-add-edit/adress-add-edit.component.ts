import { Adress } from './../../models/adress.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/core/toast.service';
import { AdressTyp } from 'src/app/models/adress.model';
import { AdressService } from 'src/app/services/adress.service';

@Component({
  selector: 'app-adress-add-edit',
  templateUrl: './adress-add-edit.component.html',
  styleUrls: ['./adress-add-edit.component.css']
})
export class AdressAddEditComponent implements OnInit {
  customerId: number;
  data: any;
  adressForm: FormGroup;
  adressTypes:AdressTyp[] = [ AdressTyp.BILLING, AdressTyp.SHIPPING];

  constructor(
    private toastService: ToastService,
    private _fb: FormBuilder,
    private adressService: AdressService,
    private _dialogRef: MatDialogRef<AdressAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public formData: { customerId: number, adress: {
      [key: string]: any}}

  ) {
    const { customerId, adress } = formData;
    this.customerId = customerId;
    this.data =  adress;
    this.adressForm = this._fb.group({
      street: '',
      houseNumber: '',
      city: '',
      zip: '',
      type: '',
    });


  }

  ngOnInit(): void {
    this.adressForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.adressForm.valid) {
      if (this.data) {

        this.adressService
          .updateAdress(this.customerId, this.adressForm.value)
          .subscribe({
            next: (val: any) => {
              this.toastService.openSnackBar('Adress detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.adressService.addAdress(this.customerId,this.adressForm.value).subscribe({
          next: (val: any) => {
            this.toastService.openSnackBar('Adress added successfully');
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

