import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable()
export class AdminService {
  private products: Product[] = [];

  constructor(private apiService: ApiService) { }

  public get getProducts(): Product[] {
    return this.products;
  }

  public loadProductData() {
    this.apiService.get('products').subscribe(productsData => {
      console.log(productsData, 'productsData');
      this.products = productsData;
    });
  }

}
