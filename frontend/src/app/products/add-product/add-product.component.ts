import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Iproduct';
import { ProductService } from "../product.service";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productList: Product | any;

  constructor(private productService: ProductService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.productService.getAllProductsByCategorySelect().subscribe(data=>{
      this.productList = data;
      console.log('DATA SELECT **', this.productList)
    })
  }

  onUpload(e:any){
    console.log('SUBIR ', e.target.files)
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files;
    const filePath = 'upload/imagen.png';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
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
