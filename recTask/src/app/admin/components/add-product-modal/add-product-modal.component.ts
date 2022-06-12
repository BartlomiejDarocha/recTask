import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent {
  public productTypes = [ 'namioty' , 'kurtki', 'buty']; 

  constructor(
    public dialogRef: MatDialogRef<AddProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public removePrice(index: number): void {
    this.product.price.splice(index, 1);
  }

  public addPricea(): void {
    this.product.price.push({variant: '', value: 0});
  }

}
