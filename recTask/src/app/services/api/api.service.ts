import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  private dataToSend(data: any): string {
    console.log(data, 'data')
    console.log(JSON.stringify(data),'body stringfly 2');
    return JSON.stringify(data);
  }

  public get(url: string, options = {params: {}}): Observable<any> {
    return this.httpClient.get(`${this.apiUrl + url}`, {params: options.params});
  }

  public getWithHttpParams(url: string, params: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl + url}`, { params });
  }

  public post(url: string, body: any, options = {params: {}}): Observable<any> {
    return this.httpClient.post(`${this.apiUrl + url}`, this.dataToSend(body), {params: options.params});
  }

  public put(url: string, body: any, options = {params: {}}): Observable<any> {
    return this.httpClient.put(`${this.apiUrl + url}`, this.dataToSend(body), {params: options.params});
  }

  public delete(url: string, options = {params: {}}): Observable<any> {
    return this,this.httpClient.delete(`${this.apiUrl + url}`, {params: options.params});
  }

}