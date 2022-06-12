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
  displayedColumns: string[] = ['id', 'name', 'type', 'action'];

  constructor(private adminService: AdminService ) { }

  ngOnInit(): void {
    this.adminService.loadProductData();
    this.products = this.adminService.getProducts;
  }
}
