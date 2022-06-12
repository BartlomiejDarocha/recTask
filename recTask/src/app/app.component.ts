import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recTask';
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.apiService.get('products').subscribe(data => {
        console.log(data, 'get p');
      });
    }, 1000);
  }
}
