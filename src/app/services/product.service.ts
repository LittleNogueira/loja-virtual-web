import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { Product } from '../models/Product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  findAll(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }

  findById(id: number): Observable<Product>{
    return this.http.get<Product>(`http://localhost:8080/api/products/${id}`);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/api/products/${id}`);
  }

  save(product: Product): Observable<Product>{
    if(product.id){
      return this.http.put<Product>(`http://localhost:8080/api/products/${product.id}`,product);
    }else{
      return this.http.post<Product>('http://localhost:8080/api/products',product);
    }
  }
}
