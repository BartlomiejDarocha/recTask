import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api/api.service';
import { AddProductModalComponent } from '../components/add-product-modal/add-product-modal.component';

@Injectable()
export class AdminService {
  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  public loadProductData(): Observable<any> {
    return this.apiService.get('products');
  }

  public deleteProduct(productId: number): Observable<any> {
    return this.apiService.delete(`products/${productId}`);
  }

  public editProduct(product: Product): Observable<any> {
    return this.apiService.put(`products/${product.id}`, product);
  }

  public addProduct(product: Product): Observable<any> {
    return this.apiService.put(`products`, product);
  }

  public openAddEditModal(product: Product): void {
    const modalRef = this.dialog.open(AddProductModalComponent, {
      data: product,
    });

    modalRef.afterClosed().subscribe(result => {
      console.log(result, 'The dialog was closed');
      if (result) {
        console.log('są wyniki');
      }
    });
  }

}
