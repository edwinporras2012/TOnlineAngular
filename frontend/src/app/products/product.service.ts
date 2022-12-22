import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from "../interfaces/Iproduct";
import { Observable } from "rxjs";
import { Category } from '../interfaces/Icategory';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient : HttpClient) { }

  createProduct(productBody:any):Observable<Product>{
    const baseUrl= environment.API_BACKEND_PRODUCT;
    return this.httpclient.post<Product>(baseUrl, productBody)
  }
  viewProduct(productId:any):Observable<Product>{
    const baseUrl= environment.API_BACKEND_PRODUCT_CATEGORY + "/byproduct/" + productId;
    return this.httpclient.get<Product>(baseUrl)
  }
  viewAllProduct():Observable<Product>{
    const baseUrl= environment.API_BACKEND_PRODUCT;
    return this.httpclient.get<Product>(baseUrl)
  }
  updateProduct(productId:any, productBody:any):Observable<Product>{
    const baseUrl= environment.API_BACKEND_PRODUCT + "/"+ productId;
    return this.httpclient.put<Product>(baseUrl, productBody)
  }
  deleteProduct(productId:any):Observable<Product>{
    const baseUrl= environment.API_BACKEND_PRODUCT + "/"+ productId;
    return this.httpclient.delete<Product>(baseUrl)
  }
  searchCategoryProduct(categoryId:any):Observable<Product>{
    const baseUrl= environment.API_BACKEND_PRODUCT_CATEGORY + "/bycategory/" + categoryId;
    console.log('URL', baseUrl);
    return this.httpclient.get<Product>(baseUrl)
  }
  getAllProductsByCategorySelect():Observable<Product>{
    const baseUrl= environment.API_BACKEND_PRODUCT_CATEGORY;
    return this.httpclient.get<Product>(baseUrl)
  }
  searchDateProduct(dateParams:any):Observable<Product>{
    const baseUrl= environment.API_BACKEND_PRODUCT + "/date=" + dateParams;
    return this.httpclient.get<Product>(baseUrl)
  }
  getCategory(){
    const categoryUrl= environment.API_BACKEND_CATEGORY;
    return this.httpclient.get<Category>(categoryUrl)
  }

}
