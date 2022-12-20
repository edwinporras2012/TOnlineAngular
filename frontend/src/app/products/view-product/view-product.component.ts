import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Iproduct';
import { environment } from 'src/environments/environment';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit, AfterViewInit {

  public productId = 0;
  public productData: Product | any;

  URL_ASSETS: any = environment.ASSETS_IMG;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.productId = data.id;
    })
    this.productService.viewProduct(this.productId).subscribe(viewData=>{
      this.productData = viewData;
      console.log('RESULT', this.productData)
    })
  }

  ngAfterViewInit(){
    
  }

}
