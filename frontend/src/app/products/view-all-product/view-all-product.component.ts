import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Iproduct';
import { environment } from 'src/environments/environment';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList: Product | any;
  URL_ASSETS: any = environment.ASSETS_IMG;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllProduct().subscribe(data=>{
      this.productList = data;
      console.log('DATA VIEW ALL ', this.productList)
    })
  }
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
