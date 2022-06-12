import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component';
import { DeleteProductModalComponent } from './components/delete-product-modal/delete-product-modal.component';
import { AdminComponent } from './admin.component';
import { AdminService } from './service/admin.service';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    AddProductModalComponent,
    DeleteProductModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AdminRoutingModule
  ],
  exports: [
    AddProductModalComponent,
    DeleteProductModalComponent
  ],
  providers: [AdminService]
})
export class AdminModule { }
