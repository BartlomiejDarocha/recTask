import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {
  private subs: Subscription[] = []
  public products: Product[] = [];

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.subs.filter(sub => sub).forEach(sub => sub.unsubscribe());
  }

  private getData(): void {
    this.productListService.loadProductData();
    const productSubs = this.productListService.getProducts$.subscribe((productsData: Product[]) => {
      this.products = productsData;
    });
    this.subs.push(productSubs);
  }

  public showMore(i: number):void {
    this.products[i].showMore = true;
  }

}
