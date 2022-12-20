import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/Icategory';
import { Product } from 'src/app/interfaces/Iproduct';
import { environment } from 'src/environments/environment';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  public searchCategory = 0;
  productList: Product | any;
  URL_ASSETS: any = environment.ASSETS_IMG;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.searchCategory = data.id;
      // console.log('url id enviada: ', data.categoryId)
      this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData=>{
        this.productList = categoryData;
        console.log('DATA 2', this.productList)
      })
    })
  }

}
