import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/core/toast.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit {

  prodForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private productService: ProductService,
    private _dialogRef: MatDialogRef<ProductAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastService: ToastService
  ) {
    this.prodForm = this._fb.group({
      name: '',
      number: '',
      price: '',
    });
  }

  ngOnInit(): void {
    this.prodForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.prodForm.valid) {
      if (this.data) {
        this.productService
          .updateProduct(this.data.id, this.prodForm.value)
          .subscribe({
            next: (val: any) => {
              this.toastService.openSnackBar('Product detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.productService.addProduct(this.prodForm.value).subscribe({
          next: (val: any) => {
            this.toastService.openSnackBar('Product added successfully');
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

