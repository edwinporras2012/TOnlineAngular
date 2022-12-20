import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/Icategory';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {

  categoryList: Category | any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(data=>{
      this.categoryList = data;
      console.log('DATA', this.categoryList)
    })
  }

}
