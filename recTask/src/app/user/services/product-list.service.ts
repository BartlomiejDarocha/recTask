import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api/api.service';

@Injectable()
export class ProductListService {
  private products$ = new BehaviorSubject<Product[]>([]);

  constructor(private apiService: ApiService) {}

  public get getProducts$(): BehaviorSubject<Product[]> {
    return this.products$;
  }

  public loadProductData(): void {
    this.apiService.get('products').subscribe((dataProducts: Product[]) => {
      this.products$.next(dataProducts);
    });
  }

  public productGetByPhrase(phrase: string): void {
    this.apiService.get('products', { params: {q: phrase}}).subscribe((dataProducts: Product[]) => {
      this.products$.next(dataProducts);
    });
  }

}
