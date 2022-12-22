import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Iproduct';
import { ProductService } from "../product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productList: Product | any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProductsByCategorySelect().subscribe(data=>{
      this.productList = data;
      console.log('DATA SELECT **', this.productList)
    })
  }

  addNewProduct(form:any){
    console.log(form.value);

    let newProduct = {
      categoryId: form.value.product_category,
      nombre: form.value.product_name,
      descripcion: form.value.product_description,
      precio: form.value.product_precio,
      img: form.value.product_img,
      disponibilidad: 1,
      color: form.value.product_color,
    }
    console.log(newProduct);
    this.productService.createProduct(newProduct).subscribe(data=>{
      console.log(data);
    })
  }
}
