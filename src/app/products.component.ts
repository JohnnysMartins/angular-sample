import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit, OnDestroy {
  private name: string = "";
  private products = [];
  private subs: Subscription;

  constructor(private productsService: ProductsService) {
    
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.subs = this.productsService.productUpdate.subscribe(() =>{
      this.products = this.productsService.getProducts();
    });
  }

  private removeProduct(product: string) {
    this.products = this.products.filter(p => p !== product);
  }

  private onAddProduct(form) {
    if (form.valid) {
      // this.products.push(form.value.name);
      this.productsService.addProduct(form.value.name);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
