import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-carts.service';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products!: Product[]
  constructor(private productSvc: ProductsService, private shoppingCartSvc: ShoppingCartService){}
  ngOnInit(): void {
    this.productSvc.getProducts()
    .pipe(
      tap((products:Product[]) => this.products = products)
    )
    .subscribe()
  }
  addTocartClick(product: Product):void{
    //console.log('Add to Cart', product);
    this.shoppingCartSvc.updateCart(product);
  }
}
