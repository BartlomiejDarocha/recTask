import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api/api.service';
import { AddProductModalComponent } from '../components/add-product-modal/add-product-modal.component';

@Injectable()
export class AdminService {
  private products$ = new BehaviorSubject<Product[]>([]);
  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  private editProduct(product: Product): Observable<any> {
    return this.apiService.put(`products/${product.id}`, product);
  }

  private addProduct(product: Product): Observable<any> {
    return this.apiService.post(`products`, product);
  }

  public get getProducts$(): BehaviorSubject<Product[]> {
    return this.products$;
  }

  public loadProductData(): void {
    this.apiService.get('products').subscribe((dataProducts: Product[]) => {
      this.products$.next(dataProducts);
    });
  }

  public deleteProduct(product: Product): Observable<any> {
    return this.apiService.delete(`products/${product.id}`);
  }


  public openAddEditModal(product: Product): void {
    const modalRef = this.dialog.open(AddProductModalComponent, {
      data: product,
    });

    modalRef.afterClosed().subscribe((product: Product) => {
      if (!product) {
        return;
      }
      if (product.id) {
        this.editProduct(product).subscribe(() => {
          this.loadProductData();
        });
      } else {
        this.addProduct(product).subscribe(() => {
          this.loadProductData();
        });
      }
    });
  }

  public openDeleteModal(product: Product): void {
    const modalRef = this.dialog.open(AddProductModalComponent, {
      data: product,
    });

    modalRef.afterClosed().subscribe((product: Product) => {
      if (!product) {
        return;
      }
      this.deleteProduct(product).subscribe(() => {
        this.loadProductData();
      });
    });

  }

}
