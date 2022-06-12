import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-products-searcher',
  templateUrl: './products-searcher.component.html',
  styleUrls: ['./products-searcher.component.scss']
})
export class ProductsSearcherComponent implements OnInit, OnDestroy {
  private inputChanges$ = new Subject<string>();

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.inputChanges$.pipe(
      debounceTime(300),
    ).subscribe((value: string) => {
      console.log(value, 'value`');
      this.productListService.productGetByPhrase(value);
    });
  }

  ngOnDestroy(): void {
    this.inputChanges$.unsubscribe();
  }

  public inputChange(event: any): void {
    this.inputChanges$.next(event.target.value);
  }

}
