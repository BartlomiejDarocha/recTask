import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { ProductsSearcherComponent } from './components/products-searcher/products-searcher.component';
import { ProductListService } from './services/product-list.service';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { ShowMorePipe } from './pipes/show-more.pipe';



@NgModule({
  declarations: [
    ProductsViewComponent,
    ProductsSearcherComponent,
    ShowMorePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    UserRoutingModule,
  ],
  providers: [
    ProductListService
  ]
})
export class UserModule { }
