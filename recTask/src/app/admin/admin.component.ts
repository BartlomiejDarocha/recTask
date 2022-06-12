import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public products: Product[] = [];
  public displayedColumns: string[] = ['id', 'name', 'type', 'action',];
  public dataLoaded = false;

  constructor(private adminService: AdminService ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.adminService.loadProductData().subscribe((productsData: Product[]) => {
      this.products = productsData;
      this.dataLoaded = true;
    });
  }

  public addProduct() {
    const newProduct: Product = {
      name: '',
      desc: '',
      type: '',
      price: [],
      imgUrl: ''
    };
    
    this.adminService.openAddEditModal(newProduct);
  }
}
