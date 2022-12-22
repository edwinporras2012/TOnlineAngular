import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public productId = 0;
  public productDetails: Product | any;
  productList: Product | any;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.productId = data.id;

      this.productService.viewProduct(this.productId).subscribe(productData=>{
        this.productDetails = productData;
        console.log('DETALLES PRODUCTO: ', this.productDetails)
      })

      this.productService.getAllProductsByCategorySelect().subscribe(data=>{
        this.productList = data;
        console.log('DATA SELECT **', this.productList)
      })
    })
  }

  updateProduct(form:any){
    console.log(form);

    const updateProduct = {
      categoryId: form.value.product_category,
      nombre: form.value.nombre,
      descripcion: form.value.descripcion,
      precio: form.value.precio,
      // img: '',
      disponibilidad: form.value.disponibilidad,
      color: form.value.color,
    }
    // console.log(newProduct);
    this.productService.updateProduct(this.productId, updateProduct).subscribe(data=>{
      console.log('DATO 1 ', this.productId)
      console.log('DATO 2 ', updateProduct)
      console.log(data);
    })
  }

}
