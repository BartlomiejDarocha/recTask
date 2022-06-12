import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private subs: Subscription[] = []
  public products: Product[] = [];
  public displayedColumns: string[] = ['id', 'name', 'type', 'action',];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.subs.filter(sub => sub).forEach(sub => sub.unsubscribe());
  }

  private getData(): void {
    this.adminService.loadProductData();
    const productSubs = this.adminService.getProducts$.subscribe((productsData: Product[]) => {
      this.products = productsData;
      console.log(this.products);
    });
    this.subs.push(productSubs);
  }

  public addProduct(): void {
    const newProduct: Product = {
      name: '',
      desc: '',
      type: '',
      price: [
        { variant: '', value: 0 }
      ],
      imgUrl: ''
    };
    this.adminService.openAddEditModal(newProduct);
  }

  public ediProduct(product: Product): void {
    console.log(product, 'product Edit');
    this.adminService.openAddEditModal({...product});
  }
}
