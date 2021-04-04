import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import {ProductInterface} from '../../../models/product-interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(public dataApiService: DataApiService) { }

  public products: ProductInterface;

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts():void{
    this.dataApiService.getAllProducts()
    .subscribe((products:ProductInterface)=>(this.products=products));
  }


  onDeleteProduct(id: string): void {
    if (confirm('¿esta seguro que quiere eliminar este producto?')) {
      this.dataApiService.deleteProduct(id).subscribe();
    }
  }

  onPreUpdateProduct(product: ProductInterface):void{
    this.dataApiService.selectedProduct=Object.assign({},product);

  }



}

