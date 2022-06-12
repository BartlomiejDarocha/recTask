import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading = new Subject<boolean>();
  public show(): void {
    console.log('showloader works');
    this.isLoading.next(true);
  }
  public hide() {
    this.isLoading.next(false);
    console.log('hideloader works');
  }
}
